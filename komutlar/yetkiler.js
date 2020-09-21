const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, params, args) => {


  if(!message.member.roles.has(`YETKİYİ KULLANABİLECEK ROLÜN ID'SİNİ GİR`)) return message.channel.send(`Bu komutu kullanabilmek için özel yetkiye sahip olmalısın!`);




  const yardım = new Discord.RichEmbed()
  .setColor(["RANDOM"])
      .setAuthor(` | Yardım Paneli`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField(`a! - Yetkiler`, `<a:yas:737967291983069204> | **a!ck**: Hex idsi girilen oyuncuyu cklar! (Oyundan çıkmış olmalı)\n <a:yas:737967291983069204> | **a!gçlog**: Steam ismi girilen oyuncunun giriş çıkış loglarını sergiler! \n <a:yas:737967291983069204> | **a!garajlog**: Plakası girilen aracın koyulup çıkartılma loglarını sergiler! \n <a:yas:737967291983069204> | **a!bagajlog**: Plakası girilen aracın bagaj loglarını sergiler! \n <a:yas:737967291983069204> | **a!adgüncelle**: Hex idsi girilen oyuncunun isimini değiştirir!\n <a:yas:737967291983069204> | **a!meslekver**: Hex idsi girilen oyuncuya meslek atar! (Oyundan çıkmış olmalı)\n <a:yas:737967291983069204>  | **a!paragönder**: Hex idsi girilen oyuncunun banka miktarını ayarlar. (Oyundan çıkmış olmalı) \n <a:yas:737967291983069204> | **a!nakitgönder**: Hex idsi girilen oyuncunun nakit parasını ayarlar (Oyundan çıkmış olmalı)!\n <a:yas:737967291983069204> | **a!bugdüzelt**: Hex idsi girilen oyuncuyu motel altı otoparka ışınlar (Oyundan çıkmış olmalı)\n <a:yas:737967291983069204> | **a!telefongüncelle**: Hex idsi girilen oyuncunun telefon numarasını günceller (Oyundan çıkmış olmalı)`)
      .setFooter(`${message.author.username} tarafından istendi. | Maded By Itami`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yetkiler'],
    permLevel: 2
  };

  exports.help = {
    name: 'yetkiler',
    description: 'yetkiler',
    usage: 'yetkiler'
  };
