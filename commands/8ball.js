const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if (!args[0]) return message.reply("А где вопрос?");
    let replies = ["Да", "Нет", "Ну, не знаю", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    if(!question.includes('?')) return message.reply('Не вижу вопроса')

    if(question === "У меня есть смысл жить?") replies[result] = 'Нет, умри нахуй'
    if(question === "Где смотреть аниме?") replies[result] = 'У себя в штанах'
    if(question === "8ball") replies[result] = 'Что ты хочешь?'
    if(question === "Когда будет война?") replies[result] = 'В 2020 году'
    if(question === "Из-за чего пиздец?") replies[result] = 'Из-за америки'

    let aye = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("RANDOM")
        .addField("Вопрос:", question)
        .addField("Ответ:", replies[result])
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/e/eb/Magic_eight_ball.png");

    message.channel.send(aye);
}
module.exports.help = {
    name: '8ball',
    aliases: ['шар', '8', 'магия'],
    description: 'Волшебный шар',
    usages: { '!8ball Когда пиздец?': `Бот вам расскажет всю правду` },
    category: 'Развлечения'
}; 