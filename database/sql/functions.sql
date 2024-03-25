-- Create a function that calculates the pitch_sums_data for a given time period
drop function if exists get_pitch_count;
create or replace function get_pitch_count(pitcher_name text, pitcher_team text, start_date date, end_date date)
returns table("Pitcher" varchar, "PitcherTeam" varchar, "total_pitches" bigint, "curveball_count" bigint, "fourseam_count" bigint, "sinker_count" bigint, "slider_count" bigint, "twoseam_count" bigint, "changeup_count" bigint)
as $$
begin
    return query
    select tp."Pitcher" , tp."PitcherTeam",
         COUNT(*) as total_pitches,
         COUNT(*) filter (where tp."AutoPitchType" = 'Curveball') as curveball_count,
         COUNT(*) filter (where tp."AutoPitchType" = 'Four-Seam') as fourseam_count,
            COUNT(*) filter (where tp."AutoPitchType" = 'Sinker') as sinker_count,
            COUNT(*) filter (where tp."AutoPitchType" = 'Slider') as slider_count,
            COUNT(*) filter (where tp."TaggedPitchType" = 'Fastball' and tp."AutoPitchType" != 'Four-Seam') as twoseam_count,
            COUNT(*) filter (where tp."AutoPitchType" = 'Changeup') as changeup_count
from trackman_metadata tm, trackman_pitcher tp
where tp."Pitcher" = pitcher_name and tp."PitcherTeam" = pitcher_team and tp."PitchUID" = tm."PitchUID" and tm."UTCDate" >= start_date and tm."UTCDate" <= end_date
group by (tp."Pitcher", tp."PitcherTeam");
end;
$$ language plpgsql;

drop function if exists get_player_stats;
create or replace function get_player_stats(player_name text, player_team text, start_date date, end_date date)
returns table("Batter" varchar, "BatterTeam" varchar, "hits" bigint, "at_bats" bigint, "strikes" bigint, "walks" bigint, "strikeouts" bigint, "homeruns" bigint, "extra_base_hits" bigint, "plate_appearances" bigint, "hit_by_pitch" bigint, "sacrifice" bigint, "total_bases" bigint, "on_base_percentage" decimal, "slugging_percentage" decimal, "chase_percentage" decimal, "in_zone_whiff_percentage" decimal, "games" bigint, "batting_average" decimal, "onbase_plus_slugging" decimal, "isolated_power" decimal, "k_percentage" decimal, "base_on_ball_percentage" decimal)
as $$
begin 
    return query
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
                                    ) as at_bats,
                    COUNT(*) filter (where "PlateLocHeight" > 3.55
                                    or "PlateLocHeight" < 1.77
                                    or "PlateLocSide" > 0.86
                                    or "PlateLocSide" < -0.86
                                    ) as total_out_of_zone_pitches,
                    COUNT(*) filter (where "PlateLocHeight" < 3.55
                                    and "PlateLocHeight" > 1.77
                                    and "PlateLocSide" < 0.86
                                    and "PlateLocSide" > -0.86
                                    ) as total_in_zone_pitches
            from trackman_metadata tm, trackman_batter tb, trackman_pitcher tp
            where tm."PitchUID" = tb."PitchUID" and tb."PitchUID" = tp."PitchUID" and tm."UTCDate" >= start_date and tm."UTCDate" <= end_date and "Batter" = player_name and "BatterTeam" = player_team
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
            case when total_out_of_zone_pitches = 0 then null
                else COUNT(*) filter (where "PitchCall" = 'StrikeSwinging'
                                    or "PitchCall" = 'FoulBallNotFieldable'
                                    or "PitchCall" = 'InPlay'
                                    or "PlateLocHeight" > 3.55
                                    or "PlateLocHeight" < 1.77
                                    or "PlateLocSide" > 0.86
                                    or "PlateLocSide" < -0.86
                                    )::decimal / total_out_of_zone_pitches
            end as chase_percentage,
            case when total_in_zone_pitches = 0 then null
                else COUNT(*) filter (where "PitchCall" = 'StrikeSwinging'
                                    and "PlateLocHeight" < 3.55
                                    and "PlateLocHeight" > 1.77
                                    and "PlateLocSide" < 0.86
                                    and "PlateLocSide" > -0.86
                                    )::decimal / total_in_zone_pitches
            end as in_zone_whiff_percentage,
            COUNT(distinct "GameUID") as games
        from  hits_subquery hs, trackman_batter tb, trackman_metadata tm, trackman_pitcher tp
        where hs."Batter" = tb."Batter" and hs."BatterTeam" = tb."BatterTeam" and tb."PitchUID" = tm."PitchUID" and tm."PitchUID" = tp."PitchUID" and tm."UTCDate" >= start_date and tm."UTCDate" <= end_date
        group by (tb."Batter", tb."BatterTeam", hs."hits", hs."at_bats", hs."total_out_of_zone_pitches", hs."total_in_zone_pitches")
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
end;
$$ language plpgsql;