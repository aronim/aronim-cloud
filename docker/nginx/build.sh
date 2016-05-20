#!/usr/bin/env bash

docker rmi -f hub.aronim.com/nginx:latest
docker build --rm -t hub.aronim.com/nginx .