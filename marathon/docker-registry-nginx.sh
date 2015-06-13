#!/usr/bin/env bash

curl -i -XDELETE \
    "http://dev.kungfudev.io:8080/v2/apps/docker-registry-nginx"

sleep 2

curl -i -XPOST -H 'Content-Type: application/json' -d @docker-registry-nginx.json http://dev.kungfudev.io:8080/v2/apps