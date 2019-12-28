import fetch, { RequestInit } from 'node-fetch';
import cheerio from 'cheerio';
import ListAPI from './list';
import PostAPI from './post';

export default class GelbooruAPI {
  public readonly post = new PostAPI(this);
  public readonly list = new ListAPI(this);


  constructor(public readonly baseURL = 'https://gravityfalls.booru.org/') {
    this.baseURL = baseURL.replace(/\/$/, '');
  }


  // Helper functions
  public async html(href: string, options?: RequestInit) {
    return await (await fetch(this.baseURL + href, options)).text();
  }
  public async cheerio(href: string, options?: RequestInit) {
    return cheerio.load(await this.html(href, options));
  }
}
