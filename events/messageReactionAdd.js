const discord = require('discord.js'),
    discordBetter = require('discord.js-better'),
    tickets = [];

module.exports = [
    new discordBetter.Event('messageReactionAdd', (_, [messageReaction, user]) => {
        if (messageReaction.message.id === '858661263063515186' && messageReaction.emoji.id === '858641587718193152') messageReaction.message.guild.members.cache.get(user.id).roles.add(['858653945308250112', '858653944439242753', '858653941603368980', '858653937430298624', '858653934985543680'])
    }),
    new discordBetter.Event('messageReactionAdd', (_, [messageReaction, user]) => {
        const member = messageReaction.message.guild.members.cache.get(user.id)
        if (messageReaction.message.id === '858660559845851136') {
            if (messageReaction.emoji.name === '🚹') member.roles.add('858653945798328341')
            else if (messageReaction.emoji.name === '🚺') member.roles.add('858653946515423233')
        }
        else if (messageReaction.message.id === '858660561788600340') {
            if (messageReaction.emoji.name === '🍺') member.roles.add('858653947391639572')
            else if (messageReaction.emoji.name === '🔞') member.roles.add('858653947668594689')
        }
        else if (messageReaction.message.id === '858660563817988096') {
            if (messageReaction.emoji.name === '🚬') member.roles.add('858653948717563934')
            else if (messageReaction.emoji.name === '🚭') member.roles.add('858653949557080064')
        }
        else if (messageReaction.message.id === '858660565794029578') {
            if (messageReaction.emoji.name === '💘') member.roles.add('858653949942431765')
            else if (messageReaction.emoji.name === '💔') member.roles.add('858653951205572618')
        }
    }),
    new discordBetter.Event('messageReactionAdd', (_, [messageReaction, user]) => {
        if (messageReaction.message.id === '858717148108816455' && messageReaction.emoji.name === '🎟️') messageReaction.message.guild.channels.create(user.tag, {
            parent: '858653968161832990',
            permissionOverwrites: [{
                id: user.id,
                allow: 'VIEW_CHANNEL'
            }, {
                id: '858653944439242753',
                deny: 'VIEW_CHANNEL'
            }, {
                id: '858653929805185074',
                allow: 'VIEW_CHANNEL'
            }, {
                id: messageReaction.message.guild.id,
                deny: 'VIEW_CHANNEL'
            }]
        }).then(channel => channel.send(new discord.MessageEmbed()
            .setTitle('__**💻・The Dev Center**__')
            .setColor('#00ff00')
            .setDescription(`Bienvenue dans votre ticket ${user}.\nNous allons vous prendre en charge le plus vite possible.\nDécrivez-nous votre problème le plus en détails possible.`)).then(message => {
                message.react('🔒')
                tickets.push(message.id)
                messageReaction.users.remove(user)
            }))

    }),
    new discordBetter.Event('messageReactionAdd', (_, [messageReaction, user]) => {
        if (!user.bot && messageReaction.emoji.name === '🔒' && tickets.includes(messageReaction.message.id)) {
            messageReaction.message.channel.delete()
            tickets.forEach((ticket, index) => {
                if (ticket === messageReaction.message.id) tickets.splice(index, 1)
            })
        }
    })
]