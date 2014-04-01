var gulp = require('gulp');
var runner = require('./lib/runner');


gulp.task('test', function(){
    return gulp.src(['tests/harmony/*.js', 'tests/pre-harmony/*.js'])
        .pipe(runner({ command: 'js24', output: 'results.json' }));
});