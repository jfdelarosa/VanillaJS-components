var gulp = require("gulp"),
    browserSync = require("browser-sync");

var server = browserSync.create();

gulp.task('serve', function() {
  server.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(['./*.html']).on('change', server.reload);
});

gulp.task('default', ['serve', 'watch']);