var gulp = require("gulp");
var plumber = require("gulp-plumber");
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var sync = require("browser-sync").create();
var htmlExtend = require("gulp-html-extend");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var imagemin = require('gulp-imagemin');

gulp.task("html", function () {
    return gulp.src("src/pages/**/*.html")
        .pipe(plumber())
        .pipe(htmlExtend())
        .pipe(gulp.dest("dist"));
});

gulp.task("css:app", function () {
    return gulp.src("src/styles/App.less")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(rename("app.min.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(sync.stream());
});

gulp.task("css:vendor", ["css:app"], function() {
    return gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "resources/jquery.bxslider/jquery.bxslider.css"
    ])
        .pipe(plumber())
        .pipe(concat("bundle.min.css"))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("js:app", function () {
    return gulp.src([
        "src/scripts/*.js"
    ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat("app.min.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("js:vendor", ["js:app"], function () {
    return gulp.src([
        "node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "resources/jquery.bxslider/jquery.bxslider.js"
    ])
        .pipe(plumber())
        .pipe(concat("bundle.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("images:app", function () {
    return gulp.src([
        "src/images/**/*.*",
        "resources/**/*.*"
    ])
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest("dist/images"));
});

gulp.task("fonts:app", function() {
    return gulp.src([
        "src/fonts/**/*.*"
    ])
        .pipe(plumber())
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task("fonts:vendor", function() {
    return gulp.src([
        "node_modules/bootstrap/dist/fonts/**/*.*"
    ])
        .pipe(plumber())
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task("build",["html", "css:app", "css:vendor", "js:app","js:vendor", "images:app","fonts:app", "fonts:vendor"]);

gulp.task("watch", ["build"], function () {
    sync.init({
        server: "dist"
    });

    gulp.watch("src/images/**/*.*",["images:app"]);
    gulp.watch("src/fonts/**/*.*", ["fonts:app"]);
    gulp.watch("src/**/*.html", ["html"]);
    gulp.watch("src/styles/**/*.less", ["css:app"]);
    gulp.watch("src/scripts/*.js",["js:app"]);

    gulp.watch("dist/*.html").on("change", sync.reload);
    gulp.watch(("dist/js/*.js")).on("change",sync.reload);
});

gulp.task("default",["build", "watch"]);