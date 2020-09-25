const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    try {
        // Да да, это не апи, но похуй если честно
        var images = ["https://cdn.boob.bot/ass/4FFB.JPG","https://cdn.boob.bot/ass/4C77.JPG","https://cdn.boob.bot/ass/4E66.GIF","https://cdn.boob.bot/ass/4F56.JPG","https://cdn.boob.bot/ass/4FB0.JPG","https://cdn.boob.bot/ass/4EA2.JPG","https://cdn.boob.bot/ass/4F47.JPG","https://cdn.boob.bot/ass/4DA3.JPG","https://cdn.boob.bot/ass/5091.JPG","https://cdn.boob.bot/ass/4CDD.JPG","https://cdn.boob.bot/ass/4C86.JPG","https://cdn.boob.bot/ass/5136.JPG","https://cdn.boob.bot/ass/4F0B.JPG","https://cdn.boob.bot/ass/4DB2.GIF","https://cdn.boob.bot/ass/4CB3.JPG","https://cdn.boob.bot/ass/4C68.JPG","https://cdn.boob.bot/ass/4C95.JPG","https://cdn.boob.bot/ass/4F74.JPG","https://cdn.boob.bot/ass/4E57.JPG","https://cdn.boob.bot/ass/5109.JPG","https://cdn.boob.bot/ass/4DEE.JPG","https://cdn.boob.bot/ass/50FA.JPG","https://cdn.boob.bot/ass/5118.JPG","https://cdn.boob.bot/ass/4E75.JPG","https://cdn.boob.bot/ass/4DFD.JPG","https://cdn.boob.bot/ass/500A.JPG","https://cdn.boob.bot/ass/4EB1.JPG","https://cdn.boob.bot/ass/4CFB.JPG","https://cdn.boob.bot/ass/4CC2.JPG","https://cdn.boob.bot/ass/4F92.JPG"];
        let randomImage = images[Math.floor(Math.random() * images.length)];
        if (message.channel.nsfw == false) return message.channel.send("**Использование 18+ команд только в nsfw чатах**",{ files: ['https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif'] })
    
            const booty = new Discord.MessageEmbed()
                .setColor("#FF1493")
                .setImage(randomImage)
                .setTitle("Вот, возьми пару картинок ;)")
                .setFooter(`${message.author.tag}`, message.author.avatarURL())
                message.channel.send(booty)
    } catch (err) {
        console.log(err)
    }
};


exports.help = {
    name: 'booty',
    aliases: ['писи'],
    description: 'Посмотреть на запрещённое место',
    usages: { '!booty': `Vagina` },
    category: 'NSFW',
};