/**
 * Generated using theia-extension-generator
 */

import { TheiaServicesTestCommandContribution, TheiaServicesTestMenuContribution } from './theia-services-test-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";
import { WebSocketConnectionProvider } from '@theia/core/lib/browser';
import { ServerPath, BackendServer } from '../common/server-protocol';
import { DefaultServer } from '../node/default-server';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(TheiaServicesTestCommandContribution);
    bind(MenuContribution).to(TheiaServicesTestMenuContribution);

    bind(BackendServer).toDynamicValue(ctx => {
        const provider = ctx.container.get(WebSocketConnectionProvider);
        return provider.createProxy<DefaultServer>(ServerPath);
    }).inSingletonScope();
    
});