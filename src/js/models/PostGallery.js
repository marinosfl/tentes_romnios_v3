import axios from 'axios';

export default class PostGallery {
  constructor() {
    this.post = [];
  }

  async getPostMeta(postType, postId) {
    try {
      const res = await axios.get(
        `https://cpdev.crowdpolicy.com/marinos_tentes/wp-json/wp/v2/${postType}/${postId}`
      );
      this.post = res.data;
    } catch (err) {
      alert(err);
    }
  }
}
