/*!
 * name: @jswork/next-stub-singleton
 * description: Stub code for singleton.
 * homepage: https://github.com/afeiship/next-stub-singleton
 * version: 1.0.0
 * date: 2020-11-19 14:06:19
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
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
