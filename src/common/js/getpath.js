export default function getRouterPath (routerpath) {
  // 截取路由地址的一级路由地址
  // 如地址是 /service/5a6d7cbb84d166a57b200475 截取service
  // 坑 语法不支持(?<=^\/)右侧位置捕获（我这么叫
  // 中括号除了/需要转义 其他不需要转义
  var reg = /[^\/]\w+\b/;
  var sum = routerpath.match(reg);
  return sum? sum[0]: sum; 
}
