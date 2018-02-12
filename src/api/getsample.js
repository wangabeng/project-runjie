import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, SAMPLE} from 'src/api/config.js';

export function getSample (curPage, pageCapacity) {
  return getData(URLSEARCH, SAMPLE, curPage, pageCapacity);
}

export function getSampleCount () {
  return getCount(URLCOUNT, SAMPLE);
}
