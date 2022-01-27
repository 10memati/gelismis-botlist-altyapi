module.exports = {
  name:"forceban",
  aliases:["id-yasakla", "ipban", "ip-ban", "id-ban", "idban"],
  code:`
  $description[
  $username, $userTag[$message[1]](\`$message[1]\`) Kullanıcısı Banlandı.]
  $color[RANDOM]
  $sendDm[$mentioned[1];{author:$serverName:$serverIcon}{description:
  $userTag \`$serverName\` Adlı Sunucudan Yasaklandınız.
  Sebep: \`\`\`js
  $messageSlice[1]\`\`\`}{color:RANDOM}]
  $ban[$message[1];$messageSlice[1] ($userTag Tarafından);7]
  $onlyIf[$message[2];{author:HATA!:$authorAvatar}{description:Yasaklama Sebenini Girin!}{color:RED}{delete:8s}]
  $onlyIf[$message[1]!=;{author:HATA!:$authorAvatar}{description:Yasaklayacağınız Kişinin ID'sini Girin}{color:RED}{delete:8s}]
  $onlyPerms[ban;{author:HATA!:$authorAvatar}{description:Bu Komutu Kullanabilmek İçin \`Üyeleri Yasakla\` Yetkisine Sahip Olmanız Gerekiyor!}{color:RED}{delete:8s}]`
}
