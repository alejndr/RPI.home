#!/bin/bash
# My first shell script
echo "Hello $USER"
echo "Deploying webapp"
git fetch -p
git reset --hard origin/master
docker rm --force rpi_home
docker build -t home . --build-arg CACHEBUST=0
docker run -d --name rpi_home -it -p 8000:80 home
chmod +x ./deploy.sh