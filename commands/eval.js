const { inspect } = module.require('util');
const {admin} = config
module.exports.run = async (client, message, args) => {
    
    if (message.author.id !== admin) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle("Ошибка").setDescription("У вас недостаточно прав!"))
    try {
        if (!args[0]) return message.channel.send('Укажите код');
        try {
            const evaled = await eval(args.join(' '));
            await message.channel.send(inspect(evaled, {depth: 0, maxArrayLength: 50}).replace(client.token, 'undefined'), {code: 'js'}).catch(() => {});
            if (!message.deleted) message.react('✅');
        }
        catch (error) {
            if (!message.deleted) message.react('❌');
            await message.channel.send(error, {code: 'js'}).catch(() => {});
        }
    } catch (err) {
        client.logsErr(err)
    }
};
module.exports.help = {
    name: 'eval',
    description: 'Слишком быстрая информация',
    aliases: ['ебал'],
    category: "Разработчик",
    usages: {'!eval message.channel.send("Hello")': 'Бот напишет Hello'},
    dev: "true"
}; 
