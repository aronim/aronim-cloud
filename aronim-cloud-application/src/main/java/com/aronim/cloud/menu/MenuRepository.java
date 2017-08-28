package com.aronim.cloud.menu;


import com.aronim.cloud.menu.domain.Menu;

/**
 * User: Kevin W. Sewell
 * Date: 2016-12-04
 * Time: 20h56
 */
public interface MenuRepository
{
    Menu findOne(String menuId);
}
