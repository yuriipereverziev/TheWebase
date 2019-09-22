'use strict';

module.exports = function() {
  $.gulp.task('stylelint', function() {
    return $.gulp.src('./source/**/*.scss')
      .pipe($.gp.stylelint({
        reporters: [
          {
            formatter: 'string',
            console: true
         }
        ]
      }))
  })
};
