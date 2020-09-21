


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


  if (!args[0]) return message.reply('Lütfen numarasını değiştirmek istediğin oyuncunun hex idsini benimle paylaş!')

  if (!args[1]) return message.reply('Lütfen yeni numaranı benimle paylaş!')





  let sqlta = `SELECT * FROM users WHERE identifier = 'steam:${args[0]}'`;


        connection.query(sqlta, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);

          console.log("Numara Bilgisi kaydedildi!");



                     if (results[0] === null || results[0] === undefined)

                     {




                       let embed2 = new Discord.RichEmbed()
                     .setColor("RED")
                     .setAuthor(`Sorgulamak İstediğiniz Oyuncu Bulunmuyor Yada Yetkili Tarafından CK Yemiş!`)



                     message.channel.send(embed2)

               return;





                     }







 var numara = results[0].phone_number;


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
.setAuthor(`Başarıyla telefon numaranı ${args[1]} olarak güncelledim!`)
.setDescription(`Önceki telefon numaran: ${numara}`)


message.channel.send(embed);



        let sqlSorgusu = `UPDATE users SET phone_number = '${args[1]}' WHERE identifier = 'steam:${args[0]}'`;




      connection.query(sqlSorgusu, 1, (error, results, fields) => {
        if (error)
          return console.error(error.message);

        console.log('Numara Güncellendi!  ', results.affectedRows);
      });













      connection.end();

  });


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['telefongüncelle'],
  permLevel: 0,
};

exports.help = {
  name: "telefongüncelle",
  description: "Shows all the servers the bot is in.",
  usage: "telefongüncelle"
};
