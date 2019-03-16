import axios from 'axios';

export default class Terms {
  constructor() {
    this.terms = [];
  }

  async getTerms(taxonomy) {
    try {
      const res = await axios.get(
        `https://cpdev.crowdpolicy.com/marinos_tentes/wp-json/wp/v2/${taxonomy}`
      );

      this.terms = res.data;
    } catch (err) {
      alert('something went wrong in getTerms..');
    }
  }
}
