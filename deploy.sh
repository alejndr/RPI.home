#!/bin/bash
# My first shell script
echo "$(tput setaf 6) Hello $USER"
echo " $(tput setaf 6) Deploying webapp"
git fetch -p
git reset --hard origin/master
echo " $(tput setaf 6) Updated repository"
docker rm --force rpi_home
echo " $(tput setaf 6) Removed previous container"
docker build -t home . --build-arg CACHEBUST=0
docker run -d --name rpi_home -it -p 8000:80 home
echo " $(tput setaf 6) Web deployed"
chmod +x ./deploy.sh