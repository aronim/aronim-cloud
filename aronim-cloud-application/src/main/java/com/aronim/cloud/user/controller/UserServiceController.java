package com.aronim.cloud.user.controller;

import com.aronim.cloud.user.application.RegisterUserCommand;
import com.aronim.cloud.user.domain.User;
import com.aronim.cloud.user.application.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 12h33
 */
@RestController
public class UserServiceController
{
    @Autowired
    private UserService userService;

    @RequestMapping("/api/users")
    public List<User> list(Authentication user)
    {
        return userService.list();
    }

    @RequestMapping("/api/users/me")
    public Authentication me(Authentication user)
    {
        return user;
    }

    @RequestMapping(value = "/api/users/register", method = RequestMethod.PUT)
    public void register(@RequestBody RegisterUserCommand command)
    {
        userService.register(command);
    }

    @RequestMapping("/api/users/exists")
    public Boolean doesUserWithEmailAddressExists(@RequestParam("emailAddress") String emailAddress)
    {
        return userService.userWithEmailAddressExists(emailAddress);
    }

    @RequestMapping("/internal/users/findByEmailAddress")
    public User findByEmailAddress(@RequestParam("emailAddress") String emailAddress)
    {
        return userService.findByEmailAddress(emailAddress);
    }
}
