const discord = require('discord.js'),
    discordBetter = require('discord.js-better'),
    client = new discordBetter.Bot({
        ownersId: ['722406820278435850', '856120993562361877'],
        prefix: '+',
        clientConfig: {
            fetchAllMembers: true,
            partials: Object.values(discord.Constants.PartialTypes)
        },
        commandDir: [__dirname + '/commands/'],
        eventDir: [__dirname + '/events/']
    });

client.dataManagers.set('users', new discordBetter.DataManager('users'))

module.exports.humanizeMillisTime = function humanizeMillisTime(millis) {
    var days = Math.floor(millis / (24 * 60 * 60 * 1000));
    millis -= days * (24 * 60 * 60 * 1000);
    var hours = Math.floor(millis / (60 * 60 * 1000));
    millis -= hours * (60 * 60 * 1000);
    var minutes = Math.floor(millis / (60 * 1000));
    millis -= minutes * (60 * 1000);
    var seconds = Math.floor(millis / 1000);
    millis -= seconds * 1000;
    return (days > 0 ? `${days} jour` + (days > 1 ? 's' : '') : '') + ' ' + (hours > 0 ? `${hours} heure` + (hours > 1 ? 's' : '') : '') + ' ' + (minutes > 0 ? `${minutes} minute` + (minutes > 1 ? 's' : '') : '') + ' ' + (seconds > 0 ? `${seconds} seconde` + (seconds > 1 ? 's' : '') : '');
}
module.exports.users = undefined

client.login('OTIyNDEyOTQwNzU2MzkzOTg0.YcBF_g.XqmpkXNIkF9q7-9BacBaXV2L6sc');