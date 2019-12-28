import * as SELECTOR from './selectors';
import { getText, toInt, regexExtract, isEmpty } from '../parse.utils';
import { IPrevPost } from '.';
import { HREF_REGEX } from '../post';

// Parsers
export const getID = ($: Cheerio): number | null =>
  toInt(regexExtract($.find(SELECTOR.POST_LINK).attr('href'), HREF_REGEX));

// Main parsers
export default ($: CheerioStatic): IPrevPost[] => {
  return $(SELECTOR.POST).map((ignore, elRaw) => {
    const el = $(elRaw);

    const id = getID(el);
    if (!id) { throw new Error('Invalid id: ' + id); }

    const thumbnail = ((el: Cheerio) => el.attr('data-src') || el.attr('src'))(el.find(SELECTOR.POST_IMG));
    if (isEmpty(thumbnail)) { throw new Error('Thumbnail is empty'); }

    return {
      id,
      thumbnail,
    } as IPrevPost;
  }).get();
};
