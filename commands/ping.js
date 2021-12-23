const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('ping', [], (_, message) => {
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ffa500')
        .setDescription(`Calcul de la latence ${message.author}...`)).then(m => {
            const ping = m.createdTimestamp - message.createdTimestamp
            m.edit(new discord.MessageEmbed()
                .setTitle('__**💻・The Dev Center**__')
                .setColor('#00ff00')
                .setDescription(`La latence actuelle est de ${ping} millisecondes ${message.author}.`))
        })
}, false, false, { description: 'Affiche la latence du bot.', syntax: 'Aucune' });