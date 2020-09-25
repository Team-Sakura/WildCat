const Discord = require('discord.js')

exports.run = (bot, message, args, tools) => {
    // Клёвая команда, честно :/
    let images = [
        "(͡° ͜ʖ ͡°)",
        "(ง ͠° ͟ل͜ ͡°)ง",
        "ʕ•ᴥ•ʔ",
        "(づ￣ ³￣)づ",
        "(͡ᵔ ͜ʖ ͡ᵔ)",
        "༼ つ ಥ_ಥ ༽つ"
    ];
    let randomImage = images[Math.floor(Math.random() * images.length)];
    message.channel.send(randomImage)
}


exports.help = {
    name: 'larry',
    aliases: ['ларри'],
    description: 'Это же ларри!',
    usages: { '!larry': `Самый клёвый чувак` },
    category: 'Развлечения'
};