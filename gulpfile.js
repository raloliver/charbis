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
const del = require('del')