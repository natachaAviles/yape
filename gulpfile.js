var gulp = require('gulp');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');

gulp.task('script', function(cb){
	// tarea script
	gulp.src(['node_modules/jquery/dist/jquery.js','src/js/script.js', 'src/js/registeruser.js', 'src/sass/materialize-css/dist/js/materialize.js'])
		// verificar errores de JS
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		// unir todos los archivos
		.pipe(concat('script.min.js'))
		// dejarlo en carpeta dist/js
		.pipe(gulp.dest('public/js'));
});

gulp.task('style', function() {
	// tarea style
	gulp.src('src/sass/main.scss')
		// transformar los sass
		.pipe(sass().on('error', sass.logError))
		// dejarlo en archivo de destino
		.pipe(concat('style.min.css'))
		// dejarlo en carpeta dist/css
		.pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
	//tarea watch
	gulp.watch('./sass/**/*.scss', ['sass']);
});




gulp.task('default', ['style', 'script', 'sass:watch']);