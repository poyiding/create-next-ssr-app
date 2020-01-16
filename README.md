# create-next-ssr-app
基于next.js 的项目脚手架，解决next.js 配置麻烦问题，让你专注业务开发。

### 特性

* 支持引入css样式文件
* 支持自定义server(基于koa)
* 支持antd，并支持按需加载
* 支持redux
* 支持路由切换顶部loading-bar加载

### 使用

```
yarn or npm 安装启动
比如：
yarn add
yarn run dev
````
### 项目部署
1. 先在云服务器部署node 环境，参考部署[node项目](https://help.aliyun.com/document_detail/50775.html)。
2. 在服务器上部署好了node 环境后，全局安装[pm2](https://pm2.keymetrics.io/),具体介绍使用看官网。
3. 安装完成后，执行 pm2 start，或者 pm2 start ecosystem.config.js, pm2 的配置项在这个文件中配置。

部署完成后可以访问服务器域名或者根据ip访问，比如我的ip地址访问项目http://116.62.71.26:9000

