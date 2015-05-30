!function () {
    "use strict";

    define(["jquery",
            "angular",
            "user/js/kdc.user.registration",
            "user/js/kdc.user.login"],

        function ($, angular) {

            angular.module("kdc.web.index", ["kdc.user.registration", "kdc.user.login"]);

        });
}();
