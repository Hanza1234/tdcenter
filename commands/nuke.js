const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('nuke', [], (_, message) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous devez avoir la permission \`MANAGE_CHANNELS\` pour récréer des salons ${message.author}.`))
    const channel = message.mentions.channels.first() || message.channel
    channel.clone().then(c => {
        c.edit({ position: channel.position })
        channel.delete()
        c.send(new discord.MessageEmbed()
            .setTitle('__**💻・The Dev Center**__')
            .setColor('#00ff00')
            .setDescription(`Le salon a été recréé par ${message.author}.`)
            .setFooter('Ce message sera supprimé dans 3 secondes')).then(message => message.delete({ timeout: 3000 }))
    })
}, false, false, { description: 'Recréé un salon.', syntax: '`[salon]`' });