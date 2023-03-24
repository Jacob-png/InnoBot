const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('Test if the bot is working!'),
    async execute(interaction, client) {
        await interaction.reply({ content: 'The bot is working!' });
    }
}