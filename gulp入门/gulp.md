# Gulp

## 全局安装

``` code
npm install --global gulp
```

## 作为项目的开发依赖安装

``` code
npm install --save-dev gulp
```

## 在项目下新建gulpfile.js

``` code
var gulp = require('gulp');

gulp.task('default', function () {
    // 默认任务
})
```

## 运行gulp

``` code
gulp

// 想要执行某一个任务
gulp <task> <othertask>
```


## [API](https://www.gulpjs.com.cn/docs/api/)

* gulp.src(globs[, options])

    输出（Emits）符合所提供的匹配模式（glob）或者匹配模式的数组（array of globs）的文件。 将返回一个 Vinyl files 的 stream 它可以被 piped 到别的插件中

* gulp.dest(path[, options])

    能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它

* gulp.task(name[, deps], fn)

    定义一个使用 Orchestrator 实现的任务（task）

* gulp.watch(glob[, opts], tasks)

* gulp.watch(glob[, opts, cb])

    监视文件，并且可以在文件发生改动时候做一些事情。它总会返回一个 EventEmitter 来发射（emit） change 事件
