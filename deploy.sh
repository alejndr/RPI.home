#!/bin/bash
# My first shell script
echo "Hello $USER"
echo "Deploying webapp"
git reset --hard origin/master
docker rm --force rpi_home
docker build -t home .
docker run -d --name rpi_home -it -p 8000:80 home