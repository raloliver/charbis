const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const notify = require('gulp-notify')
const livereload = require('gulp-livereload')
const changed = require('gulp-changed')
const gutil = require('gulp-util')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const cssmin = require('gulp-clean-css')
const htmlmin = require('gulp-minify-html')
const colector = require('gulp-rev-collector')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const rev = require('gulp-rev')

const paths = {
    fontsSrc: 'public/assets/fonts/',
    htmlSrc: 'src/views/',
    sassSrc: 'public/scss/',
    jsSrc: 'public/js/',
    imgSrc: 'public/assets/images/',

    revDir: 'build/rev/',
    distDir: 'dist/',
    buildDir: 'build/'
}

let onError = (err) => {
    gutil.beep()
    gutil.log(gutil.colors.red(err))
}

let initServer = () => {
    livereload.listen()
    nodemon({
            script: 'app.js',
            ext: 'js'
        })
        .on('restart', () => {
            gulp.src('app.js')
                .pipe(livereload())
                .pipe(notify('Reloading...'))
        })
}

gulp.task('build-html', () => {
    return
    gulp.src(paths.htmlSrc.concat('**/*.hbs'))
        .pipe(gulp.dest(paths.buildDir.concat('/views')))
        .pipe(livereload())
})

gulp.task('build-css', () => {
    return
    gulp.src(paths.sassSrc.concat('**/*.scss'))
        .pipe(sass({
            includePaths: require('node-neat').includePaths,
            style: 'nested',
            onError: () => {
                console.error('SASS ERROR!')
            }
        }))
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(gulp.dest(paths.buildDir.concat('/')))
        .pipe(livereload())
})

gulp.task('build-js', () => {
    return
    gulp.src(paths.jsSrc.concat('*.js'))
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(changed(paths.buildDir.concat('/')))
        .pipe(gulp.dest(paths.buildDir.concat('/')))
        .pipe(livereload())
})

gulp.task('build-images', () => {
    return
    gulp.src(paths.imgSrc.concat('**/*.+(png|jpeg|gif|jpg|svg|)'))
        .pipe(changed(paths.buildDir.concat('/images')))
        .pipe(gulp.dest(paths.buildDir.concat('/images')))
        .pipe(livereload())
})

gulp.task('build-fonts', () => {
    return
    gulp.src(paths.fontsSrc.concat('**/*.*'))
        .pipe(gulp.dest(paths.buildDir.concat('/fonts')))
        .pipe(livereload())
})

gulp.task('build', ['build-html', 'build-css', 'build-js', 'build-images', 'build-fonts'], (done) => {
    return initServer()
})

gulp.task('watch', () => {
    gulp.watch(['src/views/**/*.hbs'], ['build-html'])
    gulp.watch(['public/scss/**'], ['build-css'])
    gulp.watch(paths.jsSrc + '**/*.js', ['build-js'])
    gulp.watch(paths.imgSrc + '**/*.+(png|jpeg|gif|jpg|svg|)', ['build-images'])
    gulp.watch(['public/assets/fonts/**'], ['build-fonts'])
})

const env = process.env.NODE_ENV || 'development'

//estamos num ambiente de produção?
if (env === 'development') {
    return gulp.task('default', ['build', 'watch'])
}