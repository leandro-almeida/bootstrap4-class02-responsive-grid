'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

var SCSS_SRC = ['./source/scss/**/*.scss'];
var HTML_SRC = ['./source/**/*.html'];
var JS_SRC = ['./source/js/**/*.js'];

/*------------------------------------
 * Tasks Definitions 
 *----------------------------------*/

/* SASS Compiler & Minifier */
gulp.task('sass', function() {
	return gulp.src(SCSS_SRC)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});

/* Minify HTML */
gulp.task('html-minify', function() {
	return gulp.src(HTML_SRC)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/'));
});

/*------------------------------------
 * Watchers Definitions 
 *----------------------------------*/

gulp.task('sass:watch', function() {
	gulp.watch(SCSS_SRC, ['sass']);
});

gulp.task('html:watch', function() {
	gulp.watch(HTML_SRC, ['html-minify']);
});

// Default task
gulp.task('default', ['sass','html-minify']);

// Watches everything
gulp.task('watch-all', ['sass:watch', 'html:watch']);