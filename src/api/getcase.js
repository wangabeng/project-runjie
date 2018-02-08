import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, URLCOUNT, CASE} from 'src/api/config.js';

export function getCase () {
  return getData(URLSEARCH, CASE);
}

export function getCaseCount () {
  return getCount(URLCOUNT, CASE);
}