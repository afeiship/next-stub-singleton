/*!
 * name: @feizheng/next-stub-singleton
 * url: https://github.com/afeiship/next-stub-singleton
 * version: 1.0.3
 * date: 2019-11-24T09:42:41.397Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.stubSingleton = function() {
    return {
      instance: null,
      getInstance: function() {
        if (!this.instance) {
          this.instance = new this();
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
