package com.aronim.cloud.menu;

import com.aronim.cloud.menu.domain.MenuItem;

import java.util.List;

/**
 * User: Kevin W. Sewell
 * Date: 2016-12-04
 * Time: 20h54
 */
public interface MenuService
{
    List<MenuItem> getMenuItems(String menuId);
}
