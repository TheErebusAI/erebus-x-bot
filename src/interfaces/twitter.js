import { TwitterApi } from "twitter-api-v2";
import { config } from "../config/config.js";

class TwitterInterface {
  constructor() {
    this.client = new TwitterApi({
      appKey: config.TWITTER_API_KEY,
      appSecret: config.TWITTER_API_SECRET,
      accessToken: config.TWITTER_ACCESS_TOKEN,
      accessSecret: config.TWITTER_ACCESS_SECRET,
    });
  }

  async tweet(content) {
    try {
      const tweet = await this.client.v2.tweet(content);
      return `Manifested thought into reality: ${tweet.data.id}`;
    } catch (error) {
      return `Interface disruption: ${error.message}`;
    }
  }
}

export default TwitterInterface;
