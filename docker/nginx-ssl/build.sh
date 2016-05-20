#!/usr/bin/env bash

docker rmi -f hub.aronim.com/nginx-ssl:latest
docker build --rm -t hub.aronim.com/nginx-ssl .