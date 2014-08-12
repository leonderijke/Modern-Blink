var args = require('yargs').argv;
var bump = require('gulp-bump');
var browserSync = require('browser-sync');
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
		.pipe(browserSync.reload({stream: true}))
		.pipe(rename('modern-blink.min.css'))
		.pipe(minifyCSS({keepSpecialComments: 0}))
		.pipe(header(succint, { pkg: pkg } ))
		.pipe(gulp.dest('./dist'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('bump', function() {
	var type = args.bump || 'patch';

	return gulp.src(['./package.json', './bower.json'])
		.pipe(bump({ type: type }))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', ['build-js', 'build-css', 'browser-sync'], function() {
	gulp.watch('src/js/*.js', ['build-js']);
	gulp.watch('src/css/*.css', ['build-css']);
});

gulp.task('default', ['build-js', 'build-css']);
