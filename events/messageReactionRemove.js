const discordBetter = require('discord.js-better');

module.exports = new discordBetter.Event('messageReactionRemove', (_, [messageReaction, user]) => {
    const member = messageReaction.message.guild.members.cache.get(user.id)
    if (messageReaction.message.id === '858660559845851136') {
        if (messageReaction.emoji.name === '🚹') member.roles.remove('858653945798328341')
        else if (messageReaction.emoji.name === '🚺') member.roles.remove('858653946515423233')
    }
    else if (messageReaction.message.id === '858660561788600340') {
        if (messageReaction.emoji.name === '🍺') member.roles.remove('858653947391639572')
        else if (messageReaction.emoji.name === '🔞') member.roles.remove('858653947668594689')
    }
    else if (messageReaction.message.id === '858660563817988096') {
        if (messageReaction.emoji.name === '🚬') member.roles.remove('858653948717563934')
        else if (messageReaction.emoji.name === '🚭') member.roles.remove('858653949557080064')
    }
    else if (messageReaction.message.id === '858660565794029578') {
        if (messageReaction.emoji.name === '💘') member.roles.remove('858653949942431765')
        else if (messageReaction.emoji.name === '💔') member.roles.remove('858653951205572618')
    }
})