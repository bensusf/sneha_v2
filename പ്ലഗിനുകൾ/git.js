const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/aAGjt7z.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*SPlRlT Bot Created By SPlRlT*

Creator number : wa.me/18052196558

Githublink (Setup)  :    https://github.com/SPlRlT-YT/SPlRlT-BOT

QR       :  https://replit.com/@phaticusthiccy/WhatsAsena-QR

DEPLOYE  :  https://heroku.com/deploy?template=https://github.com/SPlRlT-YT/SPlRlT-BOT.git

SPlRlT BOT GROUP : https://chat.whatsapp.com/FLqVrc4RdakIjXqcNYz7vU


`}) 

}));
