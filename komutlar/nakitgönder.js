


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


  if (!args[0]) return message.reply('Lütfen para göndermek istediğin oyuncunun hex idsini benimle paylaş!')

  if (!args[1]) return message.reply('Lütfen yeni para miktarını benimle paylaş!')






  let sqlta = `SELECT * FROM users WHERE identifier = 'steam:${args[0]}'`;


        connection.query(sqlta, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);

          console.log("Nakit Para bilgisi kaydedildi!");



                     if (results[0] === null || results[0] === undefined)

                     {




                       let embed2 = new Discord.RichEmbed()
                     .setColor("RED")
                     .setAuthor(`Sorgulamak İstediğiniz Oyuncu Bulunmuyor Yada Yetkili Tarafından CK Yemiş!`)



                     message.channel.send(embed2)

               return;





                     }






                     if (results[0] === null || results[0] === undefined)

                     {




                       let embed2 = new Discord.RichEmbed()
                     .setColor("RED")
                     .setAuthor(`Para Göndermek İstediğiniz Oyuncu Bulunmuyor Yada Yetkili Tarafından CK Yemiş!`)



                     message.channel.send(embed2)

               return;





                     }









 var kayitlipara = results[0].money;








  let embed = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(`Başarıyla üstündeki parayı $${args[1]} olarak güncelledim!`)
.setDescription(`Üstündeki Önceki Para: ${kayitlipara}`)


message.channel.send(embed);



        let sqlSorgusu = `UPDATE users SET money = '${args[1]}' WHERE identifier = 'steam:${args[0]}'`;




      connection.query(sqlSorgusu, 1, (error, results, fields) => {
        if (error)
          return console.error(error.message);

        console.log('Nakit verisi Güncellendi!  ', results.affectedRows);
      });

      connection.end();

  });


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nakitgönder'],
  permLevel: 0,
};

exports.help = {
  name: "nakitgönder",
  description: "Shows all the servers the bot is in.",
  usage: "nakitgönder"
};
