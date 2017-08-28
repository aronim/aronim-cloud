package com.aronim.cloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 19h37
 */
@ComponentScan
@EnableWebSecurity
@SpringBootApplication
@EnableAutoConfiguration
public class AronimApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(AronimApplication.class);
    }
}
