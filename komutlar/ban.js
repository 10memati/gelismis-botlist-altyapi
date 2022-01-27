module.exports = {
  name:"ban",
  aliases:["yasakla"],
  code:`
  $description[
  $username, <@$mentioned[1]>(\`$mentioned[1]\`) Kullanıcısı Banlandı.]
  $color[RANDOM]
  $sendDm[$mentioned[1];{author:$serverName:$serverIcon}{description:
  $userTag \`$serverName\` Adlı Sunucudan Yasaklandınız.
  Sebep: \`\`\`js
  $noMentionMessage\`\`\`}{color:RANDOM}]
  $ban[$mentioned[1];$noMentionMessage ($userTag Tarafından);7]
  $onlyIf[$noMentionMessage!=;{author:HATA!:$authorAvatar}{description:Yasaklama Sebenini Girin!}{color:RED}{delete:8s}]
  $onlyIf[$mentioned[1]!=;{author:HATA!:$authorAvatar}{description:Yasaklayacağınız Kişiyi Etiketleyin!}{color:RED}{delete:8s}]
  $onlyPerms[ban;{author:HATA!:$authorAvatar}{description:Bu Komutu Kullanabilmek İçin \`Üyeleri Yasakla\` Yetkisine Sahip Olmanız Gerekiyor!}{color:RED}{delete:8s}]`
}
