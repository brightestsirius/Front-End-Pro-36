let {src, dest, series} = require('gulp'),
	fileInclude = require('gulp-file-include'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCss = require('gulp-clean-css')

let html = () => {
	return src('src/*.html')
		.pipe(fileInclude({
		      prefix: '@',
		      basepath: '@file'
		    }))
		.pipe(dest('build'))
}

let css = () => {
	src('node_modules/bootstrap/dist/css/bootstrap.min.css')
	.pipe(dest('build/css'))

	return src('src/css/style.sass')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('build/css'))
}

exports.html = html;
exports.css = css;

exports.default = series(html,css);