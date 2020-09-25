const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    var images = ["https://memepedia.ru/wp-content/uploads/2020/02/zhak-fresko-memy-9.jpg", "https://memepedia.ru/wp-content/uploads/2020/02/zhak-fresko-memy-13.jpg", "https://cs8.pikabu.ru/post_img/2016/12/10/0/148132036218212468.jpg", "https://memepedia.ru/wp-content/uploads/2020/02/zhak-fresko-memy-4.jpg", "https://2ch.hk/b/src/210001147/15771261857900.jpg", "https://i.ytimg.com/vi/mYlF1dlAr6w/0.jpg", "https://i.ytimg.com/vi/5coBGS4ZyoQ/hqdefault.jpg", "https://pbs.twimg.com/media/ELAZzutXYAECSkF.jpg", "https://i.ytimg.com/vi/AvsbROrMzMk/hqdefault.jpg", "https://memepedia.ru/wp-content/uploads/2020/02/zhak-fresko-memy-5.jpg", "https://lh3.googleusercontent.com/proxy/SxLce_xKUntO5WLnGcAribtSG56jln7mhLvvUgkJmjIl90YnddjZHZHuKmHzaUFOBGEq2M6h7Wwg5WvQulh0MYu7JN7zO-qbpbdAq-BwDdgcCrHOgJmo-OLO_9FT", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6xQihdbu2_IroZ8T-iy4i5i2ibv1heZlzR0XbZAJQ-A5MawH&usqp=CAU", "https://www.meme-arsenal.com/memes/d5f88fdc70180b18f900b1c1547278f6.jpg"];
    let randomImage = images[Math.floor(Math.random() * images.length)];

        const embed = new Discord.MessageEmbed()
            .setColor("#2f3136")
            .setImage(randomImage)
            .setTitle("Жак фреско")
            message.channel.send(embed)
}


exports.help = {
    name: 'zakfresko',
    aliases: ['жакфреско'],
    description: 'Я буду снимать видео про фри фаер',
    usages: { '!zakfresko': `Мем с Жаком Фреско` },
    category: 'Развлечения'
};