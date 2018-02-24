## 润捷企业管理公司网站
## 技术栈： 
前端框架vue
路由 vue-router 
状态管理 vuex 
ajax请求工具 axios 

后端服务 Nodejs 及Experss框架
数据库 Mongodb
服务器代理 Nginx

涉及部分DOM操作及交互动画框架 jQuery
vue过渡动画
少部分CSS3动画

字体库 font-awesome

## 线上运行网址
runjie.benkid.cn

# 项目说明
## 前端交互
采用相应式布局 可以在pc端及移动设备运行。导航采用类似Bootstrap的经典面包屑导航。改善了小屏幕时候打开时导航界面的交互。
小屏状态打开导航时，右上角图片自动切换为可关闭图标，且鼠标在导航上时，禁止页面滚动操作。

大屏幕尺寸（以920px为临界点）

![image](http://p4ntfmilp.bkt.clouddn.com/%E5%A4%A7%E5%B1%8F%E5%B9%95%E5%B1%95%E7%A4%BA.png)

小屏导航未展开

![image](http://p4ntfmilp.bkt.clouddn.com/%E5%B0%8F%E5%B1%8F%E5%B9%95%E5%B1%95%E7%A4%BA.png)

小屏导航展开 右上角按钮为可关闭状

![image](http://p4ntfmilp.bkt.clouddn.com/%E5%AF%BC%E8%88%AA%E5%B1%95%E5%BC%80.png)

分页查询通过axios发送请求获得数据。

#组件化开发
侧边栏的“成功案例”及“服务项目”，右侧的联系方式按钮，内容展示区及详情页等均采用组件化开发。
数据传递方式：
父子组件通过props传递，路由子组件数据通过vuex集中状态管理。

## Node服务及Mongodb数据库
数据通过axios请求，由Node + express提供。
服务器端代码见：
https://github.com/wangabeng/project-runjie-server

数据接口：
/api/......
例如：
runjie.benkid.cn/api/gettitle
runjie.benkid.cn/api/find
runjie.benkid.cn/getcount
等

Mongodb数据库开启了db.auth授权登录

通过session设置浏览量的累加。当用户打开文章详情页，即发送一个ajax请求，把session及文章Id值传递给node服务，由node服务判断时候存在该session及session中是否存在该文章的值，如果存在，就不累加，如果不存在，就把浏览量累加1，并存储在Mongodb数据库中。session值的存放时间为6小时。

另外，前端需要在发送axios的时候把是否设置cookie参数打开，node才能有效操作session。

## 关于Nginx设置:
vue打包生成的静态文件，node服务及数据库服务均部署在阿里云服务器上。
runjie.benkid.cn地址映射到vue打包的静态文件夹，
runjie.benkid.cn/api 映射到node服务，监听node服务的3009端口。
