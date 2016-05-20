#!/usr/bin/env bash

docker rmi -f hub.aronim.com/nginx-proxy:latest
docker build --rm -t hub.aronim.com/nginx-proxy .