module.exports = {
  name:"botlist-yasaklı",
  code:`
  $if[$message[1]==ekle]
  $description[
  $username, <@$mentioned[1]>(\`$mentioned[1]\`) Kişisi Yasaklı Listesine Eklendi, Bundan Sonra Bot Ekleyemeyecek.]
  $color[RANDOM]
  $setUserVar[yasaksbp;$messageSlice[2];$mentioned[1]]
  $setUserVar[yasak;yes;$mentioned[1]]
  $setServerVar[yasakl;
  $getServerVar[yasakl]
  
  
  Kullanıcı: $userTag[$mentioned[1]]
  
  ID: $mentioned[1]
  
  Sebep: $messageSlice[2]]
  $onlyIf[$message[3]!=;{author:HATA!:$authorAvatar}{description:Bir Sebep Girmelisin!}{color:RED}{delete:8s}]
  $onlyIf[$getUserVar[yasak;$mentioned[1]]!=yes;{author:HATA!:$authorAvatar}{description:Bu Kişi Zaten Yasaklı!}{color:RED}{delete:8s}]
  $onlyIf[$mentioned[1]!=;{author:HATA!:$authorAvatar}{description:Birini Etiketlemelisin!}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==çıkar]
  $description[
  $username, <@$mentioned[1]>(\`$mentioned[1]\`) Kişisi Yasaklı Listesinden Çıkarıldı, Bundan Sonra Bot Ekleyebilecek.]
  $color[RANDOM]
  $setUserVar[yasak;yes;$mentioned[1]]
  $setServerVar[yasakl;
  $replaceText[$getServerVar[yasakl];
  Kullanıcı: $userTag[$mentioned[1]]
  
  ID: $mentioned[1]
  
  Sebep: $getUserVar[yasaksbp;$mentioned[1]];;-1]]
  $onlyIf[$getUserVar[yasak;$mentioned[1]]!=no;{author:HATA!:$authorAvatar}{description:Bu Kişi Zaten Yasaklı Değil!}{color:RED}{delete:8s}]
  $onlyIf[$mentioned[1]!=;{author:HATA!:$authorAvatar}{description:Birini Etiketlemelisin!}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==liste]
  $description[
  $getServerVar[yasakl]]
  $color[RANDOM]
  $author[BotList Yasaklı Listesi]
  $endif
  $onlyIf[$hasRole[$authorID;$getServerVar[byetkili]]!=false;{author:HATA!:$authorAvatar}{description:Bu Komutu Kullanmak İçin <@&$getServerVar[byetkili]>(\`$getServerVar[byetkili]\`) Rolüne Sahip Olmalısın!}{color:RED}{delete:8s}]
  $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]`
}
