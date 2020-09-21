


const Discord = require("discord.js")
const mysql= require('mysql');





// database.connect();












exports.run = (client, message, args, color) => {





  const connection = mysql.createConnection({  charset : 'utf8',
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'essentialmode',
  });






  if(!message.member.roles.has(`YETKİYİ KULLANABİLECEK ROLÜN ID'SİNİ GİR`)) return message.channel.send(`Bu komutu kullanabilmek için özel yetkiye sahip olmalısın!`);


  if (!args[0]) return message.reply('Lütfen ck atmak istediğin oyuncunun HEX idsini benimle paylaş!')






      let sqlSorgusu = `DELETE FROM users WHERE identifier = 'steam:${args[0]}'`;

      connection.query(sqlSorgusu, 1, (error, results, fields) => {
        if (error)
          return console.error(error.message);

        console.log('Karakter silindi: ', results.affectedRows);













                                             let embed = new Discord.RichEmbed()
                                           .setColor("#ffe100")
                                           .setAuthor("Başarıyla ck atılmıştır!")




                                           message.channel.send(embed);















  });





      let sqlSorgusu4 = `DELETE FROM characters WHERE identifier = 'steam:${args[0]}'`;

      connection.query(sqlSorgusu4, 1, (error, results, fields) => {
        if (error)
          return console.error(error.message);

        console.log('Characters tablosu silindi: ', results.affectedRows);
      });




            let sqlSorgusu3 = `DELETE FROM user_inventory WHERE identifier = 'steam:${args[0]}'`;

            connection.query(sqlSorgusu3, 1, (error, results, fields) => {
              if (error)
                return console.error(error.message);

              console.log('Envanter silindi: ', results.affectedRows);
            });







                        let sqlSorgusu2 = `DELETE FROM owned_vehicles WHERE owner = 'steam:${args[0]}'`;

                        connection.query(sqlSorgusu2, 1, (error, results, fields) => {
                          if (error)
                            return console.error(error.message);

                          console.log('Araçlar silindi: ', results.affectedRows);





                        });






                        connection.end();












}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ck'],
  permLevel: 0,
};

exports.help = {
  name: "ck",
  description: "Shows all the servers the bot is in.",
  usage: "ck"
};
