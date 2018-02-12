import {getData, getCount} from 'common/js/getdata.js';
import {URLSEARCH, JOBS} from 'src/api/config.js';

export function getJobs () {
  return getData(URLSEARCH, JOBS);
}

export function getJobsCount () {
  return getCount(URLCOUNT, JOBS);
}
