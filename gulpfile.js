var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var fs = require('fs');
var sftp = require('gulp-sftp');

gulp.task('less', function () {
	fs.stat('./src/css/app.less', function(err, stat) {
		if(err != null) {
			console.log('Error:' + err.code);
		}
	});
	gulp.src('./src/css/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./src/css/'));
});

gulp.task('watch-less', function () {
	gulp.watch('./src/css/*.less', function(){
    gulp.run('less');    
    });
   
});