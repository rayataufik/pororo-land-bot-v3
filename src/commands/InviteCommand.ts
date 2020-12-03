import { BaseCommand } from "../structures/BaseCommand";
import { IMessage } from "../../typings";
import { DefineCommand } from "../utils/decorators/DefineCommand";
import { disableInviteCmd } from "../config";

@DefineCommand({
    name: "invite",
    description: "Get the invite link",
    usage: "{prefix}invite",
    disable: disableInviteCmd
})
export class InviteCommand extends BaseCommand {
    public async execute(message: IMessage): Promise<void> {
        message.channel.send(`${message.author.tag}, https://discord.gg/zA3wvrv copy link ini untuk invite teman kamu ke Discord PORORO LAND`);
    }
}
