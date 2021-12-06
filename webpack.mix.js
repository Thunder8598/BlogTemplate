const mix = require('laravel-mix');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require('sass-loader');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css').browserSync("http://localhost:8000");