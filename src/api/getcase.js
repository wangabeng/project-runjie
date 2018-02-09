import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, URLCOUNT, CASE} from 'src/api/config.js';

export function getCase (curPage, pageCapacity) {
  return getData(URLSEARCH, CASE, curPage, pageCapacity);
}

export function getCaseCount () {
  return getCount(URLCOUNT, CASE);
}
