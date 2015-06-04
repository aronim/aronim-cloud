package com.kungfudev.cloud.user.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * User: Kevin W. Sewell
 * Date: 2015-06-03
 * Time: 15h41
 */
@Profile("cloud")
@Configuration
public class SpringSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/resources/**").permitAll()
                .antMatchers("/api/users/register").permitAll()
                .antMatchers("/api/users/exists").permitAll()
                .antMatchers("/internal/users/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .csrf().disable()
                .headers().cacheControl().disable();
    }
}