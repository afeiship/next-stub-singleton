# next-stub-singleton

> Stub code for singleton

## install:

```bash
npm install -S afeiship/next-stub-singleton --registry=https://registry.npm.taobao.org
```

## usage:

```js
class App {}

Object.assign(App, nx.stubSingleton());

export default App;
```

## stub code:

```js
{
  instance: null,
  getInstance: function() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
}
```
