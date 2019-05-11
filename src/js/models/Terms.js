import axios from 'axios';
import config from '../config';

export default class Terms {
  constructor() {
    this.terms = [];
  }

  async getTerms(taxonomy) {
    try {
      const res = await axios.get(`${config.WORDPRESS_API}${taxonomy}`);

      this.terms = res.data;
    } catch (err) {
      alert('something went wrong in getTerms..');
    }
  }
}
