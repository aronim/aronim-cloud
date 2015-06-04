var gulp = require("gulp");
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var ngAnnotate = require("gulp-ng-annotate");
var minifyHTML = require("gulp-minify-html");

gulp.task("lint", function () {
    return gulp.src("src/main/resources/META-INF/resources/user/js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task("sass", function () {
    return gulp.src("src/main/resources/META-INF/resources/user/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("target/classes/META-INF/resources/user/css"));
});

gulp.task("html", function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src("src/main/resources/META-INF/resources/user/template/*.html")
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest("target/classes/META-INF/resources/user/template"));
});

gulp.task("scripts", function () {
    return gulp.src("src/main/resources/META-INF/resources/user/js/*.js")
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest("target/classes/META-INF/resources/user/js/"));
});

gulp.task("watch", function () {
    gulp.watch("src/main/resources/META-INF/resources/user/js/*.js", ["lint", "scripts"]);
    gulp.watch("src/main/resources/META-INF/resources/user/scss/*.scss", ["sass"]);
    gulp.watch("src/main/resources/META-INF/resources/user/template/*.html", ["html"]);
});

gulp.task("default", ["lint", "sass", "scripts", "html"]);