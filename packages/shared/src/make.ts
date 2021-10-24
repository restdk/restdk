export function make<T>(instance: T, props: Partial<T>): T {
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      const prop = props[key];
      instance[key] = prop;
    }
  }
  return instance;
}

type Constructor<T> = new (...args: any) => T;

export function makePlus<T>(constructorFn: Constructor<T>, props: Partial<T>) {
  return make(new constructorFn(), props);
}
