const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

// Compilar JavaScript
function scripts() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
}

// Compilar SCSS para CSS
function styles() {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}

// Minificar imagens
function images() {
  return gulp
    .src("./src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

// Assistir mudanças nos arquivos
function watch() {
  gulp.watch("./src/scss/*.scss", styles);
  gulp.watch("./src/js/*.js", scripts);
}

exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.watch = watch;
exports.default = gulp.parallel(styles, images, scripts);
