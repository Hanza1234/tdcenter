const discord = require('discord.js'),
    discordBetter = require('discord.js-better'),
    index = require('../index');

module.exports = new discordBetter.Command('giveaway', ['gw'], (_, message) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous devez avoir la permission \`ADMINISTRATOR\` pour relancer des giveaways ${message.author}.`))
    if (!index.users) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Impossible de tracer le dernier giveaway ${message.author}.`))
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .setDescription(`Le nouveau gagnat du dernier giveaway est ${index.users.random()} ${message.author}.`))
}, false, false, { description: 'Relance un giveaway.', syntax: 'Aucune' });