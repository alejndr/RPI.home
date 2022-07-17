#!/bin/bash
# My first shell script
echo -e "\033[1;36m $ Hello $USER \e[m"
echo -e "\033[1;36m $ Deploying webapp \e[m"
git fetch -p
git reset --hard origin/master
echo -e "\033[1;36m $ Updated repository \e[m"
docker rm --force rpi_home
echo -e "\033[1;36m $ Removed previous container \e[m"
docker build -t home . --build-arg CACHEBUST=0
docker run -d --name rpi_home -it -p 8000:80 home
echo -e "\033[1;36m $ Web deployed \e[m"
chmod +x ./deploy.sh