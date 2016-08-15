#!/usr/bin/env bash

SPRINGLOADED_PATH=/Users/kevin/.gradle/./caches/modules-2/files-2.1/org.springframework/springloaded/1.2.5.RELEASE/5286364198a1f41d028c1d758ef7e44d2b63d6b1/springloaded-1.2.5.RELEASE.jar

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
        CLASSPATH="${CLASSPATH}:${i}"
    done;

    ${JAVA_HOME}/bin/java \
      -Xmx128m -Xms128m \
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