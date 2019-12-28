import NHentaiAPI from '..';

const api = (new NHentaiAPI()).post;

describe('#hrefToID', () => {
  test('Working', async () => {
    expect(api.hrefToID('https://gravityfalls.booru.net/index.php?page=post&s=view&id=57983')).toBe(null);

    expect(api.hrefToID('https://gravityfalls.booru.org/index.php?page=post&s=view&id=57983')).toBe(57983);
    expect(api.hrefToID('/index.php?page=post&s=view&id=57983')).toBe(57983);
  }, 20000000);
});

describe('#isValidHref', () => {
  test('Working', async () => {
    expect(api.isValidHref('https://gravityfalls.booru.net/index.php?page=post&s=view&id=57983')).toBe(false);

    expect(api.isValidHref('https://gravityfalls.booru.org/index.php?page=post&s=view&id=57983')).toBe(true);
    expect(api.isValidHref('/index.php?page=post&s=view&id=57983')).toBe(true);
  }, 20000000);
});
