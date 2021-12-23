const discordBetter = require('discord.js-better');

module.exports = new discordBetter.Event('presenceUpdate', (_, [__, newPresence]) => {
    newPresence.activities.forEach(activity => {
        if (activity.type === 'CUSTOM_STATUS' && activity.state.includes('discord.gg/tdc') && !newPresence.member.roles.cache.has('858653936265461792')) newPresence.member.roles.add('858653936265461792')
        else if ((activity !== 'CUSTOM_STATUS' || !activity.state || !activity.state.includes('discord.gg/tdc')) && newPresence.member.roles.cache.has('858653936265461792')) newPresence.member.roles.remove('858653936265461792')
    })
});