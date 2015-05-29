package com.kungfudev.cloud.authentication.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.AuthorizationRequest;
import org.springframework.security.oauth2.provider.approval.DefaultUserApprovalHandler;

@Configuration
@EnableAuthorizationServer
public class AuthenticationServer extends AuthorizationServerConfigurerAdapter {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.authenticationManager(authenticationManager);

        endpoints.userApprovalHandler(new DefaultUserApprovalHandler() {
            @Override
            public AuthorizationRequest checkForPreApproval(AuthorizationRequest authorizationRequest,
                                                            Authentication userAuthentication) {
                if (authorizationRequest != null) {
                    authorizationRequest.setApproved(true);
                }

                return authorizationRequest;
            }
        });
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient("acme")
                .secret("acmesecret")
                .authorizedGrantTypes("authorization_code", "refresh_token",
                        "password").scopes("openid");


    }
}