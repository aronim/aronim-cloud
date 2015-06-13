FROM hub.kungfudev.io/java:8

VOLUME /tmp

ADD kungfudev-cloud-configuration-1.0-SNAPSHOT.jar app.jar

RUN bash -c 'touch /data/app.jar'

ENTRYPOINT exec java \
    -Xmx64m -Xms64m \
    -Djava.security.egd=file:/dev/./urandom \
    -jar /data/app.jar