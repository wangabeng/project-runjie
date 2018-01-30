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
#
#
#