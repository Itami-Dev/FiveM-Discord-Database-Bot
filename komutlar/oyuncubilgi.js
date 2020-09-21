


const Discord = require("discord.js")
const mysql= require('mysql');

// database.connect();












exports.run = (client, message, args, color) => {






  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'essentialmode',
  });




  if(!message.member.roles.has(`YETKİYİ KULLANABİLECEK ROLÜN ID'SİNİ GİR`)) return message.channel.send(`Bu komutu kullanabilmek için özel yetkiye sahip olmalısın!`);




  if (!args[0]) return message.reply('Lütfen bilgi edinmek istediğin oyuncunun hex idsini giriş yap!')








  let sqlkademe = `SELECT * FROM users WHERE identifier = 'steam:${args[0]}'`;


        connection.query(sqlkademe, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);

          console.log("Kullanıcı bilgisi aktarıldı!");






           if (results[0] === null || results[0] === undefined)

           {




             let embed2 = new Discord.RichEmbed()
           .setColor("RED")
           .setAuthor(`Sorgulamak İstediğiniz Oyuncu Bulunmuyor Yada Yetkili Tarafından CK Yemiş!`)



           message.channel.send(embed2)

     return;





           }






                              let embed = new Discord.RichEmbed()
                            .setColor("#a200ff")
                            .setAuthor(` Oyuncu Hakkındaki Bilgiler;`)
                            .setDescription(`<a:yas:737967291983069204> Oyuncunun Adı Soyadı: `+ `**${results[0].firstname}**` + ` **${results[0].lastname}**` +     `\n <a:yas:737967291983069204> Oyuncunun Telefon Numarası: `+ `**${results[0].phone_number}** \n` + `<a:yas:737967291983069204> Oyuncunun Mesleği: `+ `**${results[0].job}**\n` + `<a:yas:737967291983069204> Oyuncunun Üstündeki Para Miktarı: `+ `**${results[0].money}** \n` + `<a:yas:737967291983069204> Oyuncunun Banka Hesabındaki Para Miktarı: `+ `**${results[0].bank}**`  )


                            message.channel.send(embed);





    connection.end();

  });


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyuncubilgi'],
  permLevel: 0,
};

exports.help = {
  name: "oyuncubilgi",
  description: "Shows all the servers the bot is in.",
  usage: "oyuncubilgi"
};
