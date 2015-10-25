#!/bin/bash
FILES=../database/postgress/ddl/*.sql
for f in $FILES
do
  echo "Processing $f file..."
  psql test -f "$f" -U test
done


FILES=../database/postgress/sample/*.sql
for f in $FILES
do
  echo "Processing $f file..."
  psql test -f "$f" -U test
done
