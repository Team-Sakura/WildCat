const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    let images = [
        // Да да, это не апи, но похуй если честно
        "https://images-ext-1.discordapp.net/external/6bOKB79c5hBSJGbrp1UUA6zUqTN8Re5Z1QPh77rKXsQ/https/cdn.nekos.life/hug/hug_066.gif",
        "https://images-ext-2.discordapp.net/external/4gzQ38rZIpb8IthU59xu98VjtvXc76_joYRZqDk1Y2w/https/cdn.nekos.life/hug/hug_014.gif",
        "https://images-ext-2.discordapp.net/external/AXLRWgTdaQX8zQCIbKFZElN3ngBWjw3adm7MWKTCjLI/https/cdn.nekos.life/hug/hug_055.gif",
        "https://images-ext-1.discordapp.net/external/dzcNNpXlnsdr6edlDeMgxmRg-SzouUSk3seKyVM9Nkw/https/cdn.nekos.life/hug/hug_062.gif",
        "https://images-ext-1.discordapp.net/external/pIxS8HiNUdBlMpFXOTDuaP_cPRBnQsxbjJ0cxXgz6Dw/https/cdn.nekos.life/hug/hug_033.gif",
    ];
    let randomImage = images[Math.floor(Math.random() * images.length)];
    let member = message.mentions.users.first();

    if (!member) return message.channel.send("Укажите, кого вы хотите обнять");

    if (member.id == message.member.id) return message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> вы можете обнять самого себя!`)
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
            .setDescription(`<@${message.author.id}> **обнял(а)** ${message.mentions.members.first().displayName}`)
            message.channel.send(embed)
}
module.exports.help = {
    name: 'hug',
    aliases: ['обять'],
    description: 'Обнять пользователя',
    usages: { '!hug @user#0001': 'Обнять пользователя' },
    category: "Реакции"
}; 