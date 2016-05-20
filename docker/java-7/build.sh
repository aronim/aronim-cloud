#!/usr/bin/env bash

export DOCKER_HOST=tcp://192.168.59.103:2376
export DOCKER_CERT_PATH=/Users/kevin/.boot2docker/certs/boot2docker-vm
export DOCKER_TLS_VERIFY=1

docker rmi -f hub.aronim.io/java:7
docker build --rm -t hub.aronim.io/java:7 .