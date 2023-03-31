# next-stub-singleton
> Stub code for singleton.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
yarn add @jswork/next-stub-singleton
```

## usage
```ts
import "@jswork/next-stub-singleton";

class Person {
  constructor(public name) {
    this.name = name;
  }
}

Object.assign(Person, nx.stubSingleton());

const app = (Person as unknown as SingletonType).getInstance("abc");

console.log(app);
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-stub-singleton/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-stub-singleton
[version-url]: https://npmjs.org/package/@jswork/next-stub-singleton

[license-image]: https://img.shields.io/npm/l/@jswork/next-stub-singleton
[license-url]: https://github.com/afeiship/next-stub-singleton/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-stub-singleton
[size-url]: https://github.com/afeiship/next-stub-singleton/blob/master/dist/next-stub-singleton.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-stub-singleton
[download-url]: https://www.npmjs.com/package/@jswork/next-stub-singleton
