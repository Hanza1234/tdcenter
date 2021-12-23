const discord = require('discord.js'),
    discordBetter = require('discord.js-better'),
    index = require('../index');

module.exports = new discordBetter.Command('tempban', [], (_, message) => {
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
    const duration = discordBetter.DateUtils.parseTime(message.args[1])
    if (!duration) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci d'entrer une durée ${message.author}.`))
    const reason = message.args.slice(2).join(' ') || 'Aucune raison spécifiée'
    member.ban({ reason: reason })
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .addFields({
            name: 'Membre :',
            value: member.user.tag,
            inline: true
        }, {
            name: 'Durée :',
            value: index.humanizeMillisTime(duration),
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
    setTimeout(async () => {
        if (!(await message.guild.fetchBans()).has(member.id)) return
        message.guild.members.unban(member.id)
    }, duration)
}, false, false, { description: 'Ban un membre temporairement du serveur.', syntax: '`<membre> <durée> [raison]`' });