export interface SingletonType {
  instance: any;
  getInstance: (...args) => any;
  getSingleton: (...args) => any;
}

interface NxStatic {
  stubSingleton(): SingletonType;
}
