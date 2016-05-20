FROM hub.aronim.io/ubuntu:latest

MAINTAINER Kevin W. Sewell "kevin.w.sewell@gmail.com"

# Installing add-apt-repository
RUN \
  apt-get install -y software-properties-common

RUN \
  echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
  add-apt-repository -y ppa:webupd8team/java && \
  apt-get update && \
  apt-get install -y oracle-java8-installer && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
  rm -rf /var/cache/oracle-jdk8-installer

WORKDIR /data

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

CMD ["bash"]