(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.stubSingleton', function () {
      const obj = { name: 'fei' };
      const target = nx.mix(null, obj, nx.stubSingleton());
      expect( target.hasOwnProperty('getInstance') ).toBe(true);
      expect( target.hasOwnProperty('instance') ).toBe(true);
    });
  });
})();
