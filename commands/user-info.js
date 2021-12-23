const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('user-info', ['ui'], (_, message) => {
    const member = message.mentions.members.first() || message.member
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .addFields({
            name: 'Pseudo :',
            value: member.user.username,
            inline: true
        }, {
            name: 'Discriminator :',
            value: member.user.discriminator,
            inline: true
        }, {
            name: 'Tag :',
            value: member.user.tag,
            inline: true
        }, {
            name: 'Nickname :',
            value: member.nickname,
            inline: true
        }, {
            name: 'ID :',
            value: member.id,
            inline: true
        }, {
            name: 'Statut :',
            value: member.presence.status,
            inline: true
        }, {
            name: 'Salon vocal :',
            value: member.voice.channel || 'Pas en vocal',
            inline: true
        }, {
            name: 'Dernier message :',
            value: member.lastMessage || 'Pas de dernier message',
            inline: true
        }, {
            name: 'Bot :',
            value: member.user.bot,
            inline: true
        }, {
            name: 'Serveur rejoint :',
            value: discordBetter.DateUtils.humanizeDate(member.joinedAt, 'Le %d/%mo/%y à %h:%m:%s'),
            inline: true
        }, {
            name: 'Compte créé :',
            value: discordBetter.DateUtils.humanizeDate(member.user.createdAt, 'Le %d/%mo/%y à %h:%m:%s'),
            inline: true
        }))
}, false, false, { description: 'Affiche les informations d\'un membre.', syntax: '`[membre]`' });