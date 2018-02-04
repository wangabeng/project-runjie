import axios from 'axios';
import addP from 'common/js/addP.js';
import {PAGECAPACITY} from 'src/api/config.js';

// 获取新闻页等内容
// url = 'http://localhost:3002/find'
// subject = 'news'
// curPage 如果没有传入此参数 此参数就是1 默认显示第一页
// pageCapacity 默认是显示5条数据
// 在此项目中 默认每页显示5条数据
// 在分页业务中 用户只需传入url 集合名称 当前页即可
export function getData (url, subject, curPage, pageCapacity) {
  var curPage = curPage || 1;
  var pageCapacity = pageCapacity || PAGECAPACITY; 
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        contentName: subject,
        curPage: curPage,
        pageCapacity: pageCapacity
      }        
    }).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error);
    });    
  });
}

// 获取新闻页等条数（总数量）
// url = 'http://localhost:3000/getcount?contentName=test'
// subject = 'news'
export function getCount (url, subject) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: {
        contentName: subject
      }        
    }).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error);
    });    
  });
}
