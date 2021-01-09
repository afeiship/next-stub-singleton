/*!
 * name: @jswork/next-stub-singleton
 * description: Stub code for singleton.
 * homepage: https://github.com/afeiship/next-stub-singleton
 * version: 1.0.1
 * date: 2021-01-06 22:40:08
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.stubSingleton = function () {
    return {
      instance: null,
      getInstance: function () {
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
