function make(instance, props) {
    for (const key in props) {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            const prop = props[key];
            instance[key] = prop;
        }
    }
    return instance;
}

export { make };
//# sourceMappingURL=shared.esm.js.map
