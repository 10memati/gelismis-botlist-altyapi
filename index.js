const express = require('express');
const app = express()
app.get("/",(req,res) =>{
  res.send("Bot Aktif.")
}).listen(8080)
const DBD = require("aoi.js");
const bot = new DBD.Bot({
  token: process.env['token'],
  prefix: "$getServerVar[prefix]",
 })
bot.onMessage()
bot.onJoined()
bot.onLeave()

bot.command({
name: "ping",
code:`$ping`
})

const fs = require('fs')
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
} 
bot.variables({
  tbsayi:"0",
  sahiplik:"no",
  botlist:"kapalı",
  bot:"no",
  bprefix:"",
  bdbl:"",
  prefix:"!",
  sahip:"",
  bytlog:"yok",
  blog:"yok",
  bkanal:"yok",
  byetkili:"yok",
  sbrol:"yok",
  bsgrol:"yok",
  brol:"yok",
  bgelistirici:"yok",
  botu:"",
  yasakl:"",
  yasak:"no",
  yasaksbp:""
})

bot.leaveCommand({
  channel:"$getServerVar[blog]",
  code:`
$description[
\`$userTag\` Adlı Kişi Sunucudan Ayrıldı, \`$userTag[$getUserVar[botu]]\` Adındaki Botunu Attım!]
$color[RANDOM]
$ban[$getUserVar[botu];Sahibi($userTag) Çıktı!;7]
$onlyIf[$getUserVar[sahiplik]!=no;]`})

bot.joinCommand({
  channel:"$getServerVar[blog]",
  code:`
<@$getGlobalUserVar[sahip;$authorID]>, \`$userTag\` Adlı Botunuz Onaylandı!
$giveRole[$authorID;$getServerVar[brol]]
$giveRole[$getGlobalUserVar[sahip;$authorID];$getServerVar[bgelistirici]]
$setServerVar[tbsayi;$math[$getServerVar[tbsayi]-1]]
$changeNickname[$authorID;$username[$getGlobalUserVar[sahip]] | $username]
$setUserVar[bot;no;$authorID]
$onlyIf[$getUserVar[bot;$authorID]!=no;]
$onlyIf[$isBot[$authorID]!=false;]
`
})

bot.command({
  name:"reddet",
  code:`
  $description[
  \`$message[1]\` ID'li Bot Reddedildi.]
  $color[GREEN]
  $channelSendMessage[$getServerVar[blog];
  <@$getGlobalUserVar[sahip;$message[1]]>
  {description:
    Botunuz, \`$userTag\` Adlı Yetkili Tarafından \`$messageSlice[1]\` Sebebiyle Reddedildi.}{color:RED}]
  $setUserVar[bot;no;$message[1]]
  $setServerVar[tbsayi;$math[$getServerVar[tbsayi]-1]]
  $onlyIf[$message[2]!=;{author:HATA!}{description:
  \`$userTag[$message[1]]\` Adlı Botu Reddetme Sebebini Gir!}{color:RED}{delete:6s}]
  $onlyIf[$getUserVar[bot;$message[1]]!=no;{author:HATA!}{description:
  Böyle Bir Bot Başvurusu Bulunmamakta!}{color:RED}{delete:6s}]
  $onlyIf[$message[1]!=;{author:HATA!}{description:
  Reddetmek İstediğiniz Botun ID'sini Girin!}{color:RED}{delete:6s}]
  $onlyIf[$hasRole[$authorID;$getServerVar[byetkili]]!=false;{author:HATA!}{description:
  Bu Komutu Kullanmak İçin Yetkin Yok!}{color:RED}{delete:6s}]
$onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]`
})

bot.command({
  name:"eval",
  code:`
$eval[$message]
$onlyForIDs[$botOwnerID;Sahibime Özel]`
})

bot.command({
  name:"prefix",
  code:`
$description[
$username Prefix \`$message\` Olarak Ayarlandı.
]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$charCount[$message]>3;Prefix 3 Harften Fazla Olamaz!]
$onlyPerms[admin;Yetkin Yok!]`
})

bot.command({
  name:"yardım",
  code:`
$author[$userTag[$clientID] Yardım Menüsü;$userAvatar[$clientID]]
$description[
__Moderasyon:__

**$getServerVar[prefix]prefix**
\`Botun Prefixini Ayarlar\`

**$getServerVar[prefix]ban**
\`Etiketlenen Kişiyi Sunucudan Yasaklar\`

**$getServerVar[prefix]forceban**
\`ID'si Girilen Kişiyi Sunucudan Yasaklar\`

__BotList:__

**$getServerVar[prefix]botlist**
\`BotList Ayarlarını Yapar\`

**$getServerVar[prefix]botekle**
\`Bot Ekleme Başvurusu Yapmaya Yarar\`

**$getServerVar[prefix]botlist-yasaklı**
\`Etiketlenen Kişiyi BotList'den Yasaklar/Yasağını Kaldırır\`

**$getServerVar[prefix]sertifika**
\`Etiketlenen Kullanıcıya Ve Botuna Sertifika Verir\`]
$color[BLACK]
$footer[$userTag;$authorAvatar]
`
})
