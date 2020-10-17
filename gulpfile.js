const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync").create();
const gulpStylelint = require('gulp-stylelint');

function style() {
  return (
      gulp.src("source/scss/style.scss")

          .pipe(sass())
          .pipe(plumber())
          .pipe(postcss([
            autoprefixer()
          ]))
          .pipe(gulp.dest("source/style"))
          .pipe(gulp.dest("source/style"))
          .pipe(browserSync.stream())
  );
}

function serve() {
  browserSync.init({

      server: {
          baseDir: "source/"
      }

  });
  gulp.watch("source/scss/*.scss", style)
  gulp.watch("source/*.html").on("change", browserSync.reload);
}

function LintCss(){
  return gulp
    .src('source/scss/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

exports.serve = serve;
exports.style = style;
exports.LintCss = LintCss;
