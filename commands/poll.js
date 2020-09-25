const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Недостаточно прав!");
    if (!args[0]) return message.channel.send("Укажите тему голосования!");
  let question = args.slice(0).join(" ");
  const embed = new Discord.MessageEmbed()
    embed.setTitle(`Голосование`)
    embed.setColor("RANDOM")
    embed.setDescription(`Тема: **${question}**`)
  message.delete();
  message.channel.send({ embed })
    .then(msg => {
      msg.react('👍')
      msg.react('👎')
    })
    .catch(() => console.error('Не удалось поставить реакции!'));
}
module.exports.help = {
    name: "poll",
    aliases: ['голосование'],
    description: 'Создать голосование',
    category: 'Утилиты',
    usages: {'!poll кого банить?': 'Создаётся голосование с темой, кого банить?' }
}
