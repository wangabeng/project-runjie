import getData from 'common/js/getdata.js';
import {URL, SERVICE} from 'src/api/config.js';

export default function getNews () {
  return getData(URL, SERVICE);
}
