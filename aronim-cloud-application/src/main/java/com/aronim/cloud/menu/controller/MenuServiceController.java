package com.aronim.cloud.menu.controller;

import com.aronim.cloud.menu.MenuService;
import com.aronim.cloud.menu.domain.MenuItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * User: Kevin W. Sewell
 * Date: 2016-08-21
 * Time: 14h03
 */
@RestController
public class MenuServiceController
{
    private final MenuService menuService;

    @Autowired
    public MenuServiceController(MenuService menuService)
    {
        this.menuService = menuService;
    }

    @RequestMapping("/internal/menus/{menuId}/items")
    public List<MenuItem> findMenuItems(@PathVariable String menuId)
    {
        return menuService.getMenuItems(menuId);
    }
}
