const {admin} = config
module.exports.run = async (client, message, args) => {
    try {
        let helpembed = new Discord.MessageEmbed()
        .setTitle('Помощь')
        .setDescription('**Информация о любой команде `!help` __`команда`__**')
        .setColor('ORANGE')
        .setThumbnail(bot.user.avatarURL())
     
        function sendCommandList(message) {
            cmdlist = []
            commands = []
            command_names = []

            
            const modules = client.commands.map(command => command.help.category).filter((m, i, self) => self.indexOf(m) === i).forEach(category => {
                cmds = client.commands.filter(command => command.help.category === category);

                command_names = []
                cmds.forEach(e => {
                   if(!admin.includes(message.author.id) && e.help.dev == true){
                        command_names.push(`~~\`${e.help.name}\`~~`)
                    }else{
                        command_names.push(`**\`${e.help.name}\`**`)
                    }
                    
                
                });
                command_names = command_names.join(' ')
                helpembed.addField(`${category}`, `${command_names}`, false);
              });
              message.channel.send(helpembed)
            
        }

        function sendCommandInfo(commandName) {
            let errEmbed = new Discord.MessageEmbed()

            let command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));
            if(!command) {
                message.channel.send(`Такой команды нет`)
            }

            const usages = []
            if(!command.help.usages){
                usages.append('Нет примеров использования')
            }else{
                Object.keys(command.help.usages).forEach(e => {
                    usages.push(`\`${e}\` => \`${command.help.usages[e]}\``)
                })
            }

            message.channel.send(`\`!${command.help.name}\` ${command.help.description} \n **Алиасы:** ${command.help.aliases.join(', ')} \n \n **Использование:** ${usages.join('\n')}`)
            
        }
        let cmd = args[0];
        if (!cmd) return sendCommandList(message);
        sendCommandInfo(cmd);
    } catch (err) {
        console.log(err.stack);
    }


    
};
module.exports.help = {
    name: 'help',
    aliases: [`h`, `помощь`, 'хелп'],
    description: 'Показать список и описание команд',
    usages: { '!help': 'Показать все команды' },
    category: "Информация"
}; 