# 关于json的html数据 
参照新华网

http://www.xinhuanet.com/politics/2018-01/21/c_1122291303.htm

# html样式参考
https://www.azul.com/
https://d2c.io/

# 周芳网站
http://www.rjqygl.com/content/?337.html

# 用stylus的时候  如果用本地css文件 会警告并不会生效 最好都用styl文件格式 而不是css文件和styl文件混用

# 图标字体链接地址
http://fontawesome.dashgame.com/#getstart

# flex布局图文并茂版
  http://blog.csdn.net/magneto7/article/details/70854472
  flex子容器如果嵌套子元素 可以把子元素设置为display: flex
  例如ul（容器）元素嵌套li（li是ul的子元素），li又包含了a元素，把li设置为 display: flex
# vue父子组件之间通信
vue父子组件通信
复制代码
1.父组件传递数据给子组件

父组件数据如何传递给子组件呢？可以通过props属性来实现

父组件：

<parent>
    <child :child-msg="msg"></child>  //这里必须要用 - 代替驼峰
</parent>

data(){
    return {
        msg: [1,2,3]
    };
}

子组件通过props来接收数据: 

方式1：
props: ['childMsg']

方式2 :
props: {
    childMsg: Array //这样可以指定传入的类型，如果类型不对，会警告
}

方式3：
props: {
    childMsg: {
        type: Array,
        default: [0,0,0] //这样可以指定默认的值
    }
}

2.子组件与父组件通信 https://www.cnblogs.com/hai-cheng/p/8021982.html

  子组件:
  <template>
      <div @click="testClick"></div>
  </template>

  methods: {
      testClick() {
          this.$emit('test','123'); //主动触发test方法，'123'为向父组件传递的数据
      }
  }
  父组件:

  <div>
      <child @test="change" :msg="msg"></child>  //监听子组件触发的test事件,然后调用change方法
  </div>
  methods: {
      change(msg) {
          this.msg = msg;  // msg: 123
      }
  }
  3.非父子组件通信 见慕课笔记ele项目23页

  如果2个组件不是父子组件那么如何通信呢？这时可以通过eventHub来实现通信. 
  所谓eventHub就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件.

  let Hub = new Vue(); //创建事件中心


  组件1触发：
  <div @click="eve"></div>
  methods: {
      eve() {
          Hub.$emit('change','hehe'); //Hub触发事件
      }
  }

  组件2接收:
  <div></div>
  created() {
      Hub.$on('change', () => { //Hub接收事件
          this.msg = 'hehe';
      });
  }

  // 备注：
  在根vue注册eventBus 我在入口文件main.js的vue创建一个data
    main.js
    new Vue({
      data: {
        eventBus: new Vue()
      }
    })

    在组件中这样使用
    emit事件 传递参数
    this.$root.eventBus.$emit('fnName', '参数')

    监听事件 接收参数
    this.$root.eventBus.$on('fnName', (mesg) => {
      dosth(msg)
    })

#  transition动画用于a标签时会失效 解决办法 把a标签转成display: inline-block
  参见m-header组件

# vue过度动画案例

  <template>
    <transition name='navBarAnim'>
      <div class='nav-bar-wrapper' ref='navBarWrapper' v-if='ifShow'>
        ------
      </div>
    </transition>  
  </template>

  .nav-bar-wrapper
    width: 100%
    position: fixed
    ---
    /* 定义过度动画 一般样式只定义enter leave-to 即开始和结束的状态 -enter-active -leave-active定义动画时间 过渡函数 &表示父级 nav-bar-wrapper*/
    &.navBarAnim-enter, &.navBarAnim-leave-to
      transform: translate3d(0,-100%,0)
    &.navBarAnim-enter-active, &.navBarAnim-leave-active
      transition-duration: 0.3s
      transition-timing-function: ease-in-out
      transition-property: transform

# vue-cli项目中全局引入jquery
  https://segmentfault.com/a/1190000007020623

# 一定要有全局的意识 项目还没完成 就出现了打包路径的问题 查看打包后的源代码 路径不对 修改
  /config/index.js
  assetsPublicPath: '/', 改为相对路径 assetsPublicPath: './',

  打包后发现基本没问题 就是字体文件路径不对
  发现打包后的引用路径是(多了一个 static/css/)
  file:///D:/runjie/dist/static/css/static/fonts/fontawesome-webfont.af7ae50.woff2 
  但是实际路径是：
  file:///D:/runjie/dist/          /static/fonts/fontawesome-webfont.af7ae50.woff2 

  字体文件目录结构是这样的
  /common/css/font-awesome.styl
  /common/fonts/fontawesome-webfont.eot
  /common/fonts/fontawesome-webfont.svg

  font-awesome.styl 中引用字体文件是这样引用的
  src: url('../fonts/fontawesome-webfont.eot?v=4.7.0')

  改成
  common/fonts/fontawesome-webfont.svg 打包后还是出现相同的路径
  file:///D:/runjie/dist/static/css/static/fonts/fontawesome-webfont.af7ae50.woff2

  --- 做了很多尝试均失败 最后参照
  http://blog.csdn.net/fengjingyu168/article/details/78789074
  最后解决办法：
  修改webpack.config.js的对样式文件的匹配规则 把limit选项注释掉 先这样解决吧 毕竟不能把很多时间花在处理打包工具上 应该花更多时间在处理业务 优化代码上(网上有遇到同样问题者 https://segmentfault.com/q/1010000008372874)
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        // 注释掉
        // limit: 10000,
        name: utils.assetsPath('/fonts/[name].[hash:7].[ext]') 
      }
    }

综上 解决路径问题 需要做到两点。

# vue，node项目上线打包总结
  1 vue要打包 成静态页面
  2 服务器端nginx里增加针对该项目的配置文件 见简书项目的配置
  /etc/nginx/conf.d/
   jianshu-benkid-cn-80.conf
  以下是内容：
    server {
        listen       80;
        server_name   jianshu.benkid.cn;

        location / {
          root /data/www/vue-vuex-router-jianshu-demo;
          index index.html index.htm;
        }
    }


  3 node只提供数据服务 做到前后端分离
  4 跑通了 很好OK

# 行内元素浮动后就有了宽高
  例如li>a a浮动后 可以设定其宽高了 当然a的父元素 li需要清除浮动

# vue2版本不支持IE9
  所以需要针对IE9写非兼容的方案 提示用户升级浏览器
  参照segmentfault
  <!--[if lt IE 9]><div class="alert-danger" role="alert">你的浏览器实在<strong>太太太太太太旧了</strong>，放学别走，升级完浏览器再说 <a target="_blank" class="alert-link" href="http://www.google.cn/chrome/browser/desktop/index.html">立即升级</a></div><![endif]-->

  在index.html文件加入对IE浏览器的判断

# 今天又坑了很久的问题 用git bash拷贝数据 insert到本地数据库 总是失败 用putty拷贝到阿里云就没问题 。我分析有两种可能：
  一种可能是我本地装的是32位的mongodb 据说32位的不太稳定
  二种可能是 用git bash操作容易出问题。
  最大可能就是32位的mongodb不稳定.

# git下载远程代码更新到本地最佳实践 
  场景：github代码已经更新 本地还是以前的版本 
  1 git fetch origin dev:dev // 下载远程主机origin的dev分支到本地dev分支 如果:dev 不写 就下载到本地当前分支

  2 git merge origin/dev // 把远程下载下来的代码合并到本地仓库，远程的和本地的合并 OK

# 关于axios在vue浏览器端及服务端node的使用
  1 在vue中的使用
  安装
  $ npm install axios
  引用
  或者使用cdn：
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  在vue中引用
  安装其他插件的时候，可以直接在 main.js 中引入并使用 Vue.use()来注册，但是 axios并不是vue插件，所以不能 使用Vue.use()，所以只能在每个需要发送请求的组件中即时引入。

  为了解决这个问题，我们在引入 axios 之后，通过修改原型链，来更方便的使用。

  //main.js
  import axios from 'axios'
  Vue.prototype.$http = axios

  在 main.js 中添加了这两行代码之后，就能直接在组件的 methods 中使用 $http命令

  执行 GET 请求
  // 向具有指定ID的用户发出请求
  $http.get('/user?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  // 也可以通过 params 对象传递参数
  $http.get('/user', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    执行 POST 请求
    $http.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    执行多个并发请求
    复制代码
    function getUserAccount() {
      return $http.get('/user/12345');
    }
    function getUserPermissions() {
      return $http.get('/user/12345/permissions');
    }
    axios.all([getUserAccount(), getUserPermissions()])
      .then($http.spread(function (acct, perms) {
        //两个请求现已完成
      }));

    2 在node中可以做代理服务器转发请求
    详见我的music-player项目
    代码如下：
    // 设置服务器代理 获取歌词
    apiRoutes.get('/lyric', function (req, res) {
      var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
      axios.get(url, {
        headers: {
          referer: 'https://y.qq.com/portal/player.html',
          host: 'c.y.qq.com'
        },
        params: req.query
      }).then((response) => {
        // 处理歌词数据 现在是一个jsonp的格式
        var ret = response.data
        if (typeof ret === 'string') {
          var reg = /^\w+\(({[^()]+})\)$/
          var matches = ret.match(reg)
          if (matches) {
            ret = JSON.parse(matches[1])
          }
        }
        res.json(ret)
      }).catch((e) => {
        console.log(e)
      })
    })

# 手写jsop
  <script type="text/javascript">
    function callback (data) {
      window.data = data;
    }
    
  </script>
  <script type="text/javascript">
  callback({
    'a':'124',
    'b':'456'
  })
  </script>

  <script>
    console.log(data);
  </script>

# 遇到的问题 页面多处需要获取数据 如新闻数据 联系我们数据 service数据 认证列表数据等等
  A页面可能需要news contactus service数据
  B页面可能需要contactus service数据
  C页面需要certi service数据

  借鉴音乐App的做法 
  把这些方法封装在公共js里
  具体：
  1 在src/common/js
  创建公共 jsop方法
  2 在src/api中创建公共配置参数和各自的方法
  公共配置参数文件
  config.js
  具体请求歌单数据封装在song.js
  具体请求歌手数据封装在singer.js
  具体请求搜索数据封装在search.js
  3 使用数据 在各个组件created的阶段去调用封装好的song.js 这样就很方便
  4 在我的项目中 可以借鉴这样的做法

# vue中餐computed中得不到ajax请求的数据，因为ajax是异步的，而computed是同步的

# background图片如何做到自适应
  body{
    font-family: "华文细黑";
    width: 100%;
    height:auto;
    // 关键参数 
    background:url("../img/Flyer-bg.png") no-repeat;
    // IE8及以下不支持
    background-size: 100%;
  }

# 路由跳转的方式之一 vue-player作者用的方法
    点击item定义点击函数：
      selectItem (item) {
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
        this.setDisc(item)  // 设置vuex数据
      },
    同时在路由router中定义
       path: '/recommend/:id'
# 关于option元素的点击事件及绑定 见https://cn.vuejs.org/v2/guide/forms.html#%E9%80%89%E6%8B%A9%E6%A1%86

# vue绑定的事件如何解除
  使用v-on:click绑定的事件如何移除
  https://segmentfault.com/q/1010000004346194
  // 条件绑定事件
  @click='!lastFlag && selectPage(curPage+1)' 

# props的值是由ajax请求得到 然后传递给子元素的时候
  参照： https://segmentfault.com/q/1010000008201831
  可以先设置该值为null
  在子元素标签加v-if 绑定thisvalue
  <child-elenment v-if='thisvalue' :thisvalue='thisvalue'></child-element> 

  见该项目：
  news.vue组件:
    <common-content 
      v-if='pageCount' 
      :queryTitle='queryTitle' 
      :originCurPage='originCurPage'
      :pageCount='pageCount'  
      :subjectCount='newsCount' 
      :subjectContent='news' 
      @curPageChange='curPageChange'
    ></common-content><!-- 给子元素传递requestTitle news -->
# router组件如何取到父组件的数据
  目前只能通过父组件传参给url 子组件通过：
  this.$route.params 获取
  如果数据量稍多，不可能传到url上然后来获取，音乐app是通过vuex来获取的

# 网站整合markdown的方法
  关键词: markdown编辑器 嵌入到网页
  https://www.zhihu.com/question/24368769
  https://www.tuicool.com/articles/3uIjei6
  https://www.jianshu.com/p/0f80b112a8b6
  https://www.zybuluo.com/mdeditor

  // 这个最好
  http://www.qdfuns.com/notes/25080/0ab267e319ea72ea5ad5573ca57de357.html
  // 还有更好的
  http://blog.csdn.net/gedonshen/article/details/78271964
  http://blog.csdn.net/lovejavaydj/article/details/73692917

  这是一个测试网页 亲测有效
  <!DOCTYPE html>
  <html>
  <head>
      <title>MarkDown</title>
      <script type="text/javascript" src="https://cdn.bootcss.com/showdown/1.3.0/showdown.min.js"></script>
  </head>
  <style>
      body {
        font-family: "Helvetica Neue", Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
       font-size: 16px;
        line-height: 1.42857143;
        color: #333;
        background-color: #fff;
      }
      ul li {
          line-height: 24px;
      }
      blockquote {
          border-left:#eee solid 5px;
          padding-left:20px;
      }
      code {
          color:#D34B62;
          background: #F9F2F4;
      }
  </style>
  <body>
  <div>
      <textarea id="content" style="height:400px;width:600px;" onkeyup="compile()"></textarea>
      <div id="result"></div>

  </div>
  <script type="text/javascript">
  function compile(){
      var text = document.getElementById("content").value;
      var converter = new showdown.Converter();
      var html = converter.makeHtml(text);
      document.getElementById("result").innerHTML = html;
  }
  </script>
  </body>
  </html>

# 用v-html渲染富文本文件遇到的坑
  https://www.cnblogs.com/theone67/p/6898229.html
  <父组件>
    <div v-html='data'></div>
  </子组件>

  如果data内有p标签元素 在此组件中定义的元素样式在data标签元素内不生效 因为data内的标签元素相当于是父组件的子组件
  父组件的style中加了scoped 意味着在父组件中定义的样式只在父组件中生效
  解决办法：把父组件的scoped属性去掉即可

# 同时满足具备2个classname才生效的写法
  .classname1.classname2 {
    color: red;
    ------
  }

# js正则遇到的坑
  [\b]内的字符不需要转意
  var reg = /\w+[\b]/;
  var path = '/news'
  var sum = path.match(reg);
  console.log(sum); // null

  var reg = /\w+\b/;
  var path = '/news'
  var sum = path.match(reg);
  console.log(sum); // ["news", index: 1, input: "/news"]

# eventBus遇到的坑
https://segmentfault.com/q/1010000009710635
  发送完emit事件后 在销毁阶段应该及时关闭

# 这样写 window.onresize = 不同组件会相互覆盖 导致只有一个生效 正确的方法是增加监听

# 一种图片自适应的布局方式
  http://www.zhangxinxu.com/wordpress/2017/08/css-percent-padding-image-layout/
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
    .banner {
        padding: 30% 0 0 0; <!-- 30%相对于父级的宽度 -->
        position:relative;
        height: 0;
    }
    .banner > img {
        position: absolute;
        width: 100%; height: 100%;
        left:0;
        top:0;
    }
    </style>
  </head>
  <body>
    <div class="banner">
    <img src="bd_logo1.png">
  </div>
  </body>
  </html>

# 增加打开页面的时候 在后台设置session
  思路： 打开详情页的时候 发送ajax请求
  具体为:
  1 打开详情页 附带title参数
  2 服务器收到请求设置一个随机产生的userid
  req.session.userId= 随机产生的userid
  req.session.userId+Titile = userId+Titile
  并返把userID返回给前端
  3 数据库里浏览器加1
  4 前台重复打开一个标题的文章
  5 后台查询是否有这个sessionId 如果有 就不设置新的ID随机数
  如果没有 就设置ID随机数
  然后查询req.session.userId+Titile是否为空
  如果为空 就设置req.session.userId+Titile=req.session.userId+Titile
  如果不为空 就不设置

# axios 跨域无法setcookie的解决方法
    withCredentials: true
    
# vue项目中浏览器图标的设置
  根目录下有一个index.html，这个就相当于我们普通项目中的各个html页面文件，所以设置方法就是在index.html的head标签中添加link标签。
  这里要注意的是图标文件的位置，不能放到src里，这样的路径会让浏览器找不到。网页把根域名作为相对路径的根目录了，然而我们文件的路径是相对于项目文件的根目录的，因此就找不到了。

  因此，图片一类的静态文件，应该放在这个static文件夹下，这个文件夹下的文件（夹）会按照原本的结构放在网站根目录下。这时我们再去使用/static绝对路径，这样就可以访问这些静态文件了。所以推荐将项目中的静态文件放到static文件夹下。

  将favicon.ico的图标文件放到static文件夹内，在index.html的head中添加：

  <link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico">

# nginx解决跨域请求的问题
  xxx.conf文件设置如下：
  test2.benkid.cn 是主站访问路径 // 服务器端是4000端口监听
  test2.benkid.cn/api 是api路径 // 服务器端是3000端口监听

  upstream test2 {
      server 127.0.0.1:4000;
  }

  upstream api {
      server 127.0.0.1:3000;
  }


  server {
      listen       80;
      server_name  test2.benkid.cn;

      location / {
          proxy_pass http://test2;
          proxy_set_header Host $host;
          proxy_set_header X-Nginx-proxy true;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_redirect off;
      }

    location /api {
        proxy_pass http://api;
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-proxy true;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_redirect off;
    }

  }

# 此项目的服务器端nginx配置
upstream runjieapi {
    server 127.0.0.1:3009;
}

server {
    listen       80;
    server_name   runjieapi.benkid.cn;

    location / {
        proxy_pass http://runjieapi;
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-proxy true;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_redirect off;
    }
}


# 此项目通过代理
server {
    listen       80;
    server_name   runjie.benkid.cn;

    location / {
      root /data/www/project-runjie-prod;
      index index.html index.htm;
    }

    location /api {
      proxy_pass http://127.0.0.1:3009/api;
      proxy_set_header Host $host;
      proxy_set_header X-Nginx-proxy true;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_redirect off;
    }

}

#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#