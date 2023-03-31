export interface SingletonType {
  instance: any;
  getInstance: () => any;
  getSingleton: () => any;
}

interface NxStatic {
  stubSingleton(): SingletonType;
}
