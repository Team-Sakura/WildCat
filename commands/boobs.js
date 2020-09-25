const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    try {
        // Да да, это не апи, но похуй если честно
        var images = ["https://cdn.boob.bot/boobs/8000B9E0.gif","https://cdn.boob.bot/boobs/800029C6.jpg","https://cdn.boob.bot/boobs/800159B8.gif","https://cdn.boob.bot/boobs/80004A78.gif","https://cdn.boob.bot/boobs/8000E1D6.gif","https://cdn.boob.bot/boobs/80006959.gif","https://cdn.boob.bot/boobs/80003EF7.gif","https://cdn.boob.bot/boobs/800010F3.gif","https://cdn.boob.bot/boobs/80017F42.gif","https://cdn.boob.bot/boobs/8000E91A.gif","https://cdn.boob.bot/boobs/800066ED.gif","https://cdn.boob.bot/boobs/800143EC.jpg","https://cdn.boob.bot/boobs/80007575.gif","https://cdn.boob.bot/boobs/4E1B.JPG","https://cdn.boob.bot/boobs/800073A4.gif","https://cdn.boob.bot/boobs/8000DC63.gif","https://cdn.boob.bot/boobs/8000617A.gif","https://cdn.boob.bot/boobs/4F92.JPG","https://cdn.boob.bot/boobs/80002E03.gif","https://cdn.boob.bot/boobs/80014D01.png","https://cdn.boob.bot/boobs/8000C99E.gif","https://cdn.boob.bot/boobs/800148C4.jpg","https://cdn.boob.bot/boobs/80004F50.gif","https://cdn.boob.bot/boobs/80009B9A.jpg","https://cdn.boob.bot/boobs/80005C07.gif","https://cdn.boob.bot/boobs/80017E0C.jpg","https://cdn.boob.bot/boobs/80015616.png","https://cdn.boob.bot/boobs/800149FA.jpg","https://cdn.boob.bot/boobs/4C95.JPG","https://cdn.boob.bot/boobs/80002C32.gif"];
        let randomImage = images[Math.floor(Math.random() * images.length)];
        if (message.channel.nsfw == false) return message.channel.send("**Использование 18+ команд только в nsfw чатах**",{ files: ['https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif'] })
    
            const boobs = new Discord.MessageEmbed()
                .setColor("#FF1493")
                .setImage(randomImage)
                .setTitle("Вот, возьми пару картинок ;)")
                .setFooter(`${message.author.tag}`, message.author.avatarURL())
                message.channel.send(boobs)
    } catch (err) {
        console.log(err)
    }
};


exports.help = {
    name: 'boobs',
    aliases: ['сиси'],
    description: 'Посмотреть на грудь',
    usages: { '!boobs': `Грудь женщины` },
    category: 'NSFW',
};