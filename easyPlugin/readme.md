# 简单插件的开发

index.js和index2.js中是两个插件。

exec.js是执行文件。。

执行顺序是index.js -> index2.js。每一个语法树node均会根据自己的属性，顺序访问index.js 和index2.js中对应的方法。