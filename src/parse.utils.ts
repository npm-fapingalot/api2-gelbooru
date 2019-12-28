/**
 * Checks if value is undefined (is not null/undefined)
 * @param val The value that is being tested
 */
export const isUndefined = <T>(val: T | undefined | null): val is null | undefined =>
  <T>val === undefined || <T>val === null;

/**
 * Checks if value is defined (is not null/undefined)
 * @param val The value that is being tested
 */
export const isDefined = <T>(val: T | undefined | null): val is T =>
  !isUndefined(val);

/**
 * Checks id value is empty (null/undefined/empty string/space string)
 * @param val The value that is being tested
 */
export const isEmpty = <T>(val: T | undefined | null): val is null | undefined => {
  if (isUndefined(val)) { return true; }
  if (typeof val === 'number') { return isNaN(val); }
  if (typeof val === 'string') { return val.length === 0 || val.trim().length === 0; }
  return false;
}

/**
 * Checks id value is something (is not null/undefined/empty string/space string)
 * @param val The value that is being tested
 */
export const isSomething = <T>(val: T | undefined | null): val is T =>
  !isEmpty(val);

/**
 * Extracts a regex groups value
 * @param text The source string
 * @param regex The regex containing a group '()'
 * @param index The index number of the group that is being extracted. DEFAULTS to 1.
 */
export const regexExtract = (text: string | null | undefined, regex: RegExp, index = 1): string | null => {
  if (isEmpty(text)) { return null; }

  const numText = regex.exec(text);
  if (isUndefined(numText) || isEmpty(numText[index])) { return null; }

  return numText[index];
};

/**
 * The same as parseInt but checks if empty {@link isEmpty}
 * @param val The input string
 */
export const toInt = (val: string | null | undefined): number | null => {
  if (isEmpty(val)) { return null; }
  const num = parseInt(val as string, 10);
  return isNaN(num) ? null : num;
};

/**
 * Removes multiple spaces and newlines.
 * @param val The value
 */
export const htmlTrim = (val: string): string =>
  val
    .replace(/(\r\n\t|\n|\r\t)/gm, ' ')
    .replace(/(\s+)/gm, ' ').trim();


/**
* Gets the text of a component. Sanatizes {@link htmlTrim} and empty {@link isEmpty} to nulls it.
* @param el The target element
*/
export const getText = (el: Cheerio): string | null => {
  const text = htmlTrim(el.text());
  return isEmpty(text) ? null : text;
};

/**
 * Gets the element without wits children
 * @param el The target element
 */
export const rmChildren = (el: Cheerio): Cheerio =>
  el.clone()
    .children()
    .remove()
    .end();

/**
 * Gets the text of a component without its children. Sanatizes {@link htmlTrim} and empty {@link isEmpty} to nulls it.
 * @param el The target element
 */
export const getRootText = (el: Cheerio): string | null =>
  getText(rmChildren(el));
