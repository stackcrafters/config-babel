export interface Response {
    statusCode: code;
    body?: string;
    headers?: Record<string, string>;
}
export declare enum code {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    TOO_MANY_REQUEST = 429
}
export declare const response: (body: any, statusCode?: code) => Response;
export declare const messageResponse: (message: any, statusCode?: code) => Response;
