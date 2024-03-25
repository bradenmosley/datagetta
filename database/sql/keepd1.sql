delete from teams t2 where t2."TeamName" in (select t."TeamName" from teams t where t."Conference" = 'NotSet');

-- delete from trackman_metadata tm where tm."AwayTeam" not in (select t."TeamName" from teams t);
-- delete from trackman_metadata tm where tm."HomeTeam" not in (select t."TeamName" from teams t);