import axios from 'axios';

export default class PostGallery {
  constructor() {
    this.post = [];
  }

  async getPostMeta(postType, postId) {
    try {
      const res = await axios.get(
        `http://159.69.107.6/romnios/wp-json/wp/v2/${postType}/${postId}`
      );
      this.post = res.data;
    } catch (err) {
      alert(err);
    }
  }
}
