/*
import {Listener} from "discord-akairo";
import {GuildMember} from "discord.js";
import {Config} from "../Config";
import {DiscordBot} from "../DiscordBot";

export class MemberUpdateListener extends Listener {

	private ID: string;
	private config: Config;
	private discordBot: DiscordBot;

	public constructor(config: Config, discordBot: DiscordBot) {
		super("guildMemberUpdate", {
			"emitter": "client",
			"event": "guildMemberUpdate"
		});
		this.ID = config.get()["discord"]["channelID"];
		this.config = config;
		this.discordBot = discordBot;
	}

	public exec(oldMember: GuildMember, newMember: GuildMember): any {
		if (oldMember.nickname === newMember.nickname) return;
		this.config.get()["links"][newMember.id] = newMember.nickname;
		this.config.save();
	}

}
*/