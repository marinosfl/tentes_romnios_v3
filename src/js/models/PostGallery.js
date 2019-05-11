import axios from 'axios';
import config from '../config';

export default class PostGallery {
  constructor() {
    this.post = [];
  }

  async getPostMeta(postType, postId) {
    try {
      const res = await axios.get(
        `${config.WORDPRESS_API}${postType}/${postId}`
      );
      this.post = res.data;
    } catch (err) {
      alert(err);
    }
  }
}
