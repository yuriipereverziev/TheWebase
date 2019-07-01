'use strict';

module.exports = function() {
  $.gulp.task('less', function() {
    return $.gulp.src('./source/style/style.less')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.less()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.csso())
      .pipe($.gp.rename('style.min.css'))
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};