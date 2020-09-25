module.exports.run = async (bot, message, args) => {

    const PING = await message.channel.send("Хочешь увидеть пинг?");
    PING.edit(`Pong! ${PING.createdTimestamp - message.createdTimestamp}ms`);

}

module.exports.help = {
    name: 'ping',
    aliases: ['пинг'],
    description: 'Пинг бота',
    usages: { '!ping': `Сколько пинг, столько и задержка` },
    category: 'Информация'
}