global.Discord = require('discord.js');
global.bot = new Discord.Client({ disableEveryone: true })
global.config = require('./config.json')
global.colors = require('./colors.json')
global.fs = require('fs')
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if (jsfile.length <= 0) return console.log('Команды не найдены!')

    console.log(`Загружено ${jsfile.length} команд`)
    jsfile.forEach((f, i) => { 
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        });
    });
});

bot.on("guildCreate", async(guild) => {

    let newserver = new Discord.MessageEmbed()
    .setColor('FFA947')
    .setThumbnail(guild.iconURL())
    .setAuthor("📥 Новый сервер")
    .addField("**Название сервера**", `\`${guild.name}\``, true)
    .addField("**ID сервера**", `\`${guild.id}\``, true)
    .addField("**Создатель**", `\`${guild.owner.user.tag}\``, true)
    .addField("**Пользователей**", `\`${guild.memberCount}\``, true)
    .addField("**Количество ролей**", `\`${guild.roles.cache.size}\``, true)
    .addField("**Количество эмоджи**", `\`${guild.emojis.size}\``, true)
    .setFooter(`У нас теперь ${bot.guilds.cache.size} серверов`,bot.user.avatarURL())

     bot.channels.get("id канала").send(newserver)
  }),

   bot.on("guildDelete", async(guild) => {

    let deleteserver = new Discord.MessageEmbed()
    .setColor('FFA947')
    .setThumbnail(guild.iconURL())
    .setAuthor("📤 Удалили с сервера")
    .addField("**Название сервера**", `\`${guild.name}\``, true)
    .addField("**ID сервера**", `\`${guild.id}\``, true)
    .addField("**Создатель**", `\`${guild.owner.user.tag}\``, true)
    .addField("**Пользователей**", `\`${guild.memberCount}\``, true)
    .addField("**Количество ролей**", `\`${guild.roles.cache.size}\``, true)
    .addField("**Количество эмоджи**", `\`${guild.emojis.size}\``, true)
    .setFooter(`У нас теперь ${bot.guilds.cache.size} серверов`,bot.user.avatarURL())

   bot.channels.get("id канала").send(deleteserver)
  }),

  bot.on('message', async message => {
    if([`<@${bot.user.id}>`, `<@!${bot.user.id}>`].includes(message.content)){
        let shtuka = new Discord.MessageEmbed();
            shtuka.setColor('RANDOM');
            shtuka.setTitle(`Информация`);
            shtuka.addField("**:books: Команды**" , "**Список команд -** ``!help``");
            shtuka.addField("**<:banan:703991769712427089> Поддержка**" , "[Сервер поддержки](https://discord.gg/ZGQFeTW)");
            shtuka.addField("**<:3213:703991770060554331> Важная информация**" , "Если от вашего сервера будут поступать бесполезные идеи и баги, или название вашего сервера хоть как связано с экстремизмом, бот будет **исключён** от туда");
            shtuka.setFooter(message.author.tag, message.author.avatarURL());
            shtuka.setTimestamp();
            message.channel.send(shtuka);
    }
}),

  bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;

    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLowerCase();
    let command;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    if(bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    try {
        command.run(bot, message, args);
    } catch (e) {
        return;
    }
}),

bot.login(config.token)