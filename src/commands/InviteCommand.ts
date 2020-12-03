import { BaseCommand } from "../structures/BaseCommand";
import { IMessage } from "../../typings";
import { DefineCommand } from "../utils/decorators/DefineCommand";
import { createEmbed } from "../utils/createEmbed";
import { disableInviteCmd } from "../config";

@DefineCommand({
    name: "invite",
    description: "Get the bot's invite link",
    usage: "{prefix}invite",
    disable: disableInviteCmd
})
export class InviteCommand extends BaseCommand {
    public async execute(message: IMessage): Promise<void> {
        message.channel.send("https://discord.gg/zA3wvrv copy link ini untuk invite teman kamu ke Discord PORORO LAND");
    }
}
