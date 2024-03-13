psql -U $POSTGRES_USER -d $POSTGRES_DB < drop-all.sql
psql -U $POSTGRES_USER -d $POSTGRES_DB < pre-schema.sql
psql -U $POSTGRES_USER -d $POSTGRES_DB < schema_seniordesign_1.sql
psql -U $POSTGRES_USER -d $POSTGRES_DB < views.sql