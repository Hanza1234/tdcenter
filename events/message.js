const discord = require('discord.js'),
    discordBetter = require('discord.js-better'),
    messagesSent = new Map();

setInterval(() => {
    messagesSent.forEach((messages, member) => {
        if (messages.length > 5) {
            messages.forEach(message => message.delete())
            messages[messages.length - 1].channel.send(new discord.MessageEmbed()
                .setTitle('__**💻・The Dev Center**__')
                .setColor('#ff0000')
                .setDescription(`Vous envoyez des messages trop rapidement ${member}.`))
        }
    })
    messagesSent.clear()
}, 5000)

module.exports = [
    new discordBetter.Event('message', (client, [message]) => {
        if (!message.member) return
        const users = client.dataManagers.get('users')
        if (!users.has(message.member.id)) users.set(message.member.id, { key: message.member.id, warns: [], messages: 0, level: 0, nextLevel: 100, hand: 0, bank: 0, cooldown: { work: Date.now(), slut: Date.now(), crime: Date.now() } })
        const user = users.get(message.member.id)
        user.messages++
        if (user.messages >= user.nextLevel) {
            user.nextLevel = user.nextLevel + 100
            user.level = user.level + 1
            message.channel.send(new discord.MessageEmbed()
                .setTitle('__**💻・The Dev Center**__')
                .setColor('#00ff00')
                .setDescription(`Vous êtes maintenant niveau ${user.level} ${message.author}.`))
            if (user.level >= 5 && !message.member.roles.has('858653940810514442')) {
                message.channel.send(new discord.MessageEmbed()
                    .setTitle('__**💻・The Dev Center**__')
                    .setColor('#00ff00')
                    .setDescription(`Vous obtenez le rôle <@&858653940810514442> grâce à votre activité sur le serveur ${message.author}.`))
            }
            if (user.level >= 10 && !message.member.roles.has('858653939964444692')) {
                message.channel.send(new discord.MessageEmbed()
                    .setTitle('__**💻・The Dev Center**__')
                    .setColor('#00ff00')
                    .setDescription(`Vous obtenez le rôle <@&858653939964444692> grâce à votre activité sur le serveur ${message.author}.`))
            }
            if (user.level >= 15 && !message.member.roles.has('858653939263733790')) {
                message.channel.send(new discord.MessageEmbed()
                    .setTitle('__**💻・The Dev Center**__')
                    .setColor('#00ff00')
                    .setDescription(`Vous obtenez le rôle <@&858653939263733790> grâce à votre activité sur le serveur ${message.author}.`))
            }
            if (user.level >= 20 && !message.member.roles.has('858653938316214352')) {
                message.channel.send(new discord.MessageEmbed()
                    .setTitle('__**💻・The Dev Center**__')
                    .setColor('#00ff00')
                    .setDescription(`Vous obtenez le rôle <@&858653938316214352> grâce à votre activité sur le serveur ${message.author}.`))
            }
        }
    }),
    new discordBetter.Event('message', (_, [message]) => {
        if (!message.member) return
        if ((message.content.includes('https://') || message.content.includes('http://')) & !message.member.hasPermission('ADMINISTRATOR')) {
            message.delete()
            message.channel.send(new discord.MessageEmbed()
                .setTitle('__**💻・The Dev Center**__')
                .setColor('#ff0000')
                .setDescription(`Vous n'avez pas la permission d'envoyer des liens ${message.author}.`))
        }
    }),
    new discordBetter.Event('message', (_, [message]) => {
        if (!message.member) return
        if (!messagesSent.has(message.member)) messagesSent.set(message.member, [message])
        else messagesSent.get(message.member).push(message)
    })
]