import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, URLCOUNT, GETCERTIFICATION} from 'src/api/config.js';

export function getCertification () {
  return getData(URLSEARCH, GETCERTIFICATION);
}

export function getCertificationCount () {
  return getCount(URLCOUNT, GETCERTIFICATION);
}
