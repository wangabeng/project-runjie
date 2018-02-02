import getData from 'common/js/getdata.js';
import {URL, ABOUTUS} from 'src/api/config.js';

export default function getAboutus () {
  return getData(URL, ABOUTUS);
}
