#!/usr/bin/env bash

docker rmi -f hub.kungfudev.io/nginx-proxy:latest
docker build --rm -t hub.kungfudev.io/nginx-proxy .