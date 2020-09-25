const Discord = require("discord.js");
const commando = require('discord.js-commando');
const coin = require('flipacoin');
module.exports.run = async(bot, msg, args) => {
    let coinEmbed = new Discord.MessageEmbed();
    let res = coin()
    msg.channel.send(
        coinEmbed

        // Команда хуйня если честно, можно сделать легче :/
        .setColor('RANDOM')
        .setImage(res === 'head' ? 'https://cdn1.savepice.ru/uploads/2019/11/28/cba8500aaa7ba1377210fde2753ee546-full.png' : 'https://cdn1.savepice.ru/uploads/2019/11/28/8435bb389d0bcebd4334473f9cb578d1-full.png')
        .setAuthor(`Монетка говорит`)
        .setTimestamp()
    )
}


module.exports.help = {
name: 'coin',
aliases: ['>','<'],
description: 'Что говорит монетка?',
usages: { '!coin': `Поможет решить вам важный вопрос` },
category: 'Развлечения'
}