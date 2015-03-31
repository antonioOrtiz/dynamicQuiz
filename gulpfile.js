var gulp = require('gulp'),
    open = require('gulp-open'),
    // connect = require('gulp-connect'),
    // livereload = require('gulp-livereload');
    browserSync = require('browser-sync');
var reload = browserSync.reload;


/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});



gulp.task('css', function() {
    return gulp.src(paths.css)
        // .pipe(connect.reload());
           .pipe(reload({stream:true}));
});

gulp.task('url', function() {
    var options = {
        url: 'http://localhost:3000',
        app: 'google chrome'
    };
    gulp.src('app/index.html')
        .pipe(open('', options));
});


 var paths = {
       css: 'css/*.css',
       js: 'js/*.js',
       html: 'app/*.html'
    };

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
   

  
});

/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['watch', 'css', 'browser-sync', 'url']);



/* Watch scss, js and html files, doing different things with each. */
// gulp.task('default', ['css', 'browser-sync', 'url'], function () {
//     /* Watch scss, run the sass task on change. */
//     gulp.watch([paths.css], ['css'])

//     /* Watch .html files, run the bs-reload task on change. */
//     gulp.watch([paths.html], ['bs-reload']);
// });



gulp.task('watch', function() {
      browserSync.init([paths.css, paths.js, paths.html], {
        server: {
            baseDir: './app'
        }
        
    });
    gulp.watch(paths.css, ['css']);

    /* Watch .html files, run the bs-reload task on change. */
    gulp.watch(paths.html).on('change', browserSync.reload);
});























