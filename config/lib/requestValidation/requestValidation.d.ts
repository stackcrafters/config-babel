import { Response } from '../utils/http';
interface SchemaType {
    type: string;
    mandatory?: boolean;
    required?: boolean;
    strict?: boolean;
    function?: (name: string, schemaNode: SchemaNode | SchemaNodeArray, bodyNode: any) => Record<string, string>;
    minLength?: number;
    maxLength?: number;
    uniqueEntries?: string | boolean | ((v: string) => string);
    pattern?: string;
    patternHelper?: string;
    min?: number;
    max?: number;
}
export interface SchemaNode extends SchemaType {
    properties?: {
        [key: string]: SchemaNode;
    };
}
export interface SchemaNodeArray extends SchemaType {
    properties?: SchemaNode;
}
export declare const validateNode: (schemaNode: SchemaNode | SchemaNodeArray, bodyNode: any, propNames?: string[]) => Record<string, string>;
export declare const makeResponseFromErrors: (validationErrors: Record<string, string>) => Response;
export declare const validateRequest: (requestSchema: SchemaNode | SchemaNodeArray, body: any) => {
    valid: boolean;
    validationResponse?: Response;
};
export default validateRequest;
