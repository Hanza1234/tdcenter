const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Event('guildMemberAdd', (_, [member]) => {
    member.guild.channels.cache.get('922416100082327572').send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .setDescription(`${member} a rejoint le serveur.`))
});