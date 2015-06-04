#!/usr/bin/env bash

BASEDIR=$(dirname $0)
. ${BASEDIR}/../../scripts/build-run.sh

build ${BASEDIR} com.kungfudev.cloud.webjar.WebJarApplication