package com.aronim.cloud.gateway.integration.menu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

/**
 * User: Kevin W. Sewell
 * Date: 2016-08-21
 * Time: 14h08
 */
@Service
public class MenuIntegrationService
{
    private static final String BASE_URL = "http://aronim-cloud-menu/internal/menus/main/items";

    private final RestTemplate restTemplate;

    @Value("${server.port}")
    private int serverPort;

    @Autowired
    public MenuIntegrationService(RestTemplate restTemplate)
    {
        this.restTemplate = restTemplate;
    }

    public List<MenuItem> findMenuItems(String menuId)
    {
        String url = getBaseUrl() + "/{menuId}/items";
        try
        {
            @SuppressWarnings("unchecked")
            ResponseEntity<MenuItem[]> result = restTemplate.getForEntity(url, MenuItem[].class, menuId);

            return Arrays.asList(result.getBody());
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
        return "http://localhost:" + serverPort + "/internal/menus";
    }
}
