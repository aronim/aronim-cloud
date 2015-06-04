package com.kungfudev.cloud.user;

import org.assertj.core.api.AbstractAssert;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;

public class UserPageAssert extends AbstractAssert<UserPageAssert, UserPage> {

    protected UserPageAssert(UserPage userPage) {
        super(userPage, UserPageAssert.class);
    }

    public UserPageAssert hasActuatorLink(String... values) {
        assertThat(getLinkNames()).contains(values);
        return this;
    }

    public UserPageAssert hasNoActuatorLink(String... values) {
        assertThat(getLinkNames()).doesNotContain(values);
        return this;
    }

    private List<String> getLinkNames() {
        List<WebElement> actuatorLinks = actual.getActuatorLinks();
        return actuatorLinks.stream()
                .map(e -> e.getText()).collect(Collectors.toList());
    }
}