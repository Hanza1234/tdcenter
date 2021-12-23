const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('mute', [], (_, message) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous devez avoir la permission \`MANAGE_MESSAGES\` pour mute des membres ${message.author}.`))
    const member = message.mentions.members.first()
    if (!member) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci de mentionner un membre ${message.author}.`))
    if (member.id === message.author.id) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas vous mute vous même ${message.author}.`))
    if (member.id === message.guild.ownerID) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas mute le propriétaire du serveur ${message.author}.`))
    if (member.hasPermission('ADMINISTRATOR')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas mute un administrateur ${message.author}.`))
    if (member.roles.cache.has('858653929805185074')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas mute un membre du staff ${message.author}.`))
    if (member.roles.cache.has('858653942283894832')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`${member} est déjà mute ${message.author}.`))
    member.roles.add('858653942283894832')
    const reason = message.args.slice(1).join(' ') || 'Aucune raison spécifiée'
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .addFields({
            name: 'Membre :',
            value: member,
            inline: true
        }, {
            name: 'Raison :',
            value: reason,
            inline: true
        }, {
            name: 'Modérateur :',
            value: message.author,
            inline: true
        }))
}, false, false, { description: 'Réduit un membre au silence.', syntax: '`<membre> [raison]`' });