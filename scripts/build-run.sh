#!/usr/bin/env bash

SPRINGLOADED_PATH=/Users/kevin/.m2/repository/org/springframework/springloaded/1.2.3.RELEASE/springloaded-1.2.3.RELEASE.jar

function build {

    BASEDIR=$1

#    mvn clean dependency:copy-dependencies compile -f ${BASEDIR}/../pom.xml -DincludeScope=runtime

    gradle clean compileJava copyToLib -b ${BASEDIR}/../build.gradle
}

function run {

    BASEDIR=$1
    MAIN_CLASS=$2

    CLASSPATH="${BASEDIR}/../src/main/resources:${BASEDIR}/../build/classes/main"
    for i in `ls ${BASEDIR}/../build/dependencies/*.jar`; do
        CLASSPATH="$CLASSPATH:$i"
    done;

    ${JAVA_HOME}/bin/java \
      -Xmx64m -Xms64m \
      -cp ${CLASSPATH} \
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