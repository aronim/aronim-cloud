package com.aronim.cloud.client.domain;

import lombok.Data;

import java.io.Serializable;

/**
 * User: Kevin W. Sewell
 * Date: 2016-12-04
 * Time: 22h42
 */
@Data
public class Client implements Serializable
{
    private String id;
    private String name;
}
