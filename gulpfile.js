/**
 * The gulp file configures the gulp build setup
 * Run "gulp build" to built project and compile CoffeeScript
 * Run "gulp" to clean, build, test and watch for changes during development
 */

/* Require the node modules */
var gulp    = require('gulp');
var coffee  = require('gulp-coffee');
var lint    = require('gulp-coffeelint');
var del     = require('del');
var footer  = require('gulp-footer');

require('coffee-script/register');

var footerTxt = "\/* (C) Alicia Sykes <alicia@aliciasykes.com> 2015           " +
    "*\\\r\n\\* MIT License. Read full license at: https:\/\/goo.gl\/IL4lQJ *\/";

/* Delete the files currently in finished directory */
gulp.task('clean', function () {
    del(['./index.js']);
});

/* Lint, compile and minify CoffeeScript */
gulp.task('build', ['clean'],  function(){
    return gulp.src('./*.coffee')
        .pipe(lint())
        .pipe(lint.reporter())
        .pipe(coffee())
        .pipe(footer(footerTxt))
        .pipe(gulp.dest('./'));
});

/* Watch for changes and refresh */
gulp.task('watch', function(){
    gulp.watch('./**/*.coffee', ['build']);
});

/* Defualt gulp task, deletes old files, compiles source files and runs tests */
gulp.task('default', ['build', 'watch']);