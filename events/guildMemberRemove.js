const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Event('guildMemberRemove', (_, [member]) => {
    member.guild.channels.cache.get('922416100082327572').send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`${member} a quitté le serveur.`))
});