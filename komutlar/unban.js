module.exports = {
  name:"unban",
  aliases:["bankaldır", "un-ban", "ban-kaldır", "yasaklama-kaldır"],
  code:`
  $description[
  $username, \`$userTag[$message]\`(\`$message[1]\`) Kişisinin Yasaklaması Kaldırıldı.]
  $color[RANDOM]
  $unban[$message]
  $onlyIf[$isBanned[$message]!=false;{author:HATA!:$authorAvatar}{description:\`$userTag[$message]\`(\`$message\`) Kişisi Zaten Yasaklanmamış!}{color:RED}{delete:8s}]
  $onlyIf[$message!=;{author:HATA!:$authorAvatar}{description:$username Bir Kişi ID'si Girmen Gerekiyor!}{color:RED}{delete:8s}]
  $onlyPerms[ban;{author:HATA!:$authorAvatar}{description:Bu Komutu Kullanabilmek İçin \`Üyeleri Yasakla\` Yetkisine Sahip Olman Gerekiyor!}{color:RED}{delete:8s}]
  `
}
