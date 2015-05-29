package com.kungfudev.cloud.user;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 12h38
 */
public interface UserRepository {

    void save(User user);

    User findUserByEmailAddress(String emailAddress);
}
