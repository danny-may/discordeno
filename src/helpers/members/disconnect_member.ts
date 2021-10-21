import type {Bot} from "../../bot.ts";

/** Kicks a member from a voice channel */
export function disconnectMember(bot: Bot, guildId: bigint, memberId: bigint) {
  return bot.helpers.editMember(bot, guildId, memberId, { channelId: null });
}
