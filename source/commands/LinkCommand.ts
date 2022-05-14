import {Message} from "discord.js";
import {Command} from "discord-akairo";
import {Config} from "../Config";
import {DiscordUtil} from "../DiscordUtil";

export class LinkCommand extends Command {

	private config: Config;

	public constructor(config: Config) {
		super("link", {
			"aliases": ["link"],
			"args": [
				{
					"id": "member",
					"type": "member",
					"default": (message: { member: any; }) => message.member
				},
				{
					"id": "name",
					"type": "string"
				}
			]
		});
		this.config = config;
	}

	public exec(message: Message, args: any): any {
		this.config.get()["links"][args.member.id] = args.name;
		this.config.save();
		args.member.setNickname(args.name);
		message.channel.send(`**${DiscordUtil.getName(args.member)}'s in-game name has been set to ${args.name}**`).then();
	}

}