package com.aronim.cloud.menu;

import com.aronim.cloud.menu.domain.Menu;
import com.aronim.cloud.menu.domain.MenuItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * User: Kevin W. Sewell
 * Date: 2016-12-04
 * Time: 20h54
 */
@Service
public class MenuServiceImpl implements MenuService
{
    private final MenuRepository menuRepository;

    @Autowired
    public MenuServiceImpl(MenuRepository menuRepository)
    {
        this.menuRepository = menuRepository;
    }

    @Override
    public List<MenuItem> getMenuItems(String menuId)
    {
        Menu menu = menuRepository.findOne(menuId);

        if (menu == null)
        {
            return null;
        }

        return menu.getMenuItems();
    }
}
