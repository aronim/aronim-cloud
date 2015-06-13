#!/usr/bin/env bash

APP_NAME=kdc-redis
IMAGE_NAME=hub.kungfudev.io/$APP_NAME

curl -i -XDELETE \
    "http://dev.kungfudev.io:8080/v2/apps/$APP_NAME"

docker rmi -f $IMAGE_NAME

docker build -t $IMAGE_NAME .

docker push $IMAGE_NAME

curl -i -XPOST \
    -H "Content-Type: application/json" \
    -d @marathon.json \
    "http://dev.kungfudev.io:8080/v2/apps"