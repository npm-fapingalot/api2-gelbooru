import NHentaiAPI from '..';

const api = (new NHentaiAPI()).list;

describe('#home', () => {
  test('Compatibility', async () => {
    const posts = await api.home();

    expect(posts).toBeDefined();
    expect(posts.length).toBeGreaterThan(1);
  }, 2000000);
});

describe('#tag', () => {
  test('Compatibility', async () => {
    const posts = await api.tag('mabel_pines');

    expect(posts).toBeDefined();
    expect(posts.length).toBeGreaterThan(1);
  }, 2000000);
});
