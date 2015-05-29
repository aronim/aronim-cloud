package com.kungfudev.cloud.authentication.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;

@Configuration
public class AuthenticationManagerConfiguration extends GlobalAuthenticationConfigurerAdapter {

    @Override
    public void init(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("mstine").password("secret").roles("USER", "ADMIN").and()
                .withUser("littleidea").password("secret").roles("USER", "ADMIN").and()
                .withUser("starbuxman").password("secret").roles("USER", "ADMIN");
    }
}
