'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.script)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('script.js'))
      .pipe($.gp.minify())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
