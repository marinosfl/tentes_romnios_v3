import axios from 'axios';

export default class Category {
  constructor(postType, taxonomy) {
    this.postType = postType;
    this.taxonomy = taxonomy;
    this.posts = [];
    this.terms = [];
  }

  async getPosts() {
    try {
      const res = await axios.get(
        `https://cpdev.crowdpolicy.com/marinos_tentes/wp-json/wp/v2/${
          this.postType
        }`
      );
      this.posts = res.data;
    } catch (err) {
      alert(err);
    }
  }

  async getTerms() {
    try {
      const res = await axios.get(
        `https://cpdev.crowdpolicy.com/marinos_tentes/wp-json/wp/v2/${
          this.taxonomy
        }`
      );

      this.terms = res.data;
    } catch (err) {
      alert('something went wrong..');
    }
  }
}
