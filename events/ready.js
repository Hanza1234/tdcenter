const discordBetter = require('discord.js-better');

module.exports = new discordBetter.Event('ready', async client => {
    console.log(`Connected to ${client.user.tag}\nDev by >$Prototype 々#6517`)
    client.user.setActivity(`${client.config.prefix}help`, { type: 'STREAMING', url: 'https://twitch.tv/tdc' })
    const guild = client.guilds.cache.get('858089716883390475')
});