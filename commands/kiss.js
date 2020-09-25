const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    // Да да, это не апи, но похуй если честно
    let images = [
        "https://cdn.nekos.life/kiss/kiss_085.gif",
        "https://cdn.nekos.life/kiss/kiss_071.gif",
        "https://cdn.nekos.life/kiss/kiss_091.gif",
        "https://cdn.nekos.life/kiss/kiss_104.gif",
        "https://cdn.nekos.life/kiss/kiss_133.gif",
    ];
    let randomImage = images[Math.floor(Math.random() * images.length)];
    let member = message.mentions.users.first();

    if (!member) return message.channel.send("Укажите, кого вы хотите поцеловать");

    if (member.id == message.member.id) return message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> вы можете поцеловать самого себя!`)
        .setColor("RANDOM")
        .setImage("https://www.ivi.ru/titr/uploads/2016/04/07/b913e7e7de7f020975dd8889d542981e.gif")
    );

    if(message.mentions.users.first().bot) {
        const boti = new Discord.MessageEmbed()
        .setTitle("Боты не люди!")
        .setColor("RANDOM")
        .setImage("https://cdn.discordapp.com/attachments/706355779371794533/734293403965325452/IMG_20200718_213209.png")
        return message.channel.send(boti)
      };

    const embed = new Discord.MessageEmbed()
            .setColor("#2f3136")
            .setImage(randomImage)
            .setDescription(`<@${message.author.id}> **поцеловал(а)** ${message.mentions.members.first().displayName}`)
            message.channel.send(embed)
}
module.exports.help = {
    name: 'kiss',
    aliases: ['поцеловать'],
    description: 'Поцеловать пользователя',
    usages: { '!kiss @user#0001': 'поцелуете пользователя' },
    category: "Реакции"
}; 