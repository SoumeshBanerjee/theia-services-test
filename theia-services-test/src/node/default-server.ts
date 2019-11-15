import { injectable } from 'inversify';
import { BackendServer } from "../common/server-protocol";

@injectable()
export class DefaultServer implements BackendServer {
    public async sayHello(): Promise<string> {
        return Promise.resolve("Hello from backend service!");
    }
}