import * as SELECTOR from './selectors';
import { getText, toInt, regexExtract, isEmpty, getRootText, isDefined, isUndefined } from '../parse.utils';
import { IPost } from '.';
import { IContent, ITagged, ITag, IStdTaging } from '../schema.base';

// SELECTOR
export const getPages = ($: CheerioStatic): IContent[] =>
  [{
    conetntURL: [
      ...$(SELECTOR.VIDEO).map((e, el) => $(el).attr('src')).get(),
      $(SELECTOR.ORIGINAL).attr('href'),
      $(SELECTOR.HIGH_RES).attr('href'),
      $(SELECTOR.HIGH_RES_SHOW).attr('href'),
      $(SELECTOR.PREVIEW).attr('src'),
    ].filter((url) => !isEmpty(url))
  }]


export const getTags = ($: CheerioStatic): ITagged => ({
  tags: $(SELECTOR.TAG)
    .map((i, elRaw) => {
      const el = $(elRaw);

      return {
        name: getRootText(el),
        href: el.attr('href')
      } as ITag;
    }).get().filter((v) => !isEmpty(v.name) || !isEmpty(v.href)) as ITag[],
});

export default ($: CheerioStatic, id: number): IPost => {
  const content = getPages($);
  if (!content.length) { throw new Error('There is no content'); }

  return {
    id,

    tags: getTags($),
    content,
  };
};
