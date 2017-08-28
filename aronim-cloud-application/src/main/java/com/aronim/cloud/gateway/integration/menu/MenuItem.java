package com.aronim.cloud.gateway.integration.menu;

import lombok.Data;

import java.io.Serializable;

/**
 * User: Kevin W. Sewell
 * Date: 2016-12-04
 * Time: 20h44
 */
@Data
public class MenuItem implements Serializable
{
    private String name;
    private String path;
    private String module;
    private String elementText;
}
