package com.aronim.cloud.menu;

import com.aronim.cloud.menu.domain.Menu;
import org.springframework.stereotype.Repository;

/**
 * User: Kevin W. Sewell
 * Date: 2016-12-04
 * Time: 21h20
 */
@Repository
public class InMemoryMenuRepository implements MenuRepository
{
    @Override
    public Menu findOne(String menuId)
    {
        Menu menu = new Menu();
        menu.addMenuItem("Users", "/admin/users", "user/js/aronim.cloud.users", "<ac-users></ac-users>");
        menu.addMenuItem("Clients", "/admin/clients", "clients/js/aronim.cloud.clients", "<ac-clients></ac-clients>");

        return menu;
    }
}
