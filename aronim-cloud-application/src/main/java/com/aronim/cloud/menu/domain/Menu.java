package com.aronim.cloud.menu.domain;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * User: Kevin W. Sewell
 * Date: 2016-12-04
 * Time: 20h56
 */
@Data
public class Menu implements Serializable
{
    private String menuId;
    private String name;
    private List<MenuItem> menuItems;

    public void addMenuItem(String name, String path, String module, String elementText)
    {
        if (this.menuItems == null)
        {
            this.menuItems = new ArrayList<>();
        }

        this.menuItems.add(new MenuItem(name, path, module, elementText));
    }
}
