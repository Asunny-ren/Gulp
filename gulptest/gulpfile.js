let gulp = require('gulp');

let notify = require('gulp-notify');
let assetRev = require('gulp-asset-rev');

let htmlmin = require('gulp-htmlmin');

let scss = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let cleancss = require('gulp-clean-css');

let imagemin = require('gulp-imagemin');
let cache = require('gulp-cache');

let uglify = require('gulp-uglify');


gulp.task('default', ['watch', 'html', 'scss', 'js', 'image'], () => {
    gulp.start('watch', 'html', 'scss', 'js', 'image');
    console.log('gulp启动成功');
})

gulp.task('html', () => {
    gulp.src('module/*.html')
        .pipe(assetRev())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        //最后把你建立的html文件压缩到自动创建的dist文件里;
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'HTML文件压缩完毕' }));
})

gulp.task('scss', () => {
    gulp.src('scss/*.scss')
        .pipe(assetRev())
        .pipe(scss())
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'CSS文件压缩完毕' }));
})

gulp.task('image', () => {
    gulp.src('img/*.{jpg,png,gif,jepg,svg}')
        .pipe(cache(imagemin({
            progressive: true, // 是否渐进的优化
            svgoPlugins: [{removeViewBox:false}], //svgo插件是否删除幻灯片
            interlaced: true // 是否各行扫描
        })))
        .pipe(gulp.dest('dist/img'))
        .pipe(notify({ message: '图片压缩完毕' }));
})

gulp.task('js', () => {
    gulp.src('js/*.js')
        .pipe(assetRev())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'JS文件压缩完毕' }));
})


gulp.task('watch',['scss','js','html','image'],function(){
    gulp.watch('scss/*.scss',['scss']);
    gulp.watch('js/*.js',['js']);
    gulp.watch('img/*.*',['image']);
    gulp.watch('module/*.html',['html']);
})
