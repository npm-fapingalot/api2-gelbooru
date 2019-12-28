import { getID } from './parser';

describe('#getID', () => {
  test('Working', () => {
    const $ = { find: ((selector: string) => ({ attr: (attr: string) => 'index.php?page=post&s=view&id=57880' })) } as Cheerio;
    expect(getID($)).toBe(57880);
  });
});
