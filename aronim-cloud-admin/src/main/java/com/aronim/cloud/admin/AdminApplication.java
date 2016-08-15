package com.aronim.cloud.admin;

import de.codecentric.boot.admin.config.EnableAdminServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Configuration;

/**
 * User: Kevin W. Sewell
 * Date: 2016-08-14
 * Time: 10h18
 */
@Configuration
@EnableAdminServer
@EnableDiscoveryClient
@EnableAutoConfiguration
public class AdminApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(AdminApplication.class);
    }
}
