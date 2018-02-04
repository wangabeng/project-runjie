import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, URLCOUNT, SERVICE} from 'src/api/config.js';

export function getNews () {
  return getData(URLSEARCH, SERVICE);
}

export function getNewsCount () {
  return getCount(URLCOUNT, SERVICE);
}
