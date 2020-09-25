const Discord = require("discord.js");

  module.exports.run = async (bot, message, args) => {
    try {
  if(!args[0]) return message.channel.send("Укажите имя аккаунта!"); require("node-fetch") (`https://api.github.com/users/${args[0]}`).then(res => res.json()).then(json => {
  if(!json.login) return message.reply("Такого аккаунта не существует!")  
  let embed = new Discord.MessageEmbed()
  embed.setColor("#808080") 
  embed.setAuthor(args[0], json.avatar_url, json.html_url)
  embed.setDescription(`Имя: ${json.name ? json.name : "Не найдено."} | ${json.company ? json.company : "Компании нет."}\nБиография: ${json.bio ? json.bio : "Нет."}`)
  embed.addField('Статистика:', `Кол-во открытых репозиторий: ${json.public_repos} | Гистов: ${json.public_gists}\nПодписок: ${json.following} | Подписчиков: ${json.followers}`)
  if(json.blog){ embed.addField('_ _', `[Блог](${json.blog}) | [Ссылка на профиль](${json.html_url})`)}
  message.channel.send(embed)
  })   
 } catch (err) {
   console.log(err);
 }
}

module.exports.help = {
    name: 'github',
    aliases: ['гитхаб'],
    description: 'Информация о пользователе на гитхабе',
    usages: { '!github Chlen': `Найдёт профиль Chlen на гитхабе, или не найдёт` },
    category: 'Информация'
}