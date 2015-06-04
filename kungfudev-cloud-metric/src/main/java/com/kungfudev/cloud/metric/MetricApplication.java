package com.kungfudev.cloud.metric;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.cloud.netflix.turbine.amqp.EnableTurbineAmqp;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-31
 * Time: 12h28
 */
@EnableTurbineAmqp
@SpringBootApplication
@EnableHystrixDashboard
public class MetricApplication {

    public static void main(String[] args) {
        SpringApplication.run(MetricApplication.class);
    }
}
