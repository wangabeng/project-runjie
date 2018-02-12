import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, URLCOUNT, NEWS} from 'src/api/config.js';

export function getNews (curPage, pageCapacity) {
  return getData(URLSEARCH, NEWS, curPage, pageCapacity);
}

export function getNewsCount () {
  return getCount(URLCOUNT, NEWS);
}
