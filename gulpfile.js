const { src, dest, watch, series } = require('gulp');

// Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function imagenes() {
    return src('./img/*')
        .pipe( imagemin({ optimizationLevel: 3 }) )
        .pipe( dest('src/img') )
}

function versionWebp() {
    const opciones = {
        quality: 50
    }
    return src('./img/*.{png,jpg}')
        .pipe( webp( opciones ) )
        .pipe( dest('src/img') )
}
function versionAvif() {
    const opciones = {
        quality: 50
    }
    return src('./img/*.{png,jpg}')
        .pipe( avif( opciones ) )
        .pipe( dest('src/img'))
}

function dev() {
    watch( './img/*', imagenes );
}

exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series( imagenes, versionWebp, versionAvif, dev  );
