module.exports = {
  name:"sertifika",
  code:`
  $if[$message[1]==ver]
  $description[
  $username, <@$mentioned[1]>(\`$mentioned[1]\`) Adlı Kişiye Ve <@$getUserVar[botu;$mentioned[1]]>(\`$getUserVar[botu;$mentioned[1]]\`) Adlı Botuna Sertifika Verildi.]
  $color[RANDOM]
  $setUserVar[sbot;yes;$getUserVar[botu;$mentioned[1]]]
  $setUserVar[sgelistirici;yes;$mentioned[1]]
  $giveRole[$mentioned[1];$getServerVar[bsgrol]]
  $giveRole[$getUserVar[botu;$mentioned[1]];$getServerVar[sbrol]]
  $onlyIf[$getUserVar[sahiplik;$mentioned[1]]!=no;{author:HATA!:$authorAvatar}{description:Bu Kişinin Bir Botu Yok!}{color:RED}{delete:8s}]
  $onlyIf[$mentioned[1]!=;{author:HATA!:$authorAvatar}{description:Bir Kişi Etiketlemeniz Gerekiyor!}{color:RED}{delete:8s}]
  $onlyIf[$getUserVar[sgelistirici;$mentioned[1]]!=yes;{author:HATA!:$authorAvatar}{description:Bu Kişide Zaten Sertifika Var!}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==al]
  $description[
  $username, <@$mentioned[1]>(\`$mentioned[1]\`) Adlı Kişiden Ve <@$getUserVar[botu;$mentioned[1]]>(\`$getUserVar[botu;$mentioned[1]]\`) Adlı Botundan Sertifika Alındı.]
  $color[RANDOM]
  $setUserVar[sbot;no;$getUserVar[botu;$mentioned[1]]]
  $setUserVar[sgelistirici;no;$mentioned[1]]
  $takeRole[$mentioned[1];$getServerVar[bsgrol]]
  $takeRole[$getUserVar[botu;$mentioned[1]];$getServerVar[sbrol]]
  $onlyIf[$getUserVar[sahiplik;$mentioned[1]]!=no;{author:HATA!:$authorAvatar}{description:Bu Kişinin Bir Botu Yok!}{color:RED}{delete:8s}]
  $onlyIf[$mentioned[1]!=;{author:HATA!:$authorAvatar}{description:Bir Kişi Etiketlemeniz Gerekiyor!}{color:RED}{delete:8s}]
  $onlyIf[$getUserVar[sgelistirici;$mentioned[1]]!=no;{author:HATA!:$authorAvatar}{description:Bu Kişide Zaten Sertifika Yok!}{color:RED}{delete:8s}]
  $endif
  $onlyIf[$checkContains[$toLowercase[$message[1]];ver;al]!=false;{author:HATA!:$authorAvatar}{description:$username \`ver\` veya \`al\` Yazmanız Gerekiyor!}{color:RED}{delete:8s}]
  $onlyIf[$hasRole[$authorID;$getServerVar[byetkili]]!=false;{author:HATA!:$authorAvatar}{description:$username Bu Komutu Kullanabilmek İçin <@&$getServerVar[byetkili]>(\`$getServerVar[byetkili]\`) Rolüne Sahip Olman Gerekiyor!}{color:RED}{delete:8s}]
  $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]`
}
