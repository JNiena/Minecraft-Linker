import {Listener} from "discord-akairo";
import {GuildMember} from "discord.js";
import {Config} from "../Config";
import {DiscordBot} from "../DiscordBot";
import {DiscordUtil} from "../DiscordUtil";

export class MemberLeaveListener extends Listener {

	private ID: string;
	private config: Config;
	private discordBot: DiscordBot;

	public constructor(config: Config, discordBot: DiscordBot) {
		super("guildMemberRemove", {
			"emitter": "client",
			"event": "guildMemberRemove"
		});
		this.ID = config.get()["discord"]["channelID"];
		this.config = config;
		this.discordBot = discordBot;
	}

	public exec(member: GuildMember): any {
		this.discordBot.send(`**${DiscordUtil.getName(member)} (IGN: ${this.config.get()["links"][member.id]}) has left the guild.**`, this.ID).then();
	}

}