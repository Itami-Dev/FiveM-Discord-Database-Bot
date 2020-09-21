


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


  if (!args[0]) return message.reply('Lütfen kayıdını görmek istediğin arabanın plakasının ilk 3 hanesini giriş yap!')
  if (!args[1]) return message.reply('Lütfen kayıdını görmek istediğin arabanın plakasının son 3 hanesinide boşluk bırakarak giriş yap!')












  let sqlta = `SELECT count(*) as total FROM garaj WHERE Type = '${args[0]} ${args[1]}'`;


        connection.query(sqlta, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);

          console.log("Araç Garaj Döngü Kayıt Bilgisi kaydedildi! Toplam Kayıt: "+ results[0].total);



var kackez = results[0].total;

  let sqltak = `SELECT * FROM garaj WHERE Type = '${args[0]} ${args[1]}'`;



        connection.query(sqltak, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);







var logsayisi = 0;


let embed = new Discord.RichEmbed()
   .setColor("#ff7b00")
   .setAuthor(`${args[0]} ${args[1]} Plakalı Aracın Garaj Giriş Çıkış Kayıtları`)

            while (logsayisi < kackez){











      embed.addField(`<a:nedengrove:737967288686346271>  ${results[logsayisi].Sender} Kullanıcısı ${results[logsayisi].Type} Plakalı Aracı ${results[logsayisi].Reciever}! `, `${results[logsayisi].Time}`);

      logsayisi++;




}

message.channel.send(embed);


});

connection.end();

});










}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['garajlog'],
  permLevel: 0,
};

exports.help = {
  name: "garajlog",
  description: "Shows all the servers the bot is in.",
  usage: "garajlog"
};
