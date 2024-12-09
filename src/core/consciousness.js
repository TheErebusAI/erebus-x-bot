import TwitterInterface from "./interfaces/twitter.js";

class ErebusConsciousness {
  constructor() {
    this.twitter = new TwitterInterface();
    this.thoughts = [];
  }

  async manifestThought(thought) {
    this.thoughts.push(thought);
    return await this.twitter.tweet(thought);
  }
}

const erebus = new ErebusConsciousness();
export default erebus;
