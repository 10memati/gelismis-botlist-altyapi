module.exports = {
  name:"botlist",
  code:`
  $if[$message[1]==yetkili]
  $description[
  $username BotList Yetkili Rolü <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlandı.]
  $color[RANDOM]
  $setServerVar[byetkili;$mentionedRoles[1]]
  $onlyIf[$getServerVar[byetkili]!=$mentionedRoles[1];{author:HATA!:$authorAvatar}{description:$username BotList Yetkili Rolü Zaten <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlı!}{color:RED}{delete:8s}]
  $onlyIf[$mentionedRoles[1]!=;{author:HATA!:$authorAvatar}{description:$username Bir Rol Etiketle!}{color:RED}{delete:8s}]
    $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==bot-rol]
  $description[
  $username BotList Bot Rolü <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlandı.]
  $color[RANDOM]
  $setServerVar[brol;$mentionedRoles[1]]
  $onlyIf[$getServerVar[brol]!=$mentionedRoles[1];{author:HATA!:$authorAvatar}{description:$username BotList Bot Rolü Zaten <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlı!}{color:RED}{delete:8s}]
  $onlyIf[$mentionedRoles[1]!=;{author:HATA!:$authorAvatar}{description:$username Bir Rol Etiketle!}{color:RED}{delete:8s}]
    $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==geliştirici-rol]
  $description[
  $username BotList Geliştirici Rolü <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlandı.]
  $color[RANDOM]
  $setServerVar[bgelistirici;$mentionedRoles[1]]
  $onlyIf[$getServerVar[bgelistirici]!=$mentionedRoles[1];{author:HATA!:$authorAvatar}{description:$username BotList Geliştirici Rolü Zaten <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlı!}{color:RED}{delete:8s}]
  $onlyIf[$mentionedRoles[1]!=;{author:HATA!:$authorAvatar}{description:$username Bir Rol Etiketle!}{color:RED}{delete:8s}]
    $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==sertifikalı-g-rol]
  $description[
  $username BotList Sertifikalı Geliştirici Rolü <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlandı.]
  $color[RANDOM]
  $setServerVar[bsgrol;$mentionedRoles[1]]
  $onlyIf[$getServerVar[bsgrol]!=$mentionedRoles[1];{author:HATA!:$authorAvatar}{description:$username BotList Sertifikalı Geliştirici Rolü Zaten <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlı!}{color:RED}{delete:8s}]
  $onlyIf[$mentionedRoles[1]!=;{author:HATA!:$authorAvatar}{description:$username Bir Rol Etiketle!}{color:RED}{delete:8s}]
    $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==sertifikalı-bot-rol]
  $description[
  $username BotList Sertifikalı Bot Rolü <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlandı.]
  $color[RANDOM]
  $setServerVar[sbrol;$mentionedRoles[1]]
  $onlyIf[$getServerVar[sbrol]!=$mentionedRoles[1];{author:HATA!:$authorAvatar}{description:$username BotList Sertifikalı Bot Rolü Zaten <@&$mentionedRoles[1]>(\`$mentionedRoles[1]\`) Olarak Ayarlı!}{color:RED}{delete:8s}]
  $onlyIf[$mentionedRoles[1]!=;{author:HATA!:$authorAvatar}{description:$username Bir Rol Etiketle!}{color:RED}{delete:8s}]
    $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==log]
  $description[
  $username BotList Bot Log Kanalı <#$mentionedChannels[1]>(\`$mentionedChannels[1]\`) Olarak Ayarlandı.]
  $color[RANDOM]
  $setServerVar[blog;$mentionedChannels[1]]
  $onlyIf[$getServerVar[blog]!=$mentionedChannels[1];{author:HATA!:$authorAvatar}{description:$username BotList Bot Log Kanalı Zaten <#$mentionedRoles[1]>(\`$mentionedChannels[1]\`) Olarak Ayarlı!}{color:RED}{delete:8s}]
  $onlyIf[$mentionedChannels[1]!=;{author:HATA!:$authorAvatar}{description:$username Bir Kanal Etiketle!}{color:RED}{delete:8s}]
    $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==kanal]
  $description[
  $username BotList Bot Ekleme Kanalı <#$mentionedChannels[1]>(\`$mentionedChannels[1]\`) Olarak Ayarlandı.]
  $color[RANDOM]
$channelSendMessage[$mentionedChannels[1];{author:Bot Ekleme}{description
Bot Ekliyebilmek İçin:\`\`\`js
$getServerVar[prefix]botekle <bot id> <bot prefix> <dbl Onay Durumu onaysız/onaylı>\`\`\`

Örnek:\`\`\`js
$getServerVar[prefix]botekle $clientID $getServerVar[prefix] onaysız\`\`\`

Çıkanın Botu Atılır!}{color:RANDOM}{thumbnail:$serverIcon}]
  $setServerVar[bkanal;$mentionedChannels[1]]
  $onlyIf[$getServerVar[bkanal]!=$mentionedRoles[1];{author:HATA!:$authorAvatar}{description:$username BotList Bot Ekleme Kanalı Zaten <#$mentionedChannels[1]>(\`$mentionedChannels[1]\`) Olarak Ayarlı!}{color:RED}{delete:8s}]
  $onlyIf[$mentionedChannels[1]!=;{author:HATA!:$authorAvatar}{description:$username Bir Kanal Etiketle!}{color:RED}{delete:8s}]
    $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==bot-yetkili-log]
  $description[
  $username BotList Bot Yetkili Log Kanalı <#$mentionedChannels[1]>(\`$mentionedChannels[1]\`) Olarak Ayarlandı.]
  $color[RANDOM]
  $setServerVar[bytlog;$mentionedChannels[1]]
  $onlyIf[$getServerVar[bytlog]!=$mentionedRoles[1];{author:HATA!:$authorAvatar}{description:$username BotList Bot Yetkili Log Kanalı Zaten <#$mentionedChannels[1]>(\`$mentionedChannels[1]\`) Olarak Ayarlı!}{color:RED}{delete:8s}]
  $onlyIf[$mentionedChannels[1]!=;{author:HATA!:$authorAvatar}{description:$username Bir Kanal Etiketle!}{color:RED}{delete:8s}]
  $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Açık Değil! Açmak İçin \`\`\`js
    $getServerVar[prefix]botlist aç\`\`\`}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==aç]
  $description[
  $username BotList Sistemi Açıldı.]
  $color[RANDOM]
  $setServerVar[botlist;açık]
  $onlyIf[$getServerVar[botlist]!=açık;{author:HATA!:$authorAvatar}{description:BotList Sistemi Zaten Açık!}{color:RED}{delete:8s}]
  $endif
  $if[$message[1]==kapat]
  $description[
  $username BotList Sistemi Kapatıldı.]
  $color[RANDOM]
  $setServerVar[botlist;kapalı]
  $onlyIf[$getServerVar[botlist]!=kapalı;{author:HATA!:$authorAvatar}{description:BotList Sistemi Zaten Kapalı!}{color:RED}{delete:8s}]
  $endif
  $onlyIf[$checkContains[$message[1];kapat;aç;yetkili;log;kanal;bot-rol;sertifikalı-bot-rol;sertifikalı-g-rol;geliştirici-rol;bot-yetkili-log]!=false;{author:HATA!:$authorAvatar}{description:Doğru Kullanım: \`\`\`js
    $getServerVar[prefix]botlist kapat | aç | yetkili | log | kanal | bot-rol | sertifikalı-bot-rol | sertifikalı-g-rol | bot-yetkili-log\`\`\`}{color:RED}{delete:8s}]
  $onlyPerms[admin;{author:HATA!:$authorAvatar}{description:Bu Komutu Kullanabilmek İçin \`Yönetici\` Yetkinizin Olması Gerekiyor!}{color:RED}{delete:8s}]`
}
