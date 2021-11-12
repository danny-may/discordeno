import { User } from "../users/user.ts";

/** https://discord.com/developers/docs/resources/guild#guild-member-object */
export interface GuildMember {
  /** The user this guild member represents */
  user?: User;
  /** This users guild nickname */
  nick?: string | null;
  /** Array of role object ids */
  roles: string[];
  /** When the user joined the guild */
  joinedAt: string;
  /** When the user started boosing the guild */
  premiumSince?: string | null;
  /** Whether the user is deafened in voice channels */
  deaf?: boolean;
  /** Whether the user is muted in voice channels */
  mute?: boolean;
  /** Whether the user has not yet passed the guild's Membership Screening requirements */
  pending?: boolean;
  /** The members custom avatar for this server. */
  avatar?: string;
  /** The permissions this member has in the guild. Only present on interaction events. */
  permissions?: string;
}

// We use these types much since user always exists unless its a `CREATE_MESSAGE` or `MESSAGE_UPDATE` event

/** https://discord.com/developers/docs/resources/guild#guild-member-object */
export type GuildMemberWithUser = Omit<GuildMember, "user"> & { user: User };
