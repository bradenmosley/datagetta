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

-- Values AU Baseball uses for strike zone
-- min_plate_side = -0.86
-- max_plate_side = 0.86
-- max_plate_height = 3.55
-- min_plate_height = 1.77
drop view if exists batter_stats_view_2024;
create or replace view batter_stats_view_2024 as
select * from get_all_batter_stats('2/16/24', '6/24/24');

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
        COUNT(*) filter (where "PitchCall" = 'StrikeSwinging'
                        and "PlateLocHeight" < 3.55
                        and "PlateLocHeight" > 1.77
                        and "PlateLocSide" < 0.86
                        and "PlateLocSide" > -0.86
                        ) as misses_in_zone,
        COUNT(*) filter (where "PitchCall" = 'StrikeSwinging'  
                        or "PitchCall" = 'FoulBallNotFieldable'
                        or "PitchCall" = 'InPlay'
                        and "PlateLocHeight" < 3.55
                        and "PlateLocHeight" > 1.77
                        and "PlateLocSide" < 0.86
                        and "PlateLocSide" > -0.86
                        ) as swings_in_zone,
        COUNT(*) filter (where "PitchCall" = 'StrikeSwinging'  
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
        SUM("OutsOnPlay"::integer)) % 3) / 10 as total_innings_pitched,
        COUNT(distinct ("PAofInning", "Inning", "Batter", "GameUID")) as total_batters_faced
    from trackman_metadata tm, trackman_pitcher tp, trackman_batter tb
    where tm."PitchUID" = tp."PitchUID" and tm."PitchUID" = tb."PitchUID"
    group by ("Pitcher", "PitcherTeam")
)
select 
    *
from pitcher_stats_subquery;