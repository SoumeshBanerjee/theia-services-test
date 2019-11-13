import { ContainerModule } from 'inversify';
import { ConnectionHandler, JsonRpcConnectionHandler } from '@theia/core/lib/common';
import { BackendServer, ServerPath } from '../common/server-protocol';
import { DefaultServer } from './default-server';

export default new ContainerModule(bind => {
    bind(DefaultServer).toSelf().inSingletonScope();
    bind(BackendServer).toService(DefaultServer);
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler(ServerPath, () => {
            ctx.container.get(DefaultServer);
        })
    ).inSingletonScope()
});