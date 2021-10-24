export declare function make<T>(instance: T, props: Partial<T>): T;
declare type Constructor<T> = new (...args: any) => T;
export declare function makePlus<T>(constructorFn: Constructor<T>, props: Partial<T>): T;
export {};
//# sourceMappingURL=make.d.ts.map