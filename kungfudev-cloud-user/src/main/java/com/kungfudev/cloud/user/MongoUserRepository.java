package com.kungfudev.cloud.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import static org.springframework.data.mongodb.core.query.Criteria.where;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-29
 * Time: 13h54
 */
@Repository
public class MongoUserRepository implements UserRepository {

    public static final String COLLECTION_NAME = "users";

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void save(User user) {

        Query query = new Query()
                .addCriteria(where("_id").is(user.getId()));

        Update update = new Update()
                .set("firstName", user.getFirstName())
                .set("lastName", user.getLastName())
                .set("emailAddress", user.getEmailAddress())
                .set("encryptedPassword", user.getEncryptedPassword());

        mongoTemplate.upsert(query, update, COLLECTION_NAME);
    }

    @Override
    public User findByEmailAddress(String emailAddress) {

        Query query = new Query()
                .addCriteria(where("emailAddress").is(emailAddress));

        return mongoTemplate.findOne(query, User.class, COLLECTION_NAME);
    }

    @Override
    public Boolean userWithEmailAddressExists(String emailAddress) {

        Query query = new Query()
                .addCriteria(where("emailAddress").is(emailAddress));

        return mongoTemplate.exists(query, User.class, COLLECTION_NAME);
    }
}
