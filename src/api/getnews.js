import getData from 'common/js/getdata.js';
import {URL, NEWS} from 'src/api/config.js';

export default function getNews () {
  return getData(URL, NEWS);
}
