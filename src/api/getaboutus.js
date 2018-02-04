import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, ABOUTUS} from 'src/api/config.js';

export function getAboutus () {
  return getData(URLSEARCH, ABOUTUS);
}

export function getAboutusCount () {
  return getCount(URLCOUNT, ABOUTUS);
}
