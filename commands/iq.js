const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {
    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
    // ebat huita :klas:
    let a = randomIntInc(0, 100)
    let embed = new Discord.MessageEmbed()
        .setTitle(`Показатель IQ`)
        .setDescription(`Ваш IQ -  ${a} :brain:`)
        .setColor("#FF69B4")
        .setTimestamp()
        .setFooter(message.guild)
    message.channel.send(embed);
}

module.exports.help = {
    name: 'iq',
    aliases: ['мозгник'],
    description: 'Тест на iq',
    usages: { '!iq': `Узнаете на сколько вы умный, или тупой...` },
    category: 'Развлечения'
};