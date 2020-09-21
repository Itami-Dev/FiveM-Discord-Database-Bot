const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');


const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "s!yardım",
        "s!botbilgi",

    ];



  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
  setInterval(function() {

      var random = Math.floor(Math.random()*(oyun.length-1+1)+1);

      client.user.setActivity(`ROLEPLAY | DISCORD BOT`, { type: "WATCHING"});
    }, 2 * 2500);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);



};
