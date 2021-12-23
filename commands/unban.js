const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('unban', [], async (_, message) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous devez avoir la permission \`BAN_MEMBERS\` pour unban des membres ${message.author}.`))
    const member = message.args[0]
    if (!member) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci d'entrer une ID ${message.author}.`))
    if (!(await message.guild.fetchBans()).has(member)) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`L'ID ${member} n'est pas ban ${message.author}.`))
    message.guild.members.unban(member)
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .addFields({
            name: 'ID :',
            value: member,
            inline: true
        }, {
            name: 'Modérateur :',
            value: message.author,
            inline: true
        }))
}, false, false, { description: 'Retire le bannissement d\'un membre.', syntax: '`<membre>`' });