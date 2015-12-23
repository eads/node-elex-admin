#!/bin/bash

cd "$( dirname "${BASH_SOURCE[0]}" )"
source ./config.sh

echo "Reset database (reset-db.sh)"
time $DIR/reset-db.sh

echo "Initialize tables (init.sh)"
time $DIR/init.sh

echo "Get results (update.sh)"
time $DIR/update.sh

