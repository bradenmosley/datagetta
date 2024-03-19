-- Create a view that sums the number of pitches thrown by each pitcher
-- and the number of each type of pitch thrown by each pitcher
-- NEED TO REVISE THIS WITH DESIGN GROUP
drop view if exists pitch_sums_view;
create or replace view pitch_sums_view as
select "Pitcher" , "PitcherTeam",
         COUNT(*) as total_pitches,
         COUNT(*) filter (where "AutoPitchType" = 'Curveball') as curveball_count,
         COUNT(*) filter (where "AutoPitchType" = 'Four-Seam') as fourseam_count,
            COUNT(*) filter (where "AutoPitchType" = 'Sinker') as sinker_count,
            COUNT(*) filter (where "AutoPitchType" = 'Slider') as slider_count,
            COUNT(*) filter (where "TaggedPitchType" = 'Fastball' and "AutoPitchType" != 'Four-Seam') as twoseam_count,
            COUNT(*) filter (where "AutoPitchType" = 'Changeup') as changeup_count
from trackman_pitcher
group by ("Pitcher", "PitcherTeam");

-- In Zone Whiff Percentage
-- Chase Percentage
drop view if exists player_stats_view;
create or replace view player_stats_view as
with at_bats_subquery as (
    with hits_subquery as (
        select "Batter", "BatterTeam",
                COUNT(*) filter (where "PlayResult" = 'Single'
                                or "PlayResult" = 'Double'
                                or "PlayResult" = 'Triple'
                                or "PlayResult" = 'HomeRun'
                ) as hits,
                COUNT(*) filter (where "PlayResult" = 'Error'
                                or "PlayResult" = 'Out'
                                or "PlayResult" = 'FieldersChoice'
                                or "KorBB" = 'Strikeout'
                                or "PlayResult" = 'Single'
                                or "PlayResult" = 'Double'
                                or "PlayResult" = 'Triple'
                                or "PlayResult" = 'HomeRun'
                                ) as at_bats
        from trackman_metadata tm, trackman_batter tb
        where tm."PitchUID" = tb."PitchUID" 
        group by ("Batter", "BatterTeam")
    )
    select 
        tb."Batter" as "Batter",
        tb."BatterTeam" as "BatterTeam",
       	hs."hits" as "hits",
        hs."at_bats" as "at_bats",
        COUNT(*) filter (where "PitchCall" = 'StrikeCalled'
                        or "PitchCall" = 'StrikeSwinging'
                        or "PitchCall" = 'FoulBallNotFieldable'
                        ) as strikes,
        COUNT(*) filter (where "KorBB" = 'Walk') as walks,
        COUNT(*) filter (where "KorBB" = 'Strikeout') as strikeouts,
        COUNT(*) filter (where "PlayResult" = 'HomeRun') as homeruns,
        COUNT(*) filter (where "PlayResult" = 'Double'
                        or "PlayResult" = 'Triple'
                        or "PlayResult" = 'HomeRun'
                        ) as extra_base_hits,
        COUNT(*) filter (where "KorBB" = 'Walk'
                        or "PitchCall" = 'InPlay'
                        or "PitchCall" = 'HitByPitch'
                        or "KorBB" = 'Strikeout'
                        ) as plate_appearances,
        COUNT(*) filter (where "PitchCall" = 'HitByPitch') as hit_by_pitch,
        COUNT(*) filter (where "PlayResult" = 'Sacrifice') as sacrifice,
        SUM(case
            when "PlayResult" = 'Single' then 1
            when "PlayResult" = 'Double' then 2
            when "PlayResult" = 'Triple' then 3
            when "PlayResult" = 'HomeRun' then 4
            else 0
            end) as total_bases,
        case when at_bats = 0 then null
            else (hits + COUNT(*) filter (where "KorBB" = 'Walk'
                                    or "PitchCall" = 'HitByPitch'))::decimal
            / (COUNT(*) filter (where "PlayResult" = 'Error'
                                or "PlayResult" = 'Out'
                                or "PlayResult" = 'FieldersChoice'
                                or "KorBB" = 'Strikeout'
                                ) + hits 
                                + COUNT(*) filter (where "KorBB" = 'Walk'
                                                    or "PitchCall" = 'HitByPitch')
                                + COUNT(*) filter (where "PlayResult" = 'Sacrifice' 
                                                    and "TaggedHitType" = 'FlyBall')) 
        end as on_base_percentage,
        case when at_bats = 0 then null
            else 
            SUM(case
            when "PlayResult" = 'Single' then 1
            when "PlayResult" = 'Double' then 2
            when "PlayResult" = 'Triple' then 3
            when "PlayResult" = 'HomeRun' then 4
            else 0
            end)::decimal / at_bats 
        end as slugging_percentage,
        COUNT(distinct "GameUID") as games
    from  hits_subquery hs, trackman_batter tb, trackman_metadata tm
    where hs."Batter" = tb."Batter" and hs."BatterTeam" = tb."BatterTeam" and tb."PitchUID" = tm."PitchUID" 
    group by (tb."Batter", tb."BatterTeam", hs."hits", hs."at_bats")
)
select 
        *,
        case
            when at_bats = 0 then null
            else hits::decimal / at_bats
        end as batting_average,
        on_base_percentage + slugging_percentage as onbase_plus_slugging,
        slugging_percentage - case
            when at_bats = 0 then null
            else hits::decimal / at_bats
        end as isolated_power,
        case
            when plate_appearances = 0 then null
            else strikeouts::decimal / plate_appearances
        end as k_percentage,
        case
            when plate_appearances = 0 then null
            else walks::decimal / plate_appearances
        end as base_on_ball_percentage
from at_bats_subquery;

-- Create Pitcher's stats view with:
-- Total Batters Faced

-- Values AU Baseball uses for strike zone
-- min_plate_side = -0.86
-- max_plate_side = 0.86
-- max_plate_height = 3.55
-- min_plate_height = 1.77

drop view if exists pitcher_stats_view;
create or replace view pitcher_stats_view as
with pitcher_stats_subquery as (
    select "Pitcher", "PitcherTeam",
        COUNT(*) filter (where "KorBB" = 'Strikeout') as total_strikeouts_pitcher,
        COUNT(*) filter (where "KorBB" = 'Walk') as total_walks_pitcher,
        COUNT(*) filter (where "PlateLocHeight" > 3.55
                            or "PlateLocHeight" < 1.77
                            or "PlateLocSide" > 0.86
                            or "PlateLocSide" < -0.86
                            ) as total_out_of_zone_pitches,
        COUNT(*) filter (where "PitchCall" = 'StrikeSwinging' -- Ask if this is all that is needed
                        and "PlateLocHeight" < 3.55
                        and "PlateLocHeight" > 1.77
                        and "PlateLocSide" < 0.86
                        and "PlateLocSide" > -0.86
                        ) as misses_in_zone,
        COUNT(*) filter (where "PitchCall" = 'StrikeSwinging'   -- Ask if this is all that is needed
                        or "PitchCall" = 'FoulBallNotFieldable'
                        or "PitchCall" = 'InPlay'
                        and "PlateLocHeight" < 3.55
                        and "PlateLocHeight" > 1.77
                        and "PlateLocSide" < 0.86
                        and "PlateLocSide" > -0.86
                        ) as swings_in_zone,
        COUNT(*) filter (where "PitchCall" = 'StrikeSwinging'   -- Ask if this is all that is needed
                        or "PitchCall" = 'FoulBallNotFieldable'
                        and "PlateLocHeight" > 3.55
                        and "PlateLocHeight" < 1.77
                        and "PlateLocSide" > 0.86
                        and "PlateLocSide" < -0.86
                        ) as total_num_chases,
        COUNT(*) as pitches,
        COUNT(distinct "GameUID") as games,
        COUNT(*) filter (where "TopBottom" = 'Top'
                        or "TopBottom" = 'Bottom'
                        and "Inning" = 1
                        and "Outs" = 0
                        and "Balls" = 0
                        and "Strikes" = 0
                        ) as games_started,
        ((COUNT(*) filter (where "KorBB" = 'StrikeOut') + 
        SUM("OutsOnPlay"::integer)) / 3) + 
        ((COUNT(*) filter (where "KorBB" = 'StrikeOut') + 
        SUM("OutsOnPlay"::integer)) % 3) / 10 as total_innings_pitched
    from trackman_metadata tm, trackman_pitcher tp, trackman_batter tb
    where tm."PitchUID" = tp."PitchUID" and tm."PitchUID" = tb."PitchUID"
    group by ("Pitcher", "PitcherTeam")
)
select 
    *
from pitcher_stats_subquery;

-- Create a function that calculates the pitch_sums_data for a given time period

drop function if exists get_pitch_count;
create or replace function get_pitch_count(pitcher_name text, pitcher_team text, start_date date, end_date date)
returns table("Pitcher" text, "PitcherTeam" text, "TotalPitches" integer, "CurveballCount" integer, "FourSeamCount" integer, "SinkerCount" integer, "SliderCount" integer, "TwoSeamCount" integer, "ChangeupCount" integer)
as $$
begin
    select tp."Pitcher" , tp."PitcherTeam",
         COUNT(*) as total_pitches,
         COUNT(*) filter (where tp."AutoPitchType" = 'Curveball') as curveball_count,
         COUNT(*) filter (where tp."AutoPitchType" = 'Four-Seam') as fourseam_count,
            COUNT(*) filter (where tp."AutoPitchType" = 'Sinker') as sinker_count,
            COUNT(*) filter (where tp."AutoPitchType" = 'Slider') as slider_count,
            COUNT(*) filter (where tp."TaggedPitchType" = 'Fastball' and tp."AutoPitchType" != 'Four-Seam') as twoseam_count,
            COUNT(*) filter (where tp."AutoPitchType" = 'Changeup') as changeup_count
from trackman_pitcher tp
where tp."Pitcher" = pitcher_name and tp."PitcherTeam" = pitcher_team and tp."UTCDate" >= start_date and tp."UTCDate" <= end_date
group by ("Pitcher", "PitcherTeam");
end;
$$ language plpgsql;