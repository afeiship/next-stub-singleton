/*!
 * name: @feizheng/next-stub-singleton
 * description: Stub code for singleton.
 * homepage: https://github.com/afeiship/next-stub-singleton
 * version: 1.1.0
 * date: 2020-06-14T09:56:59.472Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.stubSingleton = function () {
    return {
      instance: null,
      getInstance: function () {
        if (!this.instance) {
          this.instance = new (Function.prototype.bind.apply(this, arguments));
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
