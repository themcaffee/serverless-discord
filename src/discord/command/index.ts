import { DiscordChannelTypes } from "../channel";
import { DiscordLocalesDictionary } from "../locales";
import { DiscordBitwisePermissionFlags } from "../permissions";

/**
 * https://discord.com/developers/docs/interactions/slash-commands#applicationcommand
 */
export abstract class DiscordCommand {
    id: string;
    type: DiscordCommandTypes | DiscordCommandTypes.CHAT_INPUT;
    application_id: string;
    guild_id?: string;
    name: string;
    name_localizations?: DiscordLocalesDictionary<string>;
    description: string;
    description_localizations?: DiscordLocalesDictionary<string>;
    options?: DiscordCommandOption[];
    default_member_permissions?: DiscordBitwisePermissionFlags;
    dm_permission?: boolean;
    default_permission?: boolean;
    nsfw?: boolean;
    version: string;

    constructor({ id, type, application_id, guild_id, name, name_localizations, description, description_localizations, options, default_member_permissions, dm_permission, default_permission, nsfw, version }: DiscordCommand) {
        this.id = id;
        this.type = type;
        this.application_id = application_id;
        this.guild_id = guild_id;
        this.name = name;
        this.name_localizations = name_localizations;
        this.description = description;
        this.description_localizations = description_localizations;
        this.options = options;
        this.default_member_permissions = default_member_permissions;
        this.dm_permission = dm_permission;
        this.default_permission = default_permission;
        this.nsfw = nsfw;
        this.version = version;
    }
}

export class DiscordCommandChatInput extends DiscordCommand {
    type: DiscordCommandTypes.CHAT_INPUT;
    options: DiscordCommandOption[];

    constructor(args: DiscordCommandChatInput) {
        super(args);
        this.type = args.type;
        this.options = args.options;
    }
}

export class DiscordCommandUser extends DiscordCommand {
    type: DiscordCommandTypes.USER;

    constructor(args: DiscordCommandUser) {
        super(args);
        this.type = args.type;
    }
}

export class DiscordCommandMessage extends DiscordCommand {
    type: DiscordCommandTypes.MESSAGE;

    constructor(args: DiscordCommandMessage) {
        super(args);
        this.type = args.type;
    }
}

export enum DiscordCommandTypes {
    CHAT_INPUT = 1, // Slash command
    USER = 2, // User context menu
    MESSAGE = 3, // Message context menu
}

export type DiscordCommandOption = {
    type: DiscordCommandOptionTypes;
    name: string;
    name_localizations?: DiscordLocalesDictionary<string>;
    description: string;
    description_localizations?: DiscordLocalesDictionary<string>;
    required?: boolean;
    choices?: DiscordCommandOptionChoice[];
    options?: DiscordCommandOption[];
    channel_types?: DiscordChannelTypes[];
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
}

export enum DiscordCommandOptionTypes {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8,
    MENTIONABLE = 9,
    NUMBER = 10,
    ATTACHMENT = 11,
}

export type DiscordCommandOptionChoice = {
    name: string;
    name_localizations?: DiscordLocalesDictionary<string>;
    value: string | number;
}

export type GuildApplicationCommandPermissions = {
    id: string;
    application_id: string;
    guild_id: string;
    permissions: ApplicationCommandPermission[];
}

export type ApplicationCommandPermission = {
    id: string;
    type: ApplicationCommandPermissionType;
    permission: boolean;
}

export enum ApplicationCommandPermissionType {
    ROLE = 1,
    USER = 2,
    CHANNEL = 3,
}