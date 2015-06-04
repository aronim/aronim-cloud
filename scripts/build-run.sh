#!/usr/bin/env bash

SPRINGLOADED_PATH=/Users/kevin/.m2/repository/org/springframework/springloaded/1.2.3.RELEASE/springloaded-1.2.3.RELEASE.jar

function build {

    BASEDIR=$1

    mvn clean dependency:copy-dependencies compile -f ${BASEDIR}/../pom.xml -DincludeScope=runtime

}

function run {

    BASEDIR=$1
    MAIN_CLASS=$2

    CLASSPATH=""
    for i in `ls ${BASEDIR}/../target/dependency/*.jar`; do
        CLASSPATH="$i:$CLASSPATH"
    done;

    java \
      -Xmx64m -Xms64m \
      -cp ${CLASSPATH}:${BASEDIR}/../target/classes \
      -javaagent:${SPRINGLOADED_PATH} \
      -noverify \
      -Dspring.profiles.active=cloud \
      ${MAIN_CLASS}
}

function build-run {

    BASEDIR=$1
    MAIN_CLASS=$2

    build ${BASEDIR}

    run ${BASEDIR} ${MAIN_CLASS}
}