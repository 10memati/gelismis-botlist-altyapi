module.exports = {
  name:"botekle",
  aliases:["bot-ekle", "add-bot", "addbot"],
  code:`
  $deletecommand
  $wait[2s]
  $addCmdReactions[✅]
  $channelSendMessage[$getServerVar[blog];
  <@$authorID>
  {author:Yeni Bir Bot Eklendi:$userAvatar[$message[1]]}{description:
    Bot ID - \`$message[1] / $userTag[$message[1]]\`
    
    Bot Prefix - \`$message[2]\`
    
    DBL Onay Durumu - \`$message[3]\`
    
    Ekleyen - \`$authorID / $userTag\`
    
    Bot Sırası - \`$getServerVar[tbsayi]\`}{color:RANDOM}]
    $channelSendMessage[$getServerVar[bytlog];
    <@&$getServerVar[byetkili]>{author:Yeni Bir Bot Eklendi:$userAvatar[$message[1]]}{description:
      Eklenen Bot - \`$userTag[$message[1]] / $message[1]\`
      
      Bot Prefix - \`$message[2]\`
      
      DBL Onay Durumu - \`$message[3]\`
      
      Ekleyen Kişi - \`$userTag \ $authorID\`
      
      Bot Sırası - \`$getServerVar[tbsayi]\`

[Botu Ekle]($replaceText[$getBotInvite;$clientID;$message[1];0])}{color:RANDOM}{footer:Kabul Etmek İçin Botu Sunucuya Ekleyin, Reddetmek İçin $getServerVar[prefix]reddet}]
      $onlyIf[$memberExists[$message[1]]!=true;{author:HATA!}{color:RANDOM}{description:
        \`$userTag[$message[1]]\` Adlı Bot Sunucuda Zaten Ekli!}{delete:5s}{deletecommand}]
        $onlyIf[$checkContains[$toLowercase[message[3]];onaysız;onaylı]!=false;{author:HATA!}{color:RANDOM}{description:
        \`$userTag[$message[1]]\` Adlı Botun DBL Onay Durumunu \`Onaysız\` Veya \`Onaylı\` Olarak Girin!}{delete:5s}{deletecommand}]
        $onlyIf[$message[3]!=;{author:HATA!}{color:RANDOM}{description:
        \`$userTag[$message[1]]\` Adlı Botun DBL Onay Durumunu Girin, \`Onaysız\` veya \`Onaylı\`}{delete:5s}{deletecommand}]
        $onlyIf[$message[2]!=;{author:HATA!}{color:RANDOM}{description:
        \`$userTag[$message[1]]\` Adlı Botun Prefixini Girin!}{delete:5s}{deletecommand}]
        $setUserVar[bot;yes;$message[1]]
$setUserVar[bprefix;$message[2];$message[1]]
$setUserVar[bdbl;$message[3];$message[1]]
        $setServerVar[tbsayi;$math[$getServerVar[tbsayi]+1]]
$setGlobalUserVar[sahip;$authorID;$message[1]]
$setUserVar[sahiplik;yes]
$setUserVar[botu;$message[1]]        $onlyIf[$isBot[$message[1]]!=false;{author:HATA!}{color:RANDOM}{description:
        \`$userTag[$message[1]]\` Adlı Kullanıcı Bot Değil!}{delete:5s}{deletecommand}]
        $onlyIf[$message[1]!=;{author:HATA!}{color:RANDOM}{description:
        Botunuzun ID'sini Girin!}{delete:5s}{deletecommand}]
$onlyForChannels[$getServerVar[bkanal];{author:HATA!}{color:RANDOM}{description:
Bu Komutu <#$getServerVar[bkanal]> Kanalında Kullanın!}{delete:5s}{deletecommand}]
$onlyIf[$getServerVar[bgelistirici]!=yok;{author:HATA!:$authorAvatar}{description:Bot Geliştirici Rolü Ayarlı Değil!}{color:RED}{delete:8s}]
$onlyIf[$getServerVar[brol]!=yok;{author:HATA!:$authorAvatar}{description:Bot Rolü Ayarlı Değil!}{color:RED}{delete:8s}]
$onlyIf[$getServerVar[]!=yok;{author:HATA!:$authorAvatar}{description:Bot Yetkili Log Kanalı Ayarlı Değil!}{color:RED}{delete:8s}]
$onlyIf[$getServerVar[byetkili]!=yok;{author:HATA!:$authorAvatar}{description:Bot Yetkili Rolü Ayarlı Değil!}{color:RED}{delete:8s}]
$onlyIf[$getServerVar[bkanal]!=yok;{author:HATA!:$authorAvatar}{description:Bot Ekleme Kanalı Ayarlı Değil!}{color:RED}{delete:8s}]
$onlyIf[$getServerVar[blog]!=yok;{author:HATA!:$authorAvatar}{description:Bot Log Kanalı Ayarlı Değil!}{color:RED}{delete:8s}]
$onlyIf[$getUserVar[yasak]!=yes;{author:HATA!:$authorAvatar}{description:$userTag \`$getUserVar[yasaksbp]\` Sebebiyle BotList Yasaklıları Arasında Yer Alıyorsunuz Bu Yüzden Bot Ekleyemezsiniz!}{color:RED}{delete:8s}]
$onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]`
}
