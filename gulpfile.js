const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify-es").default,
  imagemin = require("gulp-imagemin"),
  concat = require("gulp-concat"),
  del = require("del"),
  browserSync = require("browser-sync");

gulp.task("clean", async function() {
  del.sync("./dist");
});

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false,
    online: true,
    tunnel: true,
    tunnel: "test" // Demonstration page: http://test.localtunnel.me
  });
});

gulp.task("html", function() {
  return gulp.src("./*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("style", function() {
  return gulp
    .src([
      "./node_modules/normalize.css/normalize.css",
      "./node_modules/slick-carousel/slick/slick.scss",
      "./node_modules/magnific-popup/dist/magnific-popup.css",
      "./src/scss/**/*.scss"
    ])
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(
      autoprefixer({
        grid: "autoplace",
        overrideBrowserslist: ["last 10 version"],
        cascade: false
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function() {
  return gulp
    .src([
      "./node_modules/slick-carousel/slick/slick.min.js",
      "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
      "./node_modules/gsap/src/minified/TweenMax.min.js",
      "./node_modules/gsap/src/minified/plugins/CSSRulePlugin.min.js",
      "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js",
      "./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js",
      "./src/js/**/*.js"
    ])
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("img", function() {
  return gulp
    .src("./src/img/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 })
      ])
    )
    .pipe(gulp.dest("./img"))
    .pipe(browserSync.stream());
});

gulp.task("export", function() {
  const buildHtml = gulp.src("./*.html").pipe(gulp.dest("./dist"));
  const buildFonts = gulp.src("./fonts/**/*.*").pipe(gulp.dest("./dist/fonts"));
  const buildImg = gulp.src("./img/**/*.*").pipe(gulp.dest("./dist/img"));
  const buildCss = gulp.src("./css/**/*.css").pipe(gulp.dest("./dist/css"));
  const buildJs = gulp.src("./js/**/*.js").pipe(gulp.dest("./dist/js"));
});

gulp.task("watch", function() {
  gulp.watch("./*.html", gulp.parallel("html"));
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("style"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("script"));
  gulp.watch("./src/img/**/*.*", gulp.parallel("img"));
});

gulp.task("build", gulp.series("clean", "export"));

gulp.task(
  "default",
  gulp.parallel("html", "style", "script", "img", "browser-sync", "watch")
);
