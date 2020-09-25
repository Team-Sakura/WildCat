const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    async function regionToString() {
      regions = {
          'russia': "🇷🇺 Россия",
          'europe': '🇪🇺 Европа',
          'brazil': '🇧🇷 Бразилия',
          'hongkong': '🇭🇰 Хонг Конг',
          'india': '🇮🇳 Индия',
          'japan': '🇯🇵 Япония',
          'singapore': '🇸🇬 Сигнапур',
          'southafrica': 'Западная африка',
          'sydney': 'Сидней',
          'us-central': 'США(центарльная)',
          'us-east': 'США(восточная)',
          'us-south': 'США(южная)',
          'us-west': 'США(западная)',
          'amsterdam': 'Амстердам',
          'london': 'Лондон',
          'frankfurt': 'Франкфурт',
          'dubai': 'Дубай'
      }

      return regions[message.guild.region]
  }
let region = await regionToString()
let afkChannel = 'Нету'
let systemChannel = 'Нету'
let serverembed = new Discord.MessageEmbed()
.setTitle(`Информация о сервере ${message.guild.name}`)
.setColor("RANDOM")
.setThumbnail(message.guild.iconURL())
.addField('Создатель', message.guild.owner.user.tag, true)
.addField(`Участников [${message.guild.memberCount}]`,`**<:online:709429347433447488> В сети:** ${message.guild.members.cache.filter(x=>x.user.presence.status === 'online').size} \n **<:idle:709429304441700403> Не активен:** ${message.guild.members.cache.filter(x=>x.user.presence.status === 'idle').size} \n **<:dnd:709429324553519265> Не беспокоить:** ${message.guild.members.cache.filter(x=>x.user.presence.status === 'dnd').size} \n **<:offline:709429385417195582> Не в сети:** ${message.guild.members.cache.filter(x=>x.user.presence.status === 'offline').size} \n **<:fdf:703991769691455569> Стримит:** ${message.guild.members.cache.filter( r => r.presence.game && r.presence.game.type === 1 ).size} \n **<:botTag:709428749300400171> Ботов:** ${message.guild.members.cache.filter(m => m.user.bot === true).size}`,true)
.addField(`Статистика`, `**Ролей:** ${message.guild.roles.cache.size} \n **Каналов:** ${message.guild.channels.cache.size} \n **Эмодзи:** ${message.guild.emojis.cache.size} \n **AFK Канал:** ${afkChannel} \n **System Канал:** ${systemChannel}`, true)
.addField("Дата создания", `${moment(message.guild.createdAt+10800000).format(`DD.MM.YYYY/HH:mm:ss`)}`, true)
.addField("Бусты сервера", `**Уровень** : ${message.guild.premiumTier} \n **Бустов** : ${message.guild.premiumSubscriptionCount}`)
.addField('Регион', `${region}`, true)
.setFooter(`ID : ${message.guild.id}`)

return message.channel.send(serverembed);
}

module.exports.help = {
  name: "server",
  aliases: ['сервер'],
  description: 'Информация о сервере',
  usages: { '!serverinfo': `Информация о деталях сервера` },
  category: 'Информация'
}