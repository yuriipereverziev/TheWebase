'use strict';

module.exports = function() {
	$.gulp.task('webp', function () {
  return $.gulp.src('./source/images/**/*.{png,jpg}')
    .pipe($.gp.webp({quality: 90}))
    .pipe($.gulp.dest($.config.root + '/assets/images'));
	});
};
