package com.kungfudev.cloud.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-31
 * Time: 01h53
 */
@EnableConfigServer
@SpringBootApplication
public class ConfigurationApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConfigurationApplication.class);
    }


}
