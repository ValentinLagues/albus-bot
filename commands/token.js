const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("token")
    .setDescription("Renvoie le nombre de tokens"),
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    await interaction.reply("Vous possédez 1 millards d'Albus ! Alors ça!");

    const message = await interaction.fetchReply();

    return interaction.editReply(
      `Le message a mis ${
        message.createdTimestamp - interaction.createdTimestamp
      }ms.`
    );
  },
};
