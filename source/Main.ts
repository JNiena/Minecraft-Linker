import {Config} from "./Config";
import {DiscordBot} from "./DiscordBot";
import {MemberLeaveListener} from "./listeners/MemberLeaveListener";
import {GetCommand} from "./commands/GetCommand";
import {LinkCommand} from "./commands/LinkCommand";

let config: Config = new Config("config.json");
let discordBot: DiscordBot = new DiscordBot(config);
discordBot.registerListener(new MemberLeaveListener(config, discordBot));
discordBot.registerCommand(new GetCommand(config));
discordBot.registerCommand(new LinkCommand(config));
discordBot.start();