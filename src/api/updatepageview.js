import axios from 'axios';
import {URLGETTITLE} from 'src/api/config.js';

export default function (subject, title) {
  return new Promise((resolve, reject) => {
    axios.get(URLGETTITLE, {
      params: {
        collectionName: subject,
        title: encodeURI(title)
      },
      withCredentials: true       
    }).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error);
    });    
  });
}
