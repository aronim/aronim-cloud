package com.aronim.cloud.menu.domain;

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
    private final String name;
    private final String path;
    private final String module;
    private final String elementText;
}
