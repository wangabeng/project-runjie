import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, URLCOUNT, NEWS} from 'src/api/config.js';

export function getNews (curPage) {
  return getData(URLSEARCH, NEWS, curPage);
}

export function getNewsCount () {
  return getCount(URLCOUNT, NEWS);
}
