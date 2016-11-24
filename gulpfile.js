var gulp = require('gulp');
var browserSync = require('browser-sync');
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

gulp.task('watch', function() {
	gulp.watch(['application/**/*.*']).on('change', browserSync.reload);
})
gulp.task('default', ['test-server','watch'])