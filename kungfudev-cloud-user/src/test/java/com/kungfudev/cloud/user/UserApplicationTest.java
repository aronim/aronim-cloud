package com.kungfudev.cloud.user;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


/**
 * User: Kevin W. Sewell
 * Date: 2015-06-03
 * Time: 15h33
 */
@Ignore
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = TestUserApplication.class)
@WebIntegrationTest(value = "server.port=9000")
@SeleniumTest(driver = ChromeDriver.class, baseUrl = "http://localhost:9000/resources/user.html")
public class UserApplicationTest {

    @Autowired
    private WebDriver driver;

    private UserPage userPage;

    @Before
    public void setUp() throws Exception {
        userPage = PageFactory.initElements(driver, UserPage.class);
    }

    @Test
    public void containsActuatorLinks() {
        userPage.assertThat()
                .hasActuatorLink("autoconfig", "beans", "configprops", "dump", "env", "health", "info", "metrics", "mappings", "trace")
                .hasNoActuatorLink("shutdown");
    }
}
