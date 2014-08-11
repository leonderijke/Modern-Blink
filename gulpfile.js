var gulp = require('gulp');
var header = require('gulp-header');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var extended = [
  '/*!',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var succint = '/*! <%= pkg.name %>@v<%= pkg.version %>, <%= pkg.license %> licensed. <%= pkg.homepage %> */\n';

gulp.task('build-js', function() {
	var pkg = require('./package.json');
	return gulp.src('src/js/modern-blink.js')
		.pipe(header(extended, { pkg : pkg } ))
		.pipe(gulp.dest('./dist'))
		.pipe(rename('modern-blink.min.js'))
		.pipe(uglify())
		.pipe(header(succint, { pkg : pkg } ))
		.pipe(gulp.dest('./dist'));
});

gulp.task('build-css', function() {
    var pkg = require('./package.json');
    return gulp.src('src/css/modern-blink.css')
        .pipe(header(extended, { pkg : pkg } ))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('modern-blink.min.css'))
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(header(succint, { pkg: pkg } ))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build-js', 'build-css']);
