package com.kungfudev.cloud.webjar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.web.filter.ShallowEtagHeaderFilter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.Filter;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 15h56
 */
@EnableEurekaClient
@SpringBootApplication
@EnableRedisHttpSession
@EnableAutoConfiguration
public class WebJarApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebJarApplication.class);
    }

    @Configuration
    protected static class SpringWebMvcConfiguration extends WebMvcConfigurerAdapter {

        @Bean
        public Filter shallowETagHeaderFilter() {
            return new ShallowEtagHeaderFilter();
        }

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry
                    .addResourceHandler("/resources/**")
                    .addResourceLocations("classpath:/META-INF/resources/");

            registry
                    .addResourceHandler("/webjars/**")
                    .addResourceLocations("classpath:/META-INF/resources/webjars/");
        }
    }

    @Configuration
    protected static class SpringSecurityConfiguration extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .httpBasic()
                    .and()
                    .authorizeRequests()
                    .antMatchers("/resources/**").permitAll()
                    .antMatchers("/webjars/**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .csrf().disable()
                    .headers().cacheControl().disable();
        }
    }
}
