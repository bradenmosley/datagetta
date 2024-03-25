CREATE TABLE "players" (
  "PlayerName" varchar,
  "TeamName" varchar,
  PRIMARY KEY ("PlayerName", "TeamName")
);

CREATE TABLE "teams" (
  "TeamName" varchar UNIQUE PRIMARY KEY,
  "DisplayName" varchar,
  "Conference" varchar
);

CREATE TABLE "conferences" (
  "ConferenceName" varchar UNIQUE PRIMARY KEY
);

CREATE TABLE "trackman_metadata" (
  "PitchUID" uuid UNIQUE PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "GameDate" date,
  "PitchTime" time,
  "Inning" int,
  "TopBottom" varchar,
  "Outs" int,
  "Balls" int,
  "Strikes" int,
  "PitchCall" varchar,
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
  "HomeTeamForeignID" varchar,
  "AwayTeamForeignID" varchar,
  "GameForeignID" varchar,
  "PlayID" varchar
);

CREATE TABLE "trackman_pitcher" (
  "PitchUID" uuid UNIQUE PRIMARY KEY DEFAULT (uuid_generate_v4()),
  "PitchNo" int,
  "PAofInning" int,
  "PitchofPA" int,
  "Pitcher" varchar,
  "PitcherID" int,
  "PitcherThrows" varchar,
  "PitcherTeam" varchar,
  "PitcherSet" varchar,
  "TaggedPitchType" varchar,
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
  "PitchMovementConfidence" varchar
);

CREATE TABLE "trackman_catcher" (
  "PitchUID" uuid UNIQUE PRIMARY KEY DEFAULT (uuid_generate_v4()),
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

CREATE TABLE "trackman_batter" (
  "PitchUID" uuid UNIQUE PRIMARY KEY DEFAULT (uuid_generate_v4()),
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
  "HitLaunchConfidence" varchar,
  "HitLandingConfidence" varchar
);

CREATE TABLE "seasons" (
  "SeasonTitle" varchar UNIQUE PRIMARY KEY,
  "StartDate" date,
  "EndDate" date
);

ALTER TABLE "trackman_batter" ADD FOREIGN KEY ("PitchUID") REFERENCES "trackman_metadata" ("PitchUID") ON DELETE CASCADE;

ALTER TABLE "trackman_catcher" ADD FOREIGN KEY ("PitchUID") REFERENCES "trackman_metadata" ("PitchUID") ON DELETE CASCADE;

ALTER TABLE "trackman_pitcher" ADD FOREIGN KEY ("PitchUID") REFERENCES "trackman_metadata" ("PitchUID") ON DELETE CASCADE;

ALTER TABLE "trackman_pitcher" ADD FOREIGN KEY ("Pitcher", "PitcherTeam") REFERENCES "players" ("PlayerName", "TeamName") ON DELETE CASCADE;

ALTER TABLE "trackman_catcher" ADD FOREIGN KEY ("Catcher", "CatcherTeam") REFERENCES "players" ("PlayerName", "TeamName") ON DELETE CASCADE;

ALTER TABLE "trackman_batter" ADD FOREIGN KEY ("Batter", "BatterTeam") REFERENCES "players" ("PlayerName", "TeamName") ON DELETE CASCADE;

ALTER TABLE "players" ADD FOREIGN KEY ("TeamName") REFERENCES "teams" ("TeamName") ON DELETE CASCADE;

ALTER TABLE "teams" ADD FOREIGN KEY ("Conference") REFERENCES "conferences" ("ConferenceName") ON DELETE CASCADE;
