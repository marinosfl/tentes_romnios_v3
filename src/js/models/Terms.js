import axios from 'axios';

export default class Terms {
  constructor() {
    this.terms = [];
  }

  async getTerms(taxonomy) {
    try {
      const res = await axios.get(
        `http://159.69.107.6/romnios/wp-json/wp/v2/${taxonomy}`
      );

      this.terms = res.data;
    } catch (err) {
      alert('something went wrong in getTerms..');
    }
  }
}
