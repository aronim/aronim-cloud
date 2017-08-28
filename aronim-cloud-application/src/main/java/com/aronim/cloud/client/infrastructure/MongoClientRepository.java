package com.aronim.cloud.client.infrastructure;

import com.aronim.cloud.client.domain.Client;
import com.aronim.cloud.client.domain.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import static org.springframework.data.mongodb.core.query.Criteria.where;

/**
 * User: Kevin W. Sewell
 * Date: 2016-12-04
 * Time: 22h43
 */
@Repository
public class MongoClientRepository implements ClientRepository
{
    private static final String COLLECTION_NAME = "clients";

    private final MongoTemplate mongoTemplate;

    @Autowired
    public MongoClientRepository(MongoTemplate mongoTemplate)
    {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void save(Client client)
    {
        Query query = new Query()
                .addCriteria(where("_id").is(client.getId()));

        Update update = new Update()
                .set("firstName", client.getName());

        mongoTemplate.upsert(query, update, COLLECTION_NAME);
    }
}
