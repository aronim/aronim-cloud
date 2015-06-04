package com.kungfudev.cloud.user;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class UserPage {

    @FindBy(xpath = "//table//td/p/a")
    private List<WebElement> actuatorLinks;

    private final WebDriver driver;

    public UserPage(WebDriver driver) {
        this.driver = driver;
    }

    public UserPageAssert assertThat() {
        return new UserPageAssert(this);
    }

    public String getTitle() {
        return driver.getTitle();
    }

    public List<WebElement> getActuatorLinks() {
        return actuatorLinks;
    }
}