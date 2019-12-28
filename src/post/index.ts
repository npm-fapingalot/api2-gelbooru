import API from '..';
import { toInt, regexExtract, isDefined } from '../parse.utils';
import parse from './parser';
import { ID } from './schema';

export const HREF_REGEX = /id\=(\d+)/i;

export default class PostAPI {
  constructor(private api: API) { }

  async id(id: ID) { return parse(await this.api.cheerio(`/index.php?page=post&s=view&id=${id}`), id); }

  hrefToID(href: string): ID | null {
    if (!href.startsWith('/') && !href.startsWith(this.api.baseURL + '/')) { return null; }
    return toInt(regexExtract(href, HREF_REGEX))
  }

  isValidHref(href: string): boolean {
    return isDefined(this.hrefToID(href));
  }
}

export * from './schema';
