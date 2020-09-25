const Discord = require("discord.js");
const { letterTrans } = require('custom-translate');

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Укажите текст`);
    var dictionary = {
      
        "а": "ɐ",
      
        "б": "ƍ",
      
        "в": "ʚ",
      
        "г": "ɹ",
      
        "д": "ɓ",
      
        "е": "ǝ",
      
        "ё": "ǝ",
      
        "ж": "ж",
      
        "з": "ε",
      
        "и": "и",
      
        "й": "ņ",
      
        "к": "ʞ",
      
        "л": "v",
      
        "м": "w",
      
        "н": "н",
      
        "о": "о",
      
        "п": "u",
      
        "р": "d",
      
        "с": "ɔ",
      
        "т": "ɯ",
      
        "у": "ʎ",
      
        "ф": "ȸ",
      
        "х": "х",
      
        "ц": "ǹ",
      
        "ч": "Һ",
      
        "ш": "m",
      
        "щ": "m",
      
        "ъ": "q",
      
        "ы": "ıq",
      
        "ь": "q",
      
        "э": "є",
      
        "ю": "oı",
      
        "я": "ʁ",

        "a": "ɐ",

        "b": "q",

        "c": "ɔ",

        "d": "p",

        "e": "ǝ",

        "f": "ɟ",

        "g": "ƃ",

        "h": "ɥ",

        "i": "ᴉ",

        "j": "ɾ",

        "k": "ʞ",

        "m": "ɯ",

        "n": "u",

        "p": "d",

        "q": "b",

        "r": "ɹ",

        "t": "ʇ",

        "u": "n",

        "v": "ʌ",

        "w": "ʍ",

        "y": "ʎ",

        "A": "∀",

        "C": "Ɔ",

        "E": "Ǝ",

        "F": "Ⅎ",

        "G": "פ",

        "J": "ſ",

        "L": "˥",

        "M": "W",

        "P": "Ԁ",

        "T": "┴",

        "U": "∩",

        "V": "Λ",

        "W": "M",

        "Y": "⅄",

        "1": "Ɩ",

        "2": "ᄅ",

        "3": "Ɛ",

        "4": "ㄣ",

        "5": "ϛ",

        "6": "9",

        "7": "ㄥ",

        "9": "6",

        ",": "'",

        ".": "˙",

        "'": ",",

        "\"": ",,",

        "_": "‾",

        "&": "⅋",

        "!": "¡",

        "?": "¿",

        "`": ","

    }
    if (!args) return;
    const text = args.join(' ');

    const converted = letterTrans(text, dictionary);

    await message.channel.send(converted);

}

module.exports.help = {
    name: 'reverse',
    aliases: ['крутим', 'вертим'],
    description: 'Переворачивает любой текст',
    usages: { '!textflip !': `Бот отправит вам ¡` },
    category: 'Развлечения'
};