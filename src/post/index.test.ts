import NHentaiAPI from '..';

const api = (new NHentaiAPI()).post;

describe('#id', () => {
  test('Compatibility', async () => {
    const post = await api.id(57983);

    expect(post).toBeDefined();
    expect(post).toHaveProperty('id', 57983);
  }, 20000000);
});
