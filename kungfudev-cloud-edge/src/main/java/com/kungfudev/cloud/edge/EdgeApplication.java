package com.kungfudev.cloud.edge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

/**
 * User: Kevin W. Sewellq
 * Date: 2015-05-29
 * Time: 19h37
 */
@EnableZuulProxy
@SpringBootApplication
public class EdgeApplication {

    public static void main(String[] args) {
        SpringApplication.run(EdgeApplication.class);
    }

}
