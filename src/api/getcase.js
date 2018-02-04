import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, URLCOUNT, CASE} from 'src/api/config.js';

export function getNews () {
  return getData(URLSEARCH, CASE);
}

export function getNewsCount () {
  return getCount(URLCOUNT, CASE);
}