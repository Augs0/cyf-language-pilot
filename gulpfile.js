var gulp = require('gulp');
var render = require('gulp-nunjucks-render');

// render({data: {
//     css_path: 'src/styles/'
//   }});

gulp.task('nunjucks', function() {
  return gulp.src('views/*.+(njk)')
  .pipe(render({
      path: ['views']
    }))
  .pipe(gulp.dest('public'))
});