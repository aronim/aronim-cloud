package com.kungfudev.cloud.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 14h08
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void register(RegisterUserCommand command) {

        String userId = command.getId();
        String userEmailAddress = command.getEmailAddress();

        User user = userRepository.findByEmailAddress(userEmailAddress);
        if (user != null) {

            if (!user.getId().equals(userId)) {
                throw new UserWithEmailAddressAlreadyRegisteredException();
            }

        } else {
            user = new User();
            user.setId(userId);
        }

        user.setFirstName(command.getFirstName());
        user.setLastName(command.getLastName());
        user.setEmailAddress(userEmailAddress);

        String password = command.getPassword();
        user.resetEncryptedPassword(password);

        userRepository.save(user);
    }

    public User findByEmailAddress(String emailAddress) {

        return userRepository.findByEmailAddress(emailAddress);
    }

    public Boolean userWithEmailAddressExists(String emailAddress) {
        return userRepository.userWithEmailAddressExists(emailAddress);
    }
}
