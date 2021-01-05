var gulp = require('gulp');
var render = require('gulp-nunjucks-render');
var cssPath = 'src/**/*.css';
var njkPath = 'views/*.+(njk)';

gulp.task('css', function(){
    return gulp.src(cssPath)
    .pipe(gulp.dest('public'))
})

gulp.task('nunjucks', function() {
  return gulp.src(njkPath)
  .pipe(render({
      path: ['views']
    }))
  .pipe(gulp.dest('public'))
});

exports.default = gulp.series(
    'css',
    'nunjucks'
);
// gulp.task('default', ['css', 'nunjucks'], function() {
// });