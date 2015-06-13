FROM hub.kungfudev.io/java:7

VOLUME /tmp

ADD kungfudev-cloud-registry-1.0-SNAPSHOT.jar app.jar

RUN bash -c 'touch /data/app.jar'

ENTRYPOINT exec java \
    -Xmx64m -Xms64m -XX:MaxPermSize=64m \
    -Djava.security.egd=file:/dev/./urandom \
    -Dspring.cloud.config.uri=http://kdc-configuration.marathon.mesos:8888 \
    -jar /data/app.jar