import axios from 'axios';
import addP from 'common/js/addP.js';

// url = 'http://localhost:3002/find'
// subject = 'news'
export default function getData (url, subject) {
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