package com.kungfudev.cloud.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 12h33
 */
@RestController
public class UserServiceController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/api/users/register", method = RequestMethod.PUT)
    public void register(@RequestBody RegisterUserCommand command) {
        userService.register(command);
    }
}
