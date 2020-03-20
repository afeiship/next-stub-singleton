/*!
 * name: @feizheng/next-stub-singleton
 * description: Stub code for singleton.
 * url: https://github.com/afeiship/next-stub-singleton
 * version: 1.0.5
 * date: 2020-03-20 20:46:42
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
