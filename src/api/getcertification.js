import getData from 'common/js/getdata.js';
import {URL, GETCERTIFICATION} from 'src/api/config.js';

export default function getCertification () {
  return getData(URL, GETCERTIFICATION);
}
