package com.aronim.cloud.gateway;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;

/**
 * User: Kevin W. Sewell
 * Date: 2015-06-14
 * Time: 17h49
 */
public class UserRegistrationAcceptanceTest
{
    @Test
    public void shouldRegisterUser()
    {
        WebDriver webDriver = new FirefoxDriver();
        WebDriverWait webDriverWait = new WebDriverWait(webDriver, 5000);

        webDriver.navigate().to("http://localhost:8000");

        webDriverWait
                .until(elementToBeClickable(By.cssSelector("form.ac-user-registration div.ac-first-name input")))
                .sendKeys("Kevin");

        webDriverWait
                .until(elementToBeClickable(By.cssSelector("form.ac-user-registration div.ac-last-name input")))
                .sendKeys("Sewell");

        webDriverWait
                .until(elementToBeClickable(By.cssSelector("form.ac-user-registration div.ac-email-address input")))
                .sendKeys("kevin.sewell@aronim.com");

        webDriverWait
                .until(elementToBeClickable(By.cssSelector("form.ac-user-registration div.ac-password input")))
                .sendKeys("P@ssw0rd");

        webDriverWait
                .until(elementToBeClickable(By.cssSelector("form.ac-user-registration button.ac-register")))
                .click();
    }
}
