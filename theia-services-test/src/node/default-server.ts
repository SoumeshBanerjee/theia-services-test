import { injectable } from 'inversify';
import { BackendServer } from "../common/server-protocol";

@injectable()
export class DefaultServer implements BackendServer {
    public sayHello(): string {
        return "hello service";
    }
}