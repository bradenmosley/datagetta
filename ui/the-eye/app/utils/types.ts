export type batter_stats = {
    Batter : String;
    BatterTeam : String;
    hits : BigInt;
    at_bats : BigInt;
    strikes : BigInt;
    walks : BigInt;
    strikeouts : BigInt;
    homeruns : BigInt;
    extra_base_hits : BigInt;
    plate_appearances : BigInt;
    hit_by_pitch : BigInt;
    sacrifice : BigInt;
    total_bases : BigInt;
    on_base_percentage : Number;
    slugging_percentage : Number;
    games : BigInt;
    batting_average : Number;
    onbase_plus_slugging : Number;
    isolated_power : Number;
    k_percentage : Number;
    base_on_ball_percentage: Number;
}

export type batter_stats_forTable = {
    Batter : String;
    BatterTeam : String;
    hits : Number;
    at_bats : Number;
    strikes : Number;
    walks : Number;
    strikeouts : Number;
    homeruns : Number;
    extra_base_hits : Number;
    plate_appearances : Number;
    hit_by_pitch : Number;
    sacrifice : Number;
    total_bases : Number;
    on_base_percentage : Number;
    slugging_percentage : Number;
    games : Number;
    batting_average : Number;
    onbase_plus_slugging : Number;
    isolated_power : Number;
    k_percentage : Number;
    base_on_ball_percentage: Number;
}

export type pitcher_stats = {
    Pitcher : String;
    PitcherTeam : String;
    total_strikeouts_pitcher : BigInt;
    total_walks_pitcher : BigInt;
    total_out_of_zone_pitches : BigInt;
    misses_in_zone : BigInt;
    swings_in_zone : BigInt;
    total_num_chases : BigInt;
    pitches : BigInt;
    games : BigInt;
    games_started : BigInt;
    total_innings_pitched : BigInt;
    total_batters_faced : BigInt;
}

export type pitcher_stats_forTable = {
    Pitcher : String;
    PitcherTeam : String;
    total_strikeouts_pitcher : Number;
    total_walks_pitcher : Number;
    total_out_of_zone_pitches : Number;
    misses_in_zone : Number;
    swings_in_zone : Number;
    total_num_chases : Number;
    pitches : Number;
    games : Number;
    games_started : Number;
    total_innings_pitched : Number;
    total_batters_faced : Number;
}