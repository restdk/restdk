export function make<T>(instance: T, props: T): typeof instance {
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      const prop = props[key];
      instance[key] = prop;
    }
  }
  return instance;
}
