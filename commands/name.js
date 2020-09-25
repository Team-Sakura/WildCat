const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.guild.me.permissions.has('MANAGE_GUILD')) return message.channel.send('У меня недостаточно прав!');
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('У вас недостаточно прав!')
    if(!args[0]) return message.channel.send('Укажите новое название').then(m => m.delete(5000));
    await message.guild.setName(args.slice(0).join(" ")), message.channel.send(`Успешно переименовано на ${args.slice(0).join(" ")}`);
}

module.exports.help = {
    name: 'name',
    aliases: ['изменитьимя'],
    description: 'Изменить название сервера',
    category: 'Утилиты',
    usages: {'!name Test': 'Изменит имя сервера на Test' }
};