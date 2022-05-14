import {GuildMember} from "discord.js";

export class DiscordUtil {

	public static getName(member: GuildMember): string | null {
		return member.user.username ? member.user.username : member.nickname;
	}

}