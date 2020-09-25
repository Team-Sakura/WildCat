module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("У вас недостаточно прав!");
    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.channel.send('У меня недостаточно прав!');
    if(!args[0]) return message.reply("Укажите количество сообщений!");
    if(parseInt(args[0]) > 99) return message.reply("Укажите число меньше 99!");

    message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
        message.channel.send(`Я успешно очистил ${args[0]} сообщений!`);
    }).catch((err) => {
        return message.reply("О нет, произошла неизвестная мне ошибка!");
    })

}

module.exports.help = {
    name: 'clear',
    aliases: ['очистить'],
    description: 'Очистить сообщения',
    category: 'Утилиты',
    usages: {'!clear 5': 'Очистит 5 сообщений' }
}