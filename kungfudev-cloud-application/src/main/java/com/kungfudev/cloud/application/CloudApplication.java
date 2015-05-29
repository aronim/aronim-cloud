package com.kungfudev.cloud.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 12h40
 */
@SpringBootApplication
@ComponentScan("com.kungfudev.cloud")
public class CloudApplication {

    public static void main(String[] args) {

        SpringApplication.run(CloudApplication.class);
    }
}
