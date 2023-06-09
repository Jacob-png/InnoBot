const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('serverinfo')
  .setDescription('Shows the info of the server'),
  async execute (interaction) {

    const { guild } = interaction;
    const { members } = guild;
    const { name, ownerId, createdTimestamp, memberCount } = guild;
    const icon = guild.iconURL() || 'https://media.discordapp.net/attachments/1081584965185175693/1087877658030919740/I.png?width=427&height=427';
    const roles = guild.roles.cache.size;
    const emojis = guild.emojis.cache.size;
    const id = guild.id;

    let baseVerification = guild.verificationLevel;

    if (baseVerification == 0) baseVerification = "None"
    if (baseVerification == 1) baseVerification = "Low"
    if (baseVerification == 2) baseVerification = "Medium"
    if (baseVerification == 3) baseVerification = "High"
    if (baseVerification == 4) baseVerification = "Very High"

    const embed = new EmbedBuilder()
    .setColor("Green")
    .setThumbnail(icon)
    .setAuthor({ name: name, iconURL: icon})
    .setFooter({ text: `Server ID ${id}` })
    .setTimestamp()
    .addFields({ name: "Name", value: `${name}`})
    .addFields({ name: "Date Created", value: `<t:${parseInt(createdTimestamp / 1000)}:R> (hover for complete date)`, inline: true })
    .addFields({ name: "Server Owner", value: `<@${ownerId}>`, inline: true})
    .addFields({ name: "Members", value: `${memberCount}`, inline: true})
    .addFields({ name: "Role Number", value: `${roles}`, inline: true})
    .addFields({ name: "Emoji Number", value: `${emojis}`, inline: true})
    .addFields({ name: "Verification Level", value: `${baseVerification}`, inline: true})
    .addFields({ name: "Boosts", value: `${guild.premiumSubscriptionCount}`, inline: true})

    await interaction.reply({ embeds: [embed] });

  }

}