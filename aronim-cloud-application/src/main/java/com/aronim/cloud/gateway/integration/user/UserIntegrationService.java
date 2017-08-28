package com.aronim.cloud.gateway.integration.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

/**
 * User: Kevin W. Sewell
 * Date: 2015-05-30
 * Time: 19h27
 */
@Service
public class UserIntegrationService
{
    private final RestTemplate restTemplate;

    @Value("${server.port}")
    private int serverPort;

    @Autowired
    public UserIntegrationService(RestTemplate restTemplate)
    {
        this.restTemplate = restTemplate;
    }

    public User findByEmailAddress(String emailAddress)
    {
        String url = getBaseUrl() + "/findByEmailAddress?emailAddress={emailAddress}";
        try
        {
            return restTemplate.getForObject(url, User.class, emailAddress);
        }
        catch (HttpStatusCodeException e)
        {
            if (e.getStatusCode() == HttpStatus.NOT_FOUND)
            {
                return null;
            }

            throw e;
        }
    }

    public String getBaseUrl()
    {
        return "http://localhost:" + serverPort + "/internal/users";
    }
}
