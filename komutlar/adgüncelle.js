


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

  if (!args[0]) return message.reply('Lütfen isimini değiştirmek istediğin oyuncunun hex idsini benimle paylaş!')

  if (!args[1]) return message.reply('Lütfen yeni adını benimle paylaş!')

if (!args[2]) return message.reply('Lütfen yeni soyadını benimle paylaş!')




  let sqlta = `SELECT * FROM users WHERE identifier = 'steam:${args[0]}'`;


        connection.query(sqlta, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);

          console.log("Ad Soyad Bilgisi kaydedildi!");



                     if (results[0] === null || results[0] === undefined)

                     {




                       let embed2 = new Discord.RichEmbed()
                     .setColor("RED")
                     .setAuthor(`Sorgulamak İstediğiniz Oyuncu Bulunmuyor Yada Yetkili Tarafından CK Yemiş!`)



                     message.channel.send(embed2)

               return;





                     }







 var ad = results[0].firstname;
var soyad = results[0].lastname;


if (results[0].firstname === undefined)

{



        let embed2 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor(`Sorgulamak İstediğiniz Oyuncu Bulunmuyor Yada Yetkili Tarafından CK Yemiş!`)



      message.channel.send(embed2)

return;



}






  let embed = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(`Başarıyla ad soyadını ${args[1]} ${args[2]} olarak güncelledim!`)
.setDescription(`Önceki Ad Soyadın: ${ad} ${soyad}`)


message.channel.send(embed);



        let sqlSorgusu = `UPDATE users SET firstname = '${args[1]}' WHERE identifier = 'steam:${args[0]}'`;




      connection.query(sqlSorgusu, 1, (error, results, fields) => {
        if (error)
          return console.error(error.message);

        console.log('Ad Güncellendi!  ', results.affectedRows);
      });





              let sqlSorgusu2 = `UPDATE users SET lastname = '${args[2]}' WHERE identifier = 'steam:${args[0]}'`;




            connection.query(sqlSorgusu2, 1, (error, results, fields) => {
              if (error)
                return console.error(error.message);

              console.log('Soyad Güncellendi!  ', results.affectedRows);
            });









      connection.end();

  });


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['adgüncelle'],
  permLevel: 0,
};

exports.help = {
  name: "adgüncelle",
  description: "Shows all the servers the bot is in.",
  usage: "adgüncelle"
};
