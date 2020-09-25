const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    // Да да, это не апи, но похуй если честно
    let images = [
        "https://cdn.nekos.life/slap/slap_006.gif",
        "https://cdn.nekos.life/slap/slap_016.gif",
        "https://cdn.nekos.life/slap/slap_005.gif",
        "https://cdn.nekos.life/slap/slap_012.gif",
        "https://cdn.nekos.life/slap/slap_008.gif",
    ];
    let randomImage = images[Math.floor(Math.random() * images.length)];
    let member = message.mentions.users.first();

    if (!member) return message.channel.send("Укажите, кого вы хотите ударить");

    if (member.id == message.member.id) return message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> вы не можете ударить самого себя!`)
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
            .setDescription(`<@${message.author.id}> **ударил(а)** ${message.mentions.members.first().displayName}`)
            message.channel.send(embed)
}


module.exports.help = {
    name: 'slap',
    aliases: ['ударить','шлёпнуть'],
    description: 'Ударить пользователя',
    usages: { '!slap @user#0001': 'Ударить пользователя' },
    category: "Реакции"
}; 