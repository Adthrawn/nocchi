import path from 'path';
import config from '../../config';
import { getRandom, errorResponses } from '../util';
const assetsPath = path.join(__dirname, '../../assets');
const emotes = require(`${assetsPath}/emotes`);

class Command {
  constructor() {
    this.aliases = ['answer', 'qq'];
  }
  run(payload) {
      const { bot, message } = payload;
      const { content } = message;
      if(content.search(new RegExp("is (rare|spark|rarespark) cancer", "i")) > -1) {
        message.reply(emotes["/cancer"]);
      } else {
        message.reply(errorResponses[getRandom(0,errorResponses.length)]);
      }
  }
}

module.exports = new Command();
