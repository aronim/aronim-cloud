package com.aronim.cloud.user.domain;

import lombok.Data;

import java.io.Serializable;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 12h36
 */
@Data
public class User implements Serializable
{
    private String id;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private String encryptedPassword;
    private String organisationId;

    public void resetEncryptedPassword(String encryptedPassword)
    {
        setEncryptedPassword(encryptedPassword);
    }
}
