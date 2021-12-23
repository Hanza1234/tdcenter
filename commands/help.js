const discord = require('discord.js'),
    discordBetter = require('discord.js-better');

module.exports = new discordBetter.Command('help', [], (client, message) => {
    let command = message.args[0]
    const commands = client.commandManager.commands
    if (command) {
        if (!commands.has(command)) return message.channel.send(new discord.MessageEmbed()
            .setTitle('__**💻・The Dev Center**__')
            .setColor('#ff0000')
            .setDescription(`Cette commande n'existe pas ${message.author}.`))
        command = commands.get(command)
        message.channel.send(new discord.MessageEmbed()
            .setTitle('__**💻・The Dev Center**__')
            .setColor('#0ff00')
            .addFields({
                name: 'Commande :',
                value: command.name,
                inline: true
            }, {
                name: 'Description :',
                value: command.customProperties.description,
                inline: true
            }, {
                name: 'Syntaxe :',
                value: command.customProperties.syntax,
                inline: true
            }, {
                name: 'Alias :',
                value: command.alias || 'Pas d\'alias',
                inline: true
            }))
    }
    else {
        const embed = new discord.MessageEmbed()
            .setTitle('__**💻・The Dev Center**__')
            .setColor('#00ff00')
            .setDescription(`Tapez \`${client.config.prefix}help <commande>\` pour plus d'informations.`)
        commands.forEach(command => embed.addField(command.name, command.customProperties.description, true))
        message.channel.send(embed)
    }
}, false, false, { description: 'Affiche la liste des commandes.', syntax: '`[commande]`' });