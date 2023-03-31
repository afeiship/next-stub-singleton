interface NxStatic {
  stubSingleton(): {
    instance: any;
    getInstance: () => any;
    getSingleton: () => any;
  };
}
