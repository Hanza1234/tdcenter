const discord = require('discord.js'),
    discordBetter = require('discord.js-better'),
    index = require('../index');

module.exports = new discordBetter.Command('giveaway', ['gw'], (_, message) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous devez avoir la permission \`ADMINISTRATOR\` pour lancer des giveaways ${message.author}.`))
    const text = message.args.join(' ').split(' | '),
        price = text[0]
    if (!price) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci d'entrer un prix ${message.author}.`))
    const duration = discordBetter.DateUtils.parseTime(text[1])
    if (!duration) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci d'entrer une durée ${message.author}.`))
    const conditions = text[2] || 'Aucune conditions'
    message.delete()
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .addFields({
            name: 'Prix :',
            value: price,
            inline: true
        }, {
            name: 'Durée :',
            value: index.humanizeMillisTime(duration),
            inline: true
        }, {
            name: 'Condition(s) :',
            value: conditions,
            inline: true
        }, {
            name: 'Gagnant :',
            value: 'Inconnu',
            inline: true
        }, {
            name: 'Host :',
            value: message.author,
            inline: true
        })).then(message => {
            message.react('🎁')
            setTimeout(() => {
                index.users = message.reactions.cache.get('🎁').users.cache.filter(user => !user.bot)
                message.edit(new discord.MessageEmbed()
                    .setTitle('__**💻・The Dev Center**__')
                    .setColor('#00ff00')
                    .addFields({
                        name: 'Prix :',
                        value: price,
                        inline: true
                    }, {
                        name: 'Durée :',
                        value: index.humanizeMillisTime(duration),
                        inline: true
                    }, {
                        name: 'Condition(s) :',
                        value: conditions,
                        inline: true
                    }, {
                        name: 'Gagnant :',
                        value: index.users.random(),
                        inline: true
                    }, {
                        name: 'Host :',
                        value: message.author,
                        inline: true
                    }))
            }, duration)
        })
}, false, false, { description: 'Lance un giveaway.', syntax: '`<prix> <durée> [condition(s)]`' });