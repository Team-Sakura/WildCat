const figlet = require('figlet');

module.exports.run = async (bot, message, args) => {
        if(!args[0]) return message.channel.send('Укажите текст!');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Сообщение слишком длинное!')

            message.channel.send('```' + data + '```')
        })
    }

module.exports.help = {
    name: 'ascii',
    aliases: ['арт'],
    description: 'ASCII арт',
    usages: { '!ascii Hello': `Выдаст вам красивый арт с текстом Hello` },
    category: 'Развлечения'
}