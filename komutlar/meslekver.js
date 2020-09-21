


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


  if (!args[0]) return message.reply('Lütfen meslek vermek istediğin oyuncunun hex idsini giriş yap!')

  if (!args[1]) return message.reply('Lütfen vermek istediğin mesleği belirt!')
  if (!args[2]) return message.reply('Lütfen vermek istediğin mesleğin kademesini belirt! (1 - 2 - 3 - 4 - 5)')



  let embed = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(`Başarıyla oyuncu mesleğini ${args[1]} olarak güncelledim!`)


message.channel.send(embed);


      let sqlSorgusu = `UPDATE users SET job = '${args[1]}' WHERE identifier = 'steam:${args[0]}'`;






      connection.query(sqlSorgusu, 1, (error, results, fields) => {
        if (error)
          return console.error(error.message);

        console.log('Birinci Veri Güncellendi!  ', results.affectedRows);
      });


  let sqlkademe = `UPDATE users SET job_grade = '${args[2]}' WHERE identifier = 'steam:${args[0]}'`;


        connection.query(sqlkademe, 1, (error, results, fields) => {
          if (error)
            return console.error(error.message);

          console.log('İkinci Veri Güncellendi!  ', results.affectedRows);
        });


      connection.end();




}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['meslekver'],
  permLevel: 0,
};

exports.help = {
  name: "meslekver",
  description: "Shows all the servers the bot is in.",
  usage: "meslekver"
};
