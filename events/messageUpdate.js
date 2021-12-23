const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Event('messageUpdate', (_, [__, newMessage]) => {
    if (!newMessage.member) return
    if ((newMessage.content.includes('https://') || newMessage.content.includes('http://')) && !newMessage.member.hasPermission('ADMINISTRATOR')) {
        newMessage.delete()
        newMessage.channel.send(new discord.MessageEmbed()
            .setTitle('__**💻・The Dev Center**__')
            .setColor('#ff0000')
            .setDescription(`Vous n'avez pas la permission d'envoyer des liens ${newMessage.author}.`))
    }
});