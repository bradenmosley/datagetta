export type player = {
    PlayerName : String;
    TeamName : string;
}

export type playerId = {
    PlayerName : String;
    TeamName : string;
    id : number;
}

export type player_stats = {
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