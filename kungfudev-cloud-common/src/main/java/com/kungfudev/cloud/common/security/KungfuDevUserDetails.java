package com.kungfudev.cloud.common.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-30
 * Time: 19h33
 */
public class KungfuDevUserDetails extends User {

    private final String id;

    private final String firstName;

    private final String lastName;

    public KungfuDevUserDetails(String id,
                                String firstName,
                                String lastName,
                                String emailAddress,
                                String password,
                                Collection<? extends GrantedAuthority> authorities) {

        super(emailAddress, password, authorities);
        this.id = id;
        this.firstName = firstName;

        this.lastName = lastName;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmailAddress() {
        return getUsername();
    }
 }
