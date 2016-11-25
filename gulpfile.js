var gulp = require('gulp');
var browserSync = require('browser-sync');
var karma = require('karma').Server;
gulp.task("test-server", function(){
	browserSync.init({
		notify:false,
		port:8000,
		server:{
			baseDir:["test"],
			routes:{
				'/bower_components':'bower_components'
			}
		}
	})
})
gulp.task("karma-serve", function(){
	karma.start({
		configFile:__dirname + '/karma.conf.js',
		singleRun:false
	})
})

gulp.task('watch', function() {
	gulp.watch(['application/**/*.*']).on('change', browserSync.reload);
})
gulp.task('default', ['karma-serve','watch'])