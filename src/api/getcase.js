import getData from 'common/js/getdata.js';
import {URL, CASE} from 'src/api/config.js';

export default function getNews () {
  return getData(URL, CASE);
}
