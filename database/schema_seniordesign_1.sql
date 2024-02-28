CREATE TABLE "players" (
  "player_id" integer PRIMARY KEY,
  "player_name" varchar,
  "team_name" varchar,
  "player_number" int,
  "position" varchar
);

CREATE TABLE "player_statistics" (
  "player_id" integer PRIMARY KEY,
  "at_bats" integer,
  "batting_average" decimal,
  "on_base_percentage" decimal,
  "slugging_percentage" decimal,
  "ops" decimal,
  "isolated_power" decimal,
  "k_percentage" decimal,
  "base_on_ball_percentage" decimal,
  "in_zone_whiff_percentage" decimal,
  "chase_percentage" decimal
);

CREATE TABLE "teams" (
  "team_name" varchar PRIMARY KEY,
  "conference" varchar,
  "number_wins" integer,
  "number_losses" integer,
  "win_percent" decimal
);

CREATE TABLE "conferences" (
  "conference" varchar
);

CREATE TABLE "trackman_metadata" (
  "pitch_uuid" integer PRIMARY KEY,
  "game_date" date,
  "pitch_time" time,
  "inning" int,
  "top_bottom_outs" int,
  "balls" int,
  "strikes" int,
  "pitchCall" varchar,
  "KorBB" varchar,
  "TaggedHitType" varchar,
  "PlayResult" varchar,
  "OutsOnPlay" varchar,
  "RunsScored" varchar,
  "RunnersAt" varchar,
  "HomeTeam" varchar,
  "AwayTeam" varchar,
  "Stadium" varchar,
  "Level" varchar,
  "League" varchar,
  "GameID" varchar,
  "GameUID" varchar,
  "UTCDate" date,
  "UTCtime" time,
  "LocalDateTime" date,
  "UTCDateTime" date,
  "AutoHitType" varchar,
  "System" varchar,
  "HomeTeamForeignID" int,
  "AwayTeamForeignID" int,
  "GameForeignID" int,
  "PlayID" varchar
);

CREATE TABLE "trackman_pitcher" (
  "pitch_uuid" integer PRIMARY KEY,
  "PitchNo" int,
  "PAofInning" int,
  "PitchofPA" int,
  "Pitcher" varchar,
  "PitcherID" int,
  "PitcherThrows" varchar,
  "PitcherTeam" varchar,
  "PitcherSet" varchar,
  "TaggedPitch" varchar,
  "AutoPitchType" varchar,
  "RelSpeed" decimal,
  "VertRelAngle" decimal,
  "HorzRelAngle" decimal,
  "SpinRate" decimal,
  "SpinAxis" decimal,
  "Tilt" varchar,
  "RelHeight" decimal,
  "RelSide" decimal,
  "Extension" decimal,
  "VertBreak" decimal,
  "InducedVert" decimal,
  "HorzBreak" decimal,
  "PlateLocHeight" decimal,
  "PlateLocSide" decimal,
  "ZoneSpeed" decimal,
  "VertApprAngle" decimal,
  "HorzApprAngle" decimal,
  "ZoneTime" decimal,
  "pfxx" decimal,
  "pfxz" decimal,
  "x0" decimal,
  "y0" decimal,
  "z0" decimal,
  "vx0" decimal,
  "vy0" decimal,
  "vz0" decimal,
  "ax0" decimal,
  "ay0" decimal,
  "az0" decimal,
  "SpeedDrop" decimal,
  "PitchLastMeasuredX" decimal,
  "PitchLastMeasuredY" decimal,
  "PitchLastMeasuredZ" decimal,
  "PitchTrajectoryXc0" decimal,
  "PitchTrajectoryXc1" decimal,
  "PitchTrajectoryXc2" decimal,
  "PitchTrajectoryYc0" decimal,
  "PitchTrajectoryYc1" decimal,
  "PitchTrajectoryYc2" decimal,
  "PitchTrajectoryZc0" decimal,
  "PitchTrajectoryZc1" decimal,
  "PitchTrajectoryZc2" decimal,
  "PitchReleaseConfidence" varchar,
  "PitchLocationConfidence" varchar,
  "PicthMovementConfidence" varchar
);

CREATE TABLE "trackman_catcher" (
  "pitch_uuid" integer PRIMARY KEY,
  "Catcher" varchar,
  "CatcherID" int,
  "CatcherThrows" varchar,
  "CatcherTeam" varchar,
  "ThrowSpeed" decimal,
  "PopTime" decimal,
  "ExchangeTime" decimal,
  "TimeToBase" decimal,
  "CatchPositionX" decimal,
  "CatchPositionY" decimal,
  "CatchPositionZ" decimal,
  "ThrowPositionX" decimal,
  "ThrowPositionY" decimal,
  "ThrowPositionZ" decimal,
  "BasePositionX" decimal,
  "BasePositionY" decimal,
  "BasePositionZ" decimal,
  "ThrowTrajectoryXc0" decimal,
  "ThrowTrajectoryXc1" decimal,
  "ThrowTrajectoryXc2" decimal,
  "ThrowTrajectoryYc0" decimal,
  "ThrowTrajectoryYc1" decimal,
  "ThrowTrajectoryYc2" decimal,
  "ThrowTrajectoryZc0" decimal,
  "ThrowTrajectoryZc1" decimal,
  "ThrowTrajectoryZc2" decimal,
  "CatcherThrowCatchConfidence" varchar,
  "CatcherThrowReleaseConfidence" varchar,
  "CatcherThrowLocationConfidence" varchar
);

CREATE TABLE "trackman_hitter" (
  "pitch_uuid" integer PRIMARY KEY,
  "Batter" varchar,
  "BatterID" int,
  "BatterSide" varchar,
  "BatterTeam" varchar,
  "ExitSpeed" decimal,
  "Angle" decimal,
  "Direction" decimal,
  "HitSpinRate" decimal,
  "PositionAt110X" decimal,
  "PositionAt110Y" decimal,
  "PositionAt110Z" decimal,
  "Distance" decimal,
  "LastTracked" decimal,
  "Bearing" decimal,
  "HangTime" decimal,
  "EffectiveVelo" decimal,
  "MaxHeight" decimal,
  "MeasuredDuration" decimal,
  "ContactPositionX" decimal,
  "ContactPositionY" decimal,
  "ContactPositionZ" decimal,
  "HitSpinAxis" decimal,
  "HitTrajectoryXc0" decimal,
  "HitTrajectoryXc1" decimal,
  "HitTrajectoryXc2" decimal,
  "HitTrajectoryXc3" decimal,
  "HitTrajectoryXc4" decimal,
  "HitTrajectoryXc5" decimal,
  "HitTrajectoryXc6" decimal,
  "HitTrajectoryXc7" decimal,
  "HitTrajectoryXc8" decimal,
  "HitTrajectoryYc0" decimal,
  "HitTrajectoryYc1" decimal,
  "HitTrajectoryYc2" decimal,
  "HitTrajectoryYc3" decimal,
  "HitTrajectoryYc4" decimal,
  "HitTrajectoryYc5" decimal,
  "HitTrajectoryYc6" decimal,
  "HitTrajectoryYc7" decimal,
  "HitTrajectoryYc8" decimal,
  "HitTrajectoryZc0" decimal,
  "HitTrajectoryZc1" decimal,
  "HitTrajectoryZc2" decimal,
  "HitTrajectoryZc3" decimal,
  "HitTrajectoryZc4" decimal,
  "HitTrajectoryZc5" decimal,
  "HitTrajectoryZc6" decimal,
  "HitTrajectoryZc7" decimal,
  "HitTrajectoryZc8" decimal,
  "HitLaunchCondfidence" varchar,
  "HitLandingConfidence" varchar
);

CREATE TABLE "seasons" (
  "season_title" varchar,
  "start_date" date,
  "end_date" date
);

CREATE TABLE "pitcher_normative_data" (
  "Pitcher" varchar PRIMARY KEY,
  "MappedPitch" varchar,
  "RelSpeed" decimal,
  "VertRelAngle" decimal,
  "HorzRelAngle" decimal,
  "SpinRate" decimal,
  "SpinAxis" decimal,
  "RelHeight" decimal,
  "RelSide" decimal,
  "Extension" decimal,
  "VertBreak" decimal,
  "InducedVertBreak" decimal,
  "HorzBreak" decimal,
  "VertApprAngle" decimal,
  "HorzApprAngle" decimal
);

ALTER TABLE "trackman_metadata" ADD FOREIGN KEY ("pitch_uuid") REFERENCES "trackman_pitcher" ("pitch_uuid");

ALTER TABLE "trackman_catcher" ADD FOREIGN KEY ("pitch_uuid") REFERENCES "trackman_pitcher" ("pitch_uuid");

ALTER TABLE "trackman_hitter" ADD FOREIGN KEY ("pitch_uuid") REFERENCES "trackman_pitcher" ("pitch_uuid");

ALTER TABLE "trackman_metadata" ADD FOREIGN KEY ("pitch_uuid") REFERENCES "trackman_catcher" ("pitch_uuid");

ALTER TABLE "trackman_hitter" ADD FOREIGN KEY ("pitch_uuid") REFERENCES "trackman_catcher" ("pitch_uuid");

ALTER TABLE "trackman_metadata" ADD FOREIGN KEY ("pitch_uuid") REFERENCES "trackman_hitter" ("pitch_uuid");

ALTER TABLE "players" ADD FOREIGN KEY ("player_name") REFERENCES "trackman_pitcher" ("Pitcher");

ALTER TABLE "players" ADD FOREIGN KEY ("player_name") REFERENCES "trackman_catcher" ("Catcher");

ALTER TABLE "players" ADD FOREIGN KEY ("player_name") REFERENCES "trackman_hitter" ("Batter");

ALTER TABLE "players" ADD FOREIGN KEY ("team_name") REFERENCES "teams" ("team_name");

ALTER TABLE "teams" ADD FOREIGN KEY ("conference") REFERENCES "conferences" ("conference");

ALTER TABLE "player_statistics" ADD FOREIGN KEY ("player_id") REFERENCES "players" ("player_id");

ALTER TABLE "pitcher_normative_data" ADD FOREIGN KEY ("Pitcher") REFERENCES "players" ("player_name");
