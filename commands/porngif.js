const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    try {
        // Да да, это не апи, но похуй если честно
        var images = ["https://cdn.boob.bot/Gifs/1778.gif","https://cdn.boob.bot/Gifs/1792.gif","https://cdn.boob.bot/Gifs/15F2.gif","https://cdn.boob.bot/Gifs/1880.gif","https://cdn.boob.bot/Gifs/17AB.gif","https://cdn.boob.bot/Gifs/1618.gif","https://cdn.boob.bot/Gifs/186A.gif","https://cdn.boob.bot/Gifs/1853.gif","https://cdn.boob.bot/Gifs/163B.gif","https://cdn.boob.bot/Gifs/1797.gif","https://cdn.boob.bot/Gifs/18AE.gif","https://cdn.boob.bot/Gifs/1757.gif","https://cdn.boob.bot/Gifs/181F.gif","https://cdn.boob.bot/Gifs/17FE.gif","https://cdn.boob.bot/Gifs/183E.gif","https://cdn.boob.bot/Gifs/195A.gif","https://cdn.boob.bot/Gifs/1943.gif","https://cdn.boob.bot/Gifs/1983.gif","https://cdn.boob.bot/Gifs/18AD.gif","https://cdn.boob.bot/Gifs/172D.gif","https://cdn.boob.bot/Gifs/18D8.gif","https://cdn.boob.bot/Gifs/1827.gif","https://cdn.boob.bot/Gifs/1793.gif","https://cdn.boob.bot/Gifs/1869.gif","https://cdn.boob.bot/Gifs/15C1.gif","https://cdn.boob.bot/Gifs/1740.gif","https://cdn.boob.bot/Gifs/1714.gif","https://cdn.boob.bot/Gifs/1763.gif","https://cdn.boob.bot/Gifs/18C3.gif","https://cdn.boob.bot/Gifs/18C8.gif"];
        let randomImage = images[Math.floor(Math.random() * images.length)];
        if (message.channel.nsfw == false) return message.channel.send("**Использование 18+ команд только в nsfw чатах**",{ files: ['https://images-ext-2.discordapp.net/external/hiWbEzhiEXfFaza5khoxg3mR3OWeugZwWo8vGxK8LzA/https/i.imgur.com/oe4iK5i.gif'] })
    
            const porngif = new Discord.MessageEmbed()
                .setColor("#FF1493")
                .setImage(randomImage)
                .setTitle("Вот, возьми пару картинок ;)")
                .setFooter(`${message.author.tag}`, message.author.avatarURL())
                message.channel.send(porngif)
    } catch (err) {
        console.log(err)
    }
};


exports.help = {
    name: 'porngif',
    aliases: ['порногиф'],
    description: 'Посмотреть на порн гифку',
    usages: { '!porngif': `Порнушка 4k` },
    category: 'NSFW',
};