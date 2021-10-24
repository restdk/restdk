'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function make(instance, props) {
    for (const key in props) {
        if (Object.prototype.hasOwnProperty.call(props, key)) {
            const prop = props[key];
            instance[key] = prop;
        }
    }
    return instance;
}
function makePlus(constructorFn, props) {
    return make(new constructorFn(), props);
}

function toSmallHump(name) {
    const [c, ...other] = name;
    return c.toLowerCase() + other.join("");
}
function em(params, prefix = "", suffix = "") {
    if (typeof params === "number" || typeof params === "boolean") {
        return params;
    }
    return params ? prefix + params + suffix : "";
}

exports.em = em;
exports.make = make;
exports.makePlus = makePlus;
exports.toSmallHump = toSmallHump;
//# sourceMappingURL=shared.cjs.js.map
