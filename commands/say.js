const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {
    try {
        let botmessage = args.join(' ');
        if(!args[0]) return message.channel.send("Что вы хотите сказать?");
        if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send('У меня недостаточно прав!');
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("У вас недостаточно прав!")
        if (!botmessage) return;
        if (message.member.hasPermission('MANAGE_MESSAGES')) message.delete().catch();
        await message.channel.send(botmessage);

    } catch (err) {
        console.log(err)
    }
};
module.exports.help = {
    name: 'say',
    aliases: ['сказать', 'скажи', 'сей', 'сау', 'скажиплиз'],
    description: 'Сказать за бота',
    category: 'Утилиты',
    usages: {'!say Hello': 'Бот скажет Hello' }
};