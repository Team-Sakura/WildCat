const Discord = require('discord.js')
   let Canvas = require('canvas')

exports.run = (bot, message, args, tools) => {
    var wordss = ["СЮДА СЛОВА МНОГО ЧЕРЕЗ ,"СЛОВА","];
    let words = wordss[Math.floor(Math.random() * wordss.length)];
       const canvas = Canvas.createCanvas(1000, 500);
        const ctx = canvas.getContext('2d');
    
        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/748546245274107924/759419021678084167/20200926_175952.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
         ctx.strokeRect(0, 0, canvas.width, canvas.height);
         ctx.font = '30pt sans-serif';
     
         ctx.fillText(words, canvas.width / 1.9, canvas.height / 2.1);
    
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jacque.png');
        message.channel.send(attachment);
    }
}


exports.help = {
    name: 'jacque',
    aliases: ['жакфреско'],
    description: 'Я буду снимать видео про фри фаер',
    usages: { '!zakfresko': `Мем с Жаком Фреско` },
    category: 'Развлечения'
};
