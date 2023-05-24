import nx from '@jswork/next';

nx.stubSingleton = function () {
  return {
    instance: null,
    getInstance: function () {
      var args = [null].concat(nx.slice(arguments));
      var Clazz = Function.prototype.bind.apply(this, args);
      return new Clazz();
    },
    getSingleton: function () {
      var args = [null].concat(nx.slice(arguments));
      if (!this.instance) {
        var Clazz = Function.prototype.bind.apply(this, args);
        this.instance = new Clazz();
      }
      return this.instance;
    }
  };
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.stubSingleton;
}

export default nx.stubSingleton;
