const { reactionRoleHandler } = require("@source/handlers");

/**
 * @param {import('@source/structures').BotClient} client
 * @param {import('discord.js').MessageReaction|import('discord.js').PartialMessageReaction} reaction
 * @param {import('discord.js').User} user
 */
module.exports = async (client, reaction, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (ex) {
      return; // Possibly deleted
    }
  }

  await reactionRoleHandler.handleReactionRemove(reaction, user);
};
