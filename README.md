# webpack-demo
webpack使用实例

# 确保环境中安装nodeJS --（不懂得百度即可，安装直接下一步下一步）
# git clone https://github.com/wqb2017/webpack-demo.git
# 安装依赖 npm intsall
# 启动服务 npm run dev_win(window环境)

# 项目结构说明
|-webpack-demo 项目目录
    |-.gitignore 打包忽略文件
    |-package.json 依赖文件
    |-README.md 说明文件
    |-webpack.config.js webpack配置文件
    |-src 源码
        |-pages 资源文件--对应view中每个文件名
            |-common 公共资源文件，与view中的layout对应
            |-home 主页文件
                |-index.js
                |-index.css
            |-login 登录文件
                |-index.js
                |-index.css
        |-util 工具文件
        |-view 静态视图文件
            |-layout 公用静态文件
                |-header.html 头部
                |-head-common.html 公共头部
                |-footer.html 脚部
                |-vendor.html 第三方插件
            |-home.html 主页
            |-login.html 登录页


# 框架使用说明
* js框架 使用jquery-v1.11.3
* ui框架 使用bootstrap- 不兼容低版本ie8一下v3.3.7
* 打包工具使用webpack-1.15.0v

# 项目主要事项
* 新建文件是要在webpack.config.js文件中引入对应的入口文件和静态文件

# 关于文件统一说明
* pages每个文件下统一把js和css文件新建成
```js 
index.js
index.css
```
图片采用就近管理方式，及不是公共图片放到对应的模块中管理，公用的放到src/images下，模块图片命名时以模块文件夹为开头，防止命名冲突
