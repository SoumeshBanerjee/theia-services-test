export const ServerPath = '/services/server-remote';

export const BackendServer = Symbol('BackendServer');

export interface BackendServer {
    sayHello(): Promise<string>;
}
