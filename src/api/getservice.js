import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, URLCOUNT, SERVICE} from 'src/api/config.js';

export function getService (curPage, pageCapacity) {
  return getData(URLSEARCH, SERVICE, curPage, pageCapacity);
}

export function getServiceCount () {
  return getCount(URLCOUNT, SERVICE);
}
