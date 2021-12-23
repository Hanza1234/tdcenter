const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('ban', [], (_, message) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous devez avoir la permission \`BAN_MEMBERS\` pour ban des membres ${message.author}.`))
    const member = message.mentions.members.first()
    if (!member) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci de mentionner un membre ${message.author}.`))
    if (member.id === message.author.id) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas vous ban vous même ${message.author}.`))
    if (member.id === message.guild.ownerID) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas ban le propriétaire du serveur ${message.author}.`))
    if (member.hasPermission('ADMINISTRATOR')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas ban un administrateur ${message.author}.`))
    if (member.roles.cache.has('858653929805185074')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas ban un membre du staff ${message.author}.`))
    const reason = message.args.slice(1).join(' ') || 'Aucune raison spécifiée'
    member.ban({ reason: reason })
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .addFields({
            name: 'Membre :',
            value: member.user.tag,
            inline: true
        }, {
            name: 'Raison :',
            value: reason,
            inline: true
        }, {
            name: 'Modérateur :',
            value: message.author,
            inline: true
        }))
}, false, false, { description: 'Ban un membre du serveur.', syntax: '`<membre> [raison]`' });