#!/usr/bin/env bash

BASEDIR=$(dirname $0)

CLASSPATH="${BASEDIR}/../src/main/resources:${BASEDIR}/../build/classes/main"
for i in `ls ${BASEDIR}/../build/dependencies/*.jar`; do
    CLASSPATH="${CLASSPATH}:${i}"
done;

${JAVA_HOME}/bin/java \
  -Xmx128m -Xms128m \
  -cp ${CLASSPATH} \
  -noverify \
  com.aronim.cloud.AronimApplication