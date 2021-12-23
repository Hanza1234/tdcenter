const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('clear', [], async (_, message) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Vous devez avoir la permission \`MANAGE_MESSAGES\` pour supprimer des messages ${message.author}.`))
    let messages = message.args[0]
    if (!messages) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci d'entrer un nombre ${message.author}.`))
    if (isNaN(messages)) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci d'entrer un nombre valide ${message.author}.`))
    messages = Number(messages)
    messages = Math.floor(messages)
    if (messages < 1 || messages > 99) return message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#ff0000')
        .setDescription(`Merci d'entrer un nombre entre 1 et 99 ${message.author}.`))
    let { size } = await message.channel.bulkDelete(messages + 1)
    size--
    message.channel.send(new discord.MessageEmbed()
        .setTitle('__**💻・The Dev Center**__')
        .setColor('#00ff00')
        .setDescription(`${message.author} a supprimé ${size} message(s).`)
        .setFooter('Ce message sera supprimé dans 3 secondes.')).then(message => message.delete({ timeout: 3000 }))
}, false, false, { description: 'Supprime un nombre de messages donné.', syntax: '`<messages>`' });