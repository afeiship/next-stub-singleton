# next-stub-singleton
> Stub code for singleton.

## installation
```bash
npm install -S @feizheng/next-stub-singleton
```

## usage
```js
import '@feizheng/next-stub-singleton';

class App {}
Object.assign(App, nx.stubSingleton());
export default App;


// stub code:
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
