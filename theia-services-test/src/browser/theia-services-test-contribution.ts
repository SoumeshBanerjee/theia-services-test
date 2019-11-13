import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
import { BackendServer } from "../common/server-protocol";

export const TheiaServicesTestCommand = {
    id: 'TheiaServicesTest.command',
    label: "Shows a message"
};

@injectable()
export class TheiaServicesTestCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(BackendServer) private readonly server: BackendServer,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(TheiaServicesTestCommand, {
            execute: () => {
                this.messageService.info('Hello World!')
                console.log(this.server.sayHello());
            }
        });
    }
}

@injectable()
export class TheiaServicesTestMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: TheiaServicesTestCommand.id,
            label: 'Say Hello'
        });
    }
}