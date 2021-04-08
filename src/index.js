(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

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

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.stubSingleton;
  }
})();
