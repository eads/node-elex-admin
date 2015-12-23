#!/bin/bash

cd "$( dirname "${BASH_SOURCE[0]}" )"
source config.sh

psql elex -c "DELETE FROM results;"
elex results $RACEDATE | psql elex -c "COPY results FROM stdin DELIMITER ',' CSV HEADER;"
