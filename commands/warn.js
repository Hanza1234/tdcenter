const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('warn', [], (client, message) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous devez avoir la permission \`MANAGE_MESSAGES\` pour warn des membres ${message.author}.`))
    const member = message.mentions.members.first()
    if (!member) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci de mentionner un membre ${message.author}.`))
    if (member.id === message.author.id) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas vous warn vous même ${message.author}.`))
    if (member.id === message.guild.ownerID) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas warn le propriétaire du serveur ${message.author}.`))
    if (member.hasPermission('ADMINISTRATOR')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas warn un administrateur ${message.author}.`))
    if (member.roles.cache.has('858653929805185074')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous ne pouvez pas warn un membre du staff ${message.author}.`))
    const reason = message.args.slice(1).join(' ')
    if (!reason) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci d'entrer une raison ${message.author}.`))
    const users = client.dataManagers.get('users')
    if (!users.has(member.id)) users.set(message.member.id, { key: message.member.id, warns: [], messages: 0, level: 0, nextLevel: 100, hand: 0, bank: 0, cooldown: { work: Date.now(), slut: Date.now(), crime: Date.now() } })
    users.get(member.id).warns.push({ mod: message.member.id, reason: reason, date: Date.now() })
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
            value: message.member,
            inline: true
        }))
}, false, false, { description: 'Avertit un membre.', syntax: '`<membre> <raison>`' });