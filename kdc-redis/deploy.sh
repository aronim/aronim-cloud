#!/usr/bin/env bash

APP_NAME=ac-redis
IMAGE_NAME=hub.aronim.com/$APP_NAME

curl -i -XDELETE \
    "http://dev.aronim.com:8080/v2/apps/$APP_NAME"

sleep 2

curl -i -XPOST \
    -H "Content-Type: application/json" \
    -d @marathon.json \
    "http://dev.aronim.com:8080/v2/apps"