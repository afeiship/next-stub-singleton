require('../src');

jest.setTimeout(60 * 1000);

describe('api.basic test', () => {
  test('get a instnace use `getSingleton` should always get the same one', () => {
    class App {}

    Object.assign(App, nx.stubSingleton());
    expect(App.instance).toBe(null);

    // get a instnace use `getSingleton` should always get the same one
    const ins1 = App.getSingleton();
    const ins2 = App.getSingleton();

    expect(ins1).toEqual(ins2);
  });

  test('get a instance use `getInstance` should always get a new one', () => {
    class App {}

    Object.assign(App, nx.stubSingleton());
    expect(App.instance).toBe(null);

    // get a instance use `getInstance` should always get a new one
    const ins1 = App.getInstance();
    const ins2 = App.getInstance();

    expect(ins1 === ins2).toBe(false);
  });
});
