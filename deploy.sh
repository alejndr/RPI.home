#!/bin/bash


BLACK='\033[0;30m'
DARKGRAY='\033[1;30m'
LIGHTGRAY='\033[0;37m'
WHITE='\033[1;37m'
RED='\033[0;31m'
LIGHTRED='\033[1;31m'
GREEN='\033[0;32m'
LIGHTGREEN='\033[1;32m'
ORANGE='\033[0;33m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
LIGHTBLUE='\033[1;34m'
PURPLE='\033[0;35m'
LIGHTPURPLE='\033[1;35m'
CYAN='\033[0;36m'
LIGHTCYAN='\033[1;36m'
NOCOLOR='\e[m'



echo -e "${LIGHTCYAN} $ Hello $USER ${NOCOLOR}"
echo -e "${LIGHTCYAN} $ Deploying webapp ${NOCOLOR}"
git fetch -p
git reset --hard origin/master
echo -e "${LIGHTCYAN} $ Updated repository ${NOCOLOR}"
docker rm --force rpi_home
echo -e "${LIGHTCYAN} $ Removed previous container ${NOCOLOR}"
docker build -t home . --build-arg CACHEBUST=0
docker run -d --name rpi_home -it -p 8000:80 home
echo -e "${LIGHTCYAN} $ Web deployed ${NOCOLOR}"
chmod +x ./deploy.sh