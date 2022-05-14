import {Message} from "discord.js";
import {Command} from "discord-akairo";
import {Config} from "../Config";
import {DiscordUtil} from "../DiscordUtil";

export class GetCommand extends Command {

	private config: Config;

	public constructor(config: Config) {
		super("get", {
			"aliases": ["get", "ign"],
			"args": [
				{
					"id": "member",
					"type": "member",
					"default": (message: { member: any; }) => message.member
				}
			]
		});
		this.config = config;
	}

	public exec(message: Message, args: any): any {
		message.channel.send(`**${DiscordUtil.getName(args.member)}'s in-game name is ${this.config.get()["links"][args.member.id]}.**`).then();
	}

}