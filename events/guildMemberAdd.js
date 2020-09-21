
const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = member => {



 let embed = new Discord.RichEmbed()
    .setColor("RANDOM")

    .setTitle("Discord sunucumuza tekrardan katılmak istersen tıkla!")
    .setURL("https://discord.gg/fkmrjSe")
    .setImage("https://i.hizliresim.com/xCcNdN.png")

    .setAuthor(" | Sunucumuza Hoşgeldin ", "https://i.hizliresim.com/xCcNdN.png")
    .setDescription("'Selamlar dostum Sunucumuza Hoşgeldin :sparkling_heart:, Sunucumuza kayıt olmak için **Sesli Odaya** giriş yapabilir ve **Kayıtsız Sohbet** odasından **!kayit** yazarak bize ulaşabilirsin. İyi eğlenceler :wink:")
    .setFooter("Alpha Roleplay Discord Botu | Maded By Itami")

        member.sendEmbed(embed)




 


};
