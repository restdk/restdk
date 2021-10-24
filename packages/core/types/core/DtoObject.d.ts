export declare class DtoObject {
    name: string;
    parent: null | string;
    property: Property[];
    getParentString(): string;
    getPropertyString(): string;
    toString(): string;
    static create(props: Partial<DtoObject>): DtoObject;
}
export declare class Property {
    name: string;
    type: string;
    required: boolean;
    comment: string;
    default: string;
    getDefaultString(): string;
    getRequiredString(): "" | "?";
    toString(): string;
    static create(props: Partial<Property>): Property;
}
//# sourceMappingURL=DtoObject.d.ts.map