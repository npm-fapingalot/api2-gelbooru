import cheerio from 'cheerio';
import { isUndefined, isDefined, isEmpty, isSomething, regexExtract, toInt, htmlTrim, rmChildren, getRootText } from './parse.utils';

describe('#isUndefined', () => {
  test('Working', () => {
    expect(isUndefined(null)).toBe(true);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined('   ')).toBe(false);
    expect(isUndefined('Some')).toBe(false);
  });
})

describe('#isDefined', () => {
  test('Working', () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
    expect(isDefined(NaN)).toBe(true);
    expect(isDefined('')).toBe(true);
    expect(isDefined('   ')).toBe(true);
    expect(isDefined('Some')).toBe(true);
  });
})

describe('#isEmpty', () => {
  test('Working', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('Some')).toBe(false);
  });
})

describe('#isSomething', () => {
  test('Working', () => {
    expect(isSomething(null)).toBe(false);
    expect(isSomething(undefined)).toBe(false);
    expect(isSomething(NaN)).toBe(false);
    expect(isSomething('')).toBe(false);
    expect(isSomething('   ')).toBe(false);
    expect(isSomething('Some')).toBe(true);
  });
})

describe('#regexExtract', () => {
  test('Working', () => {
    const REGEX = /(test)/i;

    expect(regexExtract('', REGEX)).toBe(null);
    expect(regexExtract('     ', REGEX)).toBe(null);
    expect(regexExtract('Something else', REGEX)).toBe(null);
    expect(regexExtract('test', REGEX)).toBe('test');
    expect(regexExtract('test 123', /(test) (\d+)/, 2)).toBe('123');
  });
})

describe('#toInt', () => {
  test('Working', () => {
    expect(toInt(null)).toBe(null);
    expect(toInt(undefined)).toBe(null);
    expect(toInt('')).toBe(null);
    expect(toInt('    ')).toBe(null);
    expect(toInt('Invalid')).toBe(null);
    expect(toInt('123')).toBe(123);
  });
})

describe('#htmlTrim', () => {
  test('Working', () => {
    expect(htmlTrim('')).toBe('');
    expect(htmlTrim('\n')).toBe('');
    expect(htmlTrim('\r\t')).toBe('');
    expect(htmlTrim('\r\n\t')).toBe('');
    expect(htmlTrim('       ')).toBe('');

    expect(htmlTrim('some     text\nhere\r\n\tmore\r\tm')).toBe('some text here more m');
  });
})

describe('#rmChildren', () => {
  test('Working', () => {
    const $ = cheerio.load('<body>parent<p>children</p></body>');
    expect(rmChildren($('body')).text()).toBe('parent');
  });
})

describe('#getRootText', () => {
  test('Working', () => {
    const $ = cheerio.load('<body>parent<p>children</p></body>');
    expect(getRootText($('body'))).toBe('parent');
  });
})
