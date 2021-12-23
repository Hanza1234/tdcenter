const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('server-info', ['si'], (_, message) => {
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addFields({
            name: 'Nom :',
            value: message.guild.name,
            inline: true
        }, {
            name: 'ID :',
            value: message.guild.id,
            inline: true
        }, {
            name: 'Propriétaire :',
            value: message.guild.owner,
            inline: true
        }, {
            name: 'Région :',
            value: message.guild.region,
            inline: true
        }, {
            name: 'Niveau de modération :',
            value: message.guild.verificationLevel,
            inline: true
        }, {
            name: 'Salons :',
            value: message.guild.channels.cache.size,
            inline: true
        }, {
            name: 'Rôles :',
            value: message.guild.roles.cache.size,
            inline: true
        }, {
            name: 'Membres :',
            value: message.guild.memberCount,
            inline: true
        }, {
            name: 'En ligne :',
            value: message.guild.members.cache.filter(member => member.presence.status === 'online').size,
            inline: true
        }, {
            name: 'Inactif :',
            value: message.guild.members.cache.filter(member => member.presence.status === 'idle').size,
            inline: true
        }, {
            name: 'Ne pas déranger :',
            value: message.guild.members.cache.filter(member => member.presence.status === 'dnd').size,
            inline: true
        }, {
            name: 'Hors ligne :',
            value: message.guild.members.cache.filter(member => member.presence.status === 'offline').size,
            inline: true
        }, {
            name: 'Salon Afk :',
            value: message.guild.afkChannel || 'Pas de salon Afk',
            inline: true
        }, {
            name: 'Temps Afk :',
            value: `${message.guild.afkTimeout / 60} minute(s)`,
            inline: true
        }, {
            name: 'Serveur créé :',
            value: discordBetter.DateUtils.humanizeDate(message.guild.createdAt, 'Le %d/%mo/%y à %h:%m:%s'),
            inline: true
        }))
}, false, false, { description: 'Affiche les informations du serveur', syntax: 'Aucune' });