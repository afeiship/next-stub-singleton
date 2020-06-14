/*!
 * name: @feizheng/next-stub-singleton
 * description: Stub code for singleton.
 * homepage: https://github.com/afeiship/next-stub-singleton
 * version: 1.1.1
 * date: 2020-06-14T10:04:26.493Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.stubSingleton = function () {
    return {
      instance: null,
      getInstance: function () {
        var args = [ null ].concat(nx.slice(arguments));
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

//# sourceMappingURL=next-stub-singleton.js.map
