package com.kungfudev.cloud.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * User: Kevin W. Sewell
 * Date: 2015-06-03
 * Time: 21h56
 */
@ComponentScan(excludeFilters = @ComponentScan.Filter(type= FilterType.ASSIGNABLE_TYPE, value = UserApplication.class))
@SpringBootApplication
@EnableMongoRepositories
@EnableAutoConfiguration(exclude = {
        org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration.class,
        org.springframework.boot.actuate.autoconfigure.ManagementSecurityAutoConfiguration.class
})
public class TestUserApplication {

    public static void main(String[] args) {
        SpringApplication.run(TestUserApplication.class);
    }
}
