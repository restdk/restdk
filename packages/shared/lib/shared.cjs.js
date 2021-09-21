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

exports.make = make;
//# sourceMappingURL=shared.cjs.js.map
