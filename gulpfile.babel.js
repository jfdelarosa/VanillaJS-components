import gulp from "gulp";
import babel from "gulp-babel";
import browserSync from "browser-sync";

var server = browserSync.create();

gulp.task('serve', () => {
  server.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('scripts', () => {
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
  gulp.watch(['**/*.html']).on('change', server.reload);
  gulp.watch('src/**/*.js', ['scripts']).on('change', server.reload);
});

gulp.task('default', ['serve', 'watch']);