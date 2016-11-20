// https://github.com/unlight/gulp-cssimport
var gulp = require('gulp');
var cssimport = require("gulp-cssimport");

var globalConfig = {
  src: '../deploy/css', // your dev stylesheet directory. No trailing slash
  dest: '../deploy/assets'
};

// Process CSS
gulp.task('styles', function(){
  return gulp.src(globalConfig.src + '/**/*.*')
    .pipe(cssimport())
    .pipe(gulp.dest(globalConfig.dest));
})

// Watch files
gulp.task('watch', function () {
  gulp.watch(globalConfig.src + '/**/*.*', ['styles']);
});

// Default task
gulp.task('default', ['watch']);