#!/usr/bin/env bash

curl -i -XDELETE \
    "http://dev.kungfudev.io:8080/v2/apps/kdc-registry"

sleep 2

curl -i -XPOST \
    -H "Content-Type: application/json" \
    -d @kdc-registry.json \
    "http://dev.kungfudev.io:8080/v2/apps"