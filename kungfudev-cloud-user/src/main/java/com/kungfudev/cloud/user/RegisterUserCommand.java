package com.kungfudev.cloud.user;

import java.io.Serializable;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 13h52
 */
public class RegisterUserCommand implements Serializable {

    private String id;

    private String firstName;

    private String lastName;

    private String emailAddress;

    private String password;

    public RegisterUserCommand() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
