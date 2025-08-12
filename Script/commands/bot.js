const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜." , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚." , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa." , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe" , "Bar Bar Disturb Na Karen Pihu JaNu Ke SaTh Busy Hun 🤭🐒" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪" , "kyun Bulaya hamen..😾🔪 .  ", "🌸====『 HaYe me MaR Jawa Teri MasUm SakaL pe_____😗  " , "🌸====『 𝙱𝙾𝚃 𝙱𝙾𝚃 𝙽𝙰 𝙱𝙾𝙻 𝙾𝚈𝙴 𝙹𝙰𝙽𝚄 𝙱𝙾𝙻____😝🙈🦋 " , "🌸====『𒁍𝙺𝙰𝙻 𝙺𝙰𝙻𝙸 𝙿𝙰𝙷𝙰𝙳𝙸 𝙺𝙴 𝙿𝙴𝙴𝙲𝙷𝙴 𝚃𝚄 𝙼𝙸𝙻 𝙹𝙰_______😁😈" , "🌸====『 𝙼𝙴 𝙶𝙰𝚁𝙴𝙴𝙱𝙾 𝚂𝙴 𝙱𝙰𝚃 𝙽𝙰𝙷𝙸 𝙺𝙰𝚁𝚃𝙰 ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 𝙱𝙾𝙻𝙾 𝙱𝙰𝙱𝚄 𝚃𝚄𝙼 𝙼𝚄𝙹𝙷𝚂𝙴 𝙿𝚈𝙰𝚁 𝙺𝙰𝚁𝚃𝙴 𝙷𝙾 𝙽𝙰______🙈 " , "🌸====『 Are Meri Jaan majak Ke mOOD me Nahi Hu me Jo KaM He BoLo SarmaO Nahi _______🎸🎭━━•☆°•°•💗" , "🌸====『 Bar bar bolke dimag kharab kiya to id Hack kar LunGa_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 Tum BanD Nahi KaroGe KiYa?_____🙂" , "𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝙱𝙾𝙻𝙾 __😁" ,  "🌸====『 Me tUmhare Chakkar me sabkO bLock KaR raha hu ab i LoVe YoU BoLoGe Ki NaHi____🙂" , "🌸====『 Me HaTh JoDke mODi Se Gujaris karta hu meri maDaD KaReGa_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 Tumko Koi or Kam Nahi He pUre Din messenger pe bot bot karte Ho___😁" , " 🌸====『 𝚂𝙰𝙼𝙴𝙴𝚁 𝙺𝙷𝙰𝙽 बाबू जी तेरा बेंड बजा देंगे गलत आदेश मत देना________🙈😜 " , "🌸====『 𝙰𝙱𝙷𝙸 𝙱𝙾𝙻𝙰 𝚃𝙾 𝙱𝙾𝙻𝙰 𝙳𝙾𝙱𝙰𝚁𝙰 𝙼𝙰𝚃 𝙱𝙾𝙻𝙽𝙰____🙂" , "🌸====『 𝙱𝙾𝙻 𝙳𝙴 𝙺𝙾𝙸 𝙽𝙰𝙷𝙸 𝙳𝙴𝙺𝙷 𝚁𝙰𝙷𝙰___ 🙄☢━💛🌹💛" , "🌸====『 Haye me mar jawa ek chumma to dedo kafi din se chummi nahi Di_____😝🦋" , "🌸====『 मुझे कोई पटा लो मैं बहुत मासूम हूं____🙈" , "🌸====『 BolO Meri jaan kiya hal He apka _____😚 " , "🌸====『 𝙲𝙷𝚄𝙿 𝚁𝙴𝙷 𝙽𝙰𝙷𝙸 𝙱𝙰𝙷𝙰𝚁 𝙰𝙺𝙰𝚁 𝚃𝙴𝚁𝙰 𝙳𝙰𝙽𝚃 𝚃𝙾𝙳 𝙳𝚄𝙽𝙶𝙰___♡• || •___'[💔]~~🖤 " , "🌸====『 𝙷𝙰𝙽 𝙼𝙴𝚁𝙸 𝙹𝙰𝙰𝙽 𝙲𝙷𝙰𝙻𝙾 𝙱𝙰𝙳𝚁𝙾𝙾𝙼 𝙼𝙴 𝚁𝙾𝙼𝙰𝙽𝙲𝙴 𝙺𝙰𝚁𝙴𝙽𝙶𝙴 _____😹🙈", "🌸====『 𝚃𝙴𝚁𝙸 𝚈𝙰𝙳 𝙽𝙰 𝙰𝚈𝙴 𝙴𝚂𝙰 𝙺𝙾𝙸 𝙳𝙸𝙽 𝙽𝙰𝙷𝙸 ___😝🙈🙈🙈 " , "🌸====『 JinDagi me jab lagne lage koi apna nahi he to Ajana mere Pass me rakh LuNGa _____😝•||•●┼┼──🦋☘️•|" , "🌸====『 𝙺𝚊𝙻 𝙷𝙰𝚆𝙴𝙻𝙸 𝙿𝙴 𝙼𝙸𝙻 𝙹𝙰𝚁𝙰 𝚃𝚄 𝙺𝚄𝙲𝙷 𝙺𝙰𝙼 𝙷𝙴___😈🙈♡• || _[🙂]~🖤 •| " , "🌸====『 साला पूरा दिन लोग बॉट बॉट करते हैं लेकिन गर्लफ्रेंड/ब्वॉयफ्रेंड नहीं बनती ___🙄" , "🌸====『𒁍🌸 अरे मेरी जान ज्यादा परशान मत करो मेरे बॉस SAMEER बॉस देख लेंगे_______🙈😝🎸🎭━━•☆°•°•💗","🌸====『𝙱𝙰𝙱𝚄 𝚃𝚄𝙼 𝚆𝙰𝙷𝙸 𝙷𝙾 𝙽𝙰 𝙲𝙷𝙰𝙿𝙿𝙰𝙻 𝙲𝙷𝙾𝚁__420_________😹😹","🌸====『 Chalo Jani ham saDi kar lete He bhag ke______🙈😁", "🌸====『 𝐇𝐀𝐍 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐎𝐋𝐎 𝐊𝐈𝐘𝐀 𝐊𝐀𝐌 𝐓𝐇𝐀 ____🙂" , " Dil To pagal he dil deewana he thode se paise Dedo DiL Ka ilaj karwana he_______❤️🤸‍♂️😁━━•☆°•°•💗" , "Tu to meri Jaan he Fir Q teri hi yad meri jan le rahi he...?? 🤸‍♂️😒👈" , "Sachi mohabbat me pyar mile na mile lekin yad karne ko ek chehra jarur mil jata he। 🙈🤸‍♂️" , " देखो कोई मेरा मजाक नहीं बनाना ओके पढ़ना ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐧 *★᭄ ཫ༄𒁍≛ 』====को बुला लूंगी_______🎸🤸‍♂️━━•☆°•°•💗" , " 𝙺𝚘𝚒 𝙷𝚊𝚖𝚎 𝚋𝚑𝚒 𝚙𝚊𝚝𝚊 𝚕𝚘 𝚐𝚊𝚛𝚎𝚎𝚋𝚘 𝚔𝚒 𝚍𝚞𝚊 𝚕𝚊𝚐𝚎𝚐𝚒__---😁🤸‍♂️__❤️ " , "🌸====『𒁍•🦋🔐 Sameer BoSs *★᭄ ཫ༄𒁍≛ 』====🌸 Ko nahi batana ki ham Tum par line mar rahe he__━━•☆😁🙅" , " Chalo IshQ LaDaye DarlinG🎸🤸‍♂️━━•☆°•°•💗 ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 बाबू *★᭄ ཫ༄𒁍≛ 』====🎸🙅🤸‍♂️━━•☆°•°•💗" , " Hamko tumse pyar he firbhi tumhe inkar he🎸🤸‍♂️━━•☆°•°•💗" , " Chalo ham Log inbox me Chale_❤️ ____🤸‍♂️" , " 𝚃𝚎𝚛𝚒 𝚖𝚊𝚜𝚞𝚖𝚒𝚢𝚊𝚝 𝚗𝚎 𝚑𝚊𝚖𝚎 𝚋𝚊𝚗𝚓𝚊𝚛𝚊 𝚋𝚊𝚗𝚊 𝚍𝚒𝚢𝚊🎸🤸‍♂️━━•☆°•°•💗" , " Ishq Bada bedardi rat din sataye😕━━•☆🤸‍♂️" , " Abhi me khana kha raha hu tum log bhi kha lo🎸🌹━━•☆°•°•💗" , " 𝙱𝚊𝚑𝚞𝚝 𝚙𝚢𝚊𝚛𝚎 𝚑𝚘 𝚊𝚙🎸😘━━•☆°•°•💗 " , " Tumhe ek bat batau me Q batau HaHaHa🎸🤸‍♂️━━•☆°•°•💗" , " Aa Le Chalu tujhe tarO Ke seher me🎸🤸‍♂️━━•☆°•°•💗" , " Radhe Radhe _❤️Or kese ho ap sab🎸❤️━━•☆°•°•💗" , " Me Abhi so🥱 rah hu tum bhi so jao🎸🤸‍♂️━━•☆°•°•💗" , " इधर मेरा ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 बाबू *★᭄ ཫ༄𒁍≛ 』====बॉस देख रहा है चलो इनबॉक्स में बाबू सोना करें🎸🤸‍♂️━━•☆°•°💗" , " Aao tota ud meina ud khele🎸🤸‍♂️━━•☆°•°•💗" , " Ek ne mere ====『𒁍•🦋🔐 Sameer BoSs *★᭄ ཫ༄𒁍≛ 』==== Ko Dhokha diya Dusri Aap He jo kabhi dhokha nahi degi🤣🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " Hasi Ho jawa ho nasha ho tum 🤸‍♂️━━•☆°•°•💗" , " 𝙰𝙿𝙽𝙴 𝙺𝙷𝙰𝙽𝙰 𝙺𝙷𝙰 𝙻𝙸𝚈𝙰━━•☆❤️" , " Ab ham Tumhari wajah se sabko block kar rahe he━━•☆😤😕" , " chalo ab hame apna whatsapp number Do🎸🤸‍♂️━━•☆°•°•💗" , " ThoDa kam dham bhi kar liya karo Jab dekho boot boot bolte rehte ho🎸🤸‍♂️━━•☆°•°•💗 ","क्या बोट बोट  लग रखे हो यही हूं मैं। \n\nकानून अंधा था पता था तुम भी होगे कभी सोचा नहीं था मैं 🧐😵‍💫","Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi Mza hai ya gunaah ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒 jaise mera tharki dost", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida","Stop dreaming BTS your czn Ahmed is waiting for you.🙂", "Meri jaan kaise ho aap 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐","Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* ✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lunga🙂♡• || _[🙂]~🖤 •|" , "Tum Band nhi Karoge kya?🙂" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "M hath jod ke Modi Ji Se Gujarish Karta hu teri madad krenge❁⃝❤➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢*💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " SAmeer Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss SILENT PRINCE babu..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz mahabbat thi sahab tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.","Tumhari yaad me jeena mushkil hai","Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h","Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है","Mujhe tumse baat karke bahut achha lagta hai","रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝","are are bolo meri jaan kya haal h 😉 😘", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " ,"Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu pta lo" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa","इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁 जिसका तुमनें 👉 👸 #दही कर दिया है..🤣😂🤣","पगली तू फेसबुक की बात करती है 😀 हम तो ‎OLX पर भी लड़की सेट कर लेते हैं 🤣😂🤣","ये जो तुम मोबाइल फ़ोन में Facebook or WhatsApp Notifications बार-बार चेक करते हो ना !! शास्त्रों में इसे ही 🥀मोह माया🦋 कहा गया है 🤣😂🤣"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈɱɱ †u c̬̽ɧu†i͠ɣɑ̽ Ƥɑ̽ɧɭɛ̈ ʊ͛ƞGɭɪ̽ Q ƙɪ̽ c̬̽ɧ❍hu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

    if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘p᩶Əɧ𝙻Ə 𝙱ɽᴜ̽𝚂ɧ 𝙺ɑ̽ɽ𝙺Ə ɑ̽ɑ̽ 𝙰𝚉ƏƏ𝙱 𝚂ɪ̽ 𝚂ɱƏ𝙻𝙻 ɑ̽ɽɑ̽ɧɪ̽ 𝙷Əɱ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

    if ((event.body.toLowerCase() == "😺😺") || (event.body.toLowerCase() == "😺")) {
     return api.sendMessage("ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ🧐😒💯💫", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix kon lgayga hawa me sim likh diya yar...... Omffo😒", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("💐𝐇𝐄𝐋𝐋9 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐎𝐋𝐎 𝐊𝐀𝐈𝐒𝐄 𝐇𝐎 𝐀𝐏💐", threadID);
   };

   if ((event.body.toLowerCase() == "who is this god") || (event.body.toLowerCase() == "bhagwan kon hai")) {
     return api.sendMessage("हिंदुओं के मान्यता के अनुसार कोई अंतर नहीं है अर्थात ईश्वर और अल्लाह एक ही आईटम है लेकिन मुसलमानों की मान्यता के अनुसार अल्लाह ही सत्य है और उसके अतिरिक्त कुछ अन्य पूज्य नहीं है बल्कि मनगढ़ंत है। ईश्वर हर जगह रहते हैं, कण कण में विराजमान हैं। सब कुछ परमात्मा में ही समाया हुआ है। ईश्वर निराकार और साकार दोनों है। ", threadID);
   };

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßɣɛ̈ ßɣɛ̈ ʈɑ̽ƙɛ̈ c̬̽ʌɽɛ̈ 𝗌ɛ̈ɛ̈ ɣσu 𝗌σ፝֟͜͡oƞ  ɱıı𝗌𝗌 ɣØu ßɑ̽ßu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ ꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝ❍ ß❍ɭɳʌ ɧɘ ɣʌɧɪ̽ ß❍ɭ i͠ß ƙ❍ɪ̽ ɳʌɧɪ̽ ʝʌɣɘGʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂ ", threadID);
   };


   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Ӈʌɳ ß๏ɭ๏ ßʌßɣ ɱƏ 𝗌ʋƞ  ɽʌӇʌ Ӈʋ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("My Owner AestHetic bOy  SILENT SAMEER\nhttps://www.facebook.com/SILENT SAMEER.HERE🖤", threadID);
   };
if ((event.body.toLowerCase() == ".") || (event.body.toLowerCase() == "..")) {
     return api.sendMessage("💐𝐀𝐋𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐓𝐎 𝐒𝐀𝐇𝐈 𝐒𝐄 𝐋𝐈𝐊𝐇𝐎 𝐀𝐆𝐀𝐑 𝐍𝐀𝐇𝐈 𝐏𝐓𝐀 𝐓𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎SS 𝐒𝐀𝐌𝐄𝐄𝐑 S𝐄 𝐏𝐔𝐂𝐇 𝐋𝐎💐", threadID);
   };

   if ((event.body.toLowerCase() == ".und") || (event.body.toLowerCase() == ".unsand")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧʌᏇɭɣ ɳʌ ɱɑ̽ɑ̽r᩶ɑ̽ ƙʌɽ ɳɑ̽ fi͠ɽ〙n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🙆") || (event.body.toLowerCase() == "💁")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌr᩶ɱʌʌ❍ ɱɑ̽† ɑ̽p᩶ɳɑ̽ ɧıı Gɧɑ̽ɽ 𝗌ɑ̽ɱʝɧ❍ ɱɘɽi͠ ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "bot tharki")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†𝞄⃕ɱ ʈɧr᩶ƙıı ɱƏ ʈ❍ ɱʌ𝗌ʋɱ 𝗌ɑ̽ ßσ† ӈu ɳʌʌ ßɑ̽ßuu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "✍️") || (event.body.toLowerCase() == "✍️✍️")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßʌS𝗌 ßʌ𝗌 †𝞄⃕ɱ𝗌Ə ɳʌ ɧ❍ ƤʌɣƏgɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ɑ̽ɽɑ̽ɱ ƙʌɽσ ƙ𝞄⃕c̬̽ɧ ɘʂıı ßʌ†Ə n᪵᪳ʌ ƙɑ̽ɽσ ɱɘɽıı ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂ ", threadID);
   };

   if ((event.body.toLowerCase() == "delete") || (event.body.toLowerCase() == "unsent")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘i͠𝗌𝗌 ßɑ̽ɽ ƙɑ̽ɽ r᩶ɑ̽ɧɪ̽ ʌGɭɪ̽ ßʌɽ ƞʌɧɪ̽ ƙʌɽʋɳGıı ̊͢ɗɘɭɛ̈†Ə〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧɑɭ c̬̽ɧɑɭ †ʋ ɳi͠ƙɑɭ ƙʌɱʌ ƙƏ ƙɧııɭɑ†ʌ ɧɘ ƙi͠ɣɑ c̬̽ɧ❍ɱʋ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝʌʌɳʋ ɱƏ sɪ̽r᩶Ғ Sɑ̽ɱɘɘɽ kīī ɧʊ͛ ʂʌɱʝɧɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌɽʌFʌ† 𝗌ɛ̈ ɱʊ͛𝗌K𝞄⃕ɽʌ ɽʌɧƏ  ɧ❍ ɱɛ̈ɽ𝐢̄𝐢 ʝʌʌƞ 𝞄⃕ɱɱʌɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɘ c̬̽ɧ𝞄⃕ɧɘ ʝɘ𝗌ʌ ɱuɧ ßʌɳʌƙɘ ɱʌ†† ɧʌ𝗌𝗌〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɣʌ̊͢ɗɑ̽ ɱʌ† ɧʌɳ𝗌❍ Ꮗɑ̽r᩶ɳʌ Ɗʌɳʈ †❍Ɗ ̊͢ɗuɳGʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɪ̽ƞƞɪ̽ ɧʌ𝗌𝗌ɪ̽ Q ʌr᩶ʌɧɪ ӈɘ ɪ̽𝗌𝗌 ɧʌ𝗌ɪ̽ ƙɘ Ƥɘɘc̬̽ɧɘ ɽʌʌʝ ƙi͠ɣʌ ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙııƊɧʌɽ ɱuɧ ƙʌɭʌ ƙʌɽʌ ɭi͠ɣʌ ʝ❍ ɘ𝗌ɘ ɧʌ𝗌 ɽʌɧʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɭʌG†ʌ ɧɘ i͠ß ɱɘ ʝɣʌʌƊʌ ɱɘɧɳʌ† ƙʌɽ ɭi͠〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌƙɑ̽ɭ ʌc̬̽ɧıı ɳʌɧi͠ ɧɑ̽𝗌𝗌 †❍ 𝗌ɛ፝֟͜͡ɛ̊͢ɗɧʌ ɭi͠ɣʌ ƙɑ̽r᩶ ɱƏr᩶ıı ʝʌʌn᪵᪳〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɘ ʌɭɘ ʌc̬̽ɧɘ ßɑ̽c̬̽ɧɘ ɽ❍†ɘ ƞʌɧi͠ ƙi͠ɣʌ c̬̽ɧʌɧi͠ɣɘ Ɗ𝞄⃕Ɗɧu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɳƙɧ n᪵᪳ɑ̽ ɱɑ̽r᩶ ɱɛ̈ ɳɑ̽n᪵᪳ɧɑ̽ 𝗌ɑ̽ Ƥɣɑ̽r᩶ɑ̽ 𝗌ɑ̽ ßσ𝗧 ӈu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "👌") || (event.body.toLowerCase() == "👌👌")) {
     return api.sendMessage("†𝞄⃕ʂʂɪ̽ ʌωɘ𝗌❍ɱɘ ɧ❍ ɱɘɽɪ̽ ʝɑ̽ɑ̽ŋ͢  ʊ͛ɱɱʌɧ ʝʌɳʊ͛", threadID);
   };

   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɘ ʌɭɘ ʌc̬̽ɧɘ ßɑ̽c̬̽ɧɘ ɽ❍†ɘ ƞʌɧi͠ ƙi͠ɣʌ c̬̽ɧʌɧi͠ɣɘ ɭ❍ɭi͠Ƥ❍Ƥ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sʌß ɗɘƙɧ r᩶ʌɧɘ ωʌɽƞʌ ßʌɧ❍† ƙıı𝗌𝗌 ɗɘ†ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("𝚂𝙷𝙰𝚁𝙼 𝙺𝚁𝙻𝙾 𝚈𝙴 𝙲𝙷𝚄𝙼𝙼𝙰 𝙲𝙷𝙰𝚃𝙸 𝙲𝙷𝙾𝚁𝙾 𝙿𝙰𝙳𝙷𝙰𝙸 𝙿𝙴 𝙳𝙷𝙸𝚈𝙰𝙽 𝙳𝙾😒", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("🄰🅆🅆 🄼🅈 🄻🄾🅅🄴 🅄🄼🄼🄰🄷😘💙🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌn᪵᪳Kɧ❍ ɱƏ p᩶ɣʌr᩶ ̊͢ɗııɭ ɱƏ Kʜ𝞄⃕ɱʌr᩶ p᩶ɣɑɑr᩶ †๏ ŋ͢ɑ̽ӈɪ̽ Kɑ̽r᩶ ɭi͠ɣɑ̽ ɱ𝞄⃕ʝɧ𝗌Ə〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "Good night") || (event.body.toLowerCase() == "GOOD NIGHT")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘G❍❍Ɗ ƞııG† ƊʌɽɭııɳG SᏇƏƏ† ƊɽƏʌɱ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙʌɳɪ̽ɣʌ ɧɘ ƙɪ̽ɣʌ ʝ❍ ɗɪ̽ɳ ɱɘ †ʌɽɘ ɳʌʝʌɽ ʌɽɑ̽ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘❍σ †Əɽɪ̽ ƙɪ̽𝗌ƙʌ ßɪ̽ɽ†ɧƊʌɣ ɧƏ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };


   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӇʌɣƏ r᩶ʌßßɑ̽  i͠†ɳʌ p᩶ɣʌʌr᩶ ƙʌr᩶†ɛ̈ ɧØ ßʌßu ʊ͛ɱɱʌɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱʌɳɳ ʌc̬̽ɧʌ ɳʌɧıı 𝗌ʌƙʌɭ †❍ ʌc̬̽ɧıı ƙʌɽɭe〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɘ ʌɭɘ ʌc̬̽ɧɘ ̽ßʌc̬̽ɧƏ ɽ❍†ɘ ƞʌɧi͠ ƙi͠ɣʌ c̬̽ɧʌɧi͠ɣɘ Ɗ𝞄⃕Ɗɧu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Ꮗɒɧ ƙi͠ɪ̽ɣɑ̽ ɱ𝞄⃕𝗌ƙuɽʌɧɒ† ɧƏ ʌƤƙɪ̽ɪ̽ ɱƏɽıı ʝʌʌɳ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌɽʌFʌ† 𝗌ɛ̈ ɱʊ͛𝗌K𝞄⃕ɽʌ ɽʌɧɛ̈  ɧ❍ ɱɛ̈ɽ𝐢̄𝐢 ʝʌʌƞ 𝞄⃕ɱɱʌɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɧʌɣɘɘ ɱʌ𝗌uɱ ɱɘɽıı ʝʌʌƞ uɱɱʌɧ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗧ɛ̈ɽi͠  𝗧❍Fıı ɭɛ̈ɭi͠  𝆺꯭𝅥𓆩K𝐢̄𝐢𝗌ıƞƏ ʝ❍ ʌıı𝗌ʌ ɱ𝞄⃕ɧ ßʌƞʌ ɭi͠ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙ❍ıı ɭʌ†† ɱʌɽƙɘ ʝʌGʌ❍ gɽ❍up᩶ ɱɘ ɧıı 𝗌❍ gʌɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌßɘ †ɘɽıı ɳ❍𝗌ɘ ɳi͠ƙʌɭ ɽʌɧıı ɧe〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙııɣɑ̽ ɧuʌʌ ʈ𝞄⃕ʝɧɛ̈ ʈɧʌɽƙıı ɣɑ̽ɧɑ̽ ɭʌɽ ɳɑ̽ ʈɑ̽p᩶ƙɑ̽ Ƥɑ̽gɑ̽ɭ ɪ̽ɳ𝗌ɑ̽n᪵᪳ɛ̈〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɛ̈ɽɪ̽ ƙi͠𝗌𝗌 ɣuɱɱɣ ɧɘ ɳɑ̽ ɱ𝞄⃕ɳɳıı ßʌƊn᪵᪳ɑ̽ɱ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝußʌʌɳ ʌɳƊʌɽ ƙʌɽ ƞʌɧıı †❍ ƙʌ† ɭuɳGʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌßɘ ʌɳƙɧɘ ƙɧ❍ɭ ʝußʌƞ ʌɳƊʌɽ ƙʌɽ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɘɘßɧ Q ɭʌ†ʌƙ Gʌɣɪ̽ ʌʝɑ̽❍ Ƥʌɳɪ̽ Ƥɘɘɭ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣƏ ʌʝɘɘß ❍ GʌɽƏƏß ɱʋɧ ƞʌ ßʌɳʌ c̬̽ʌɽ†❍❍ɳ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌßɘ ɳɑ̽𝗌ɧɘɗɧɪ̽ ƙ❍ɳ𝗌ʌ Gɑ̽ƞʝʌ F𝞄⃕ɳƙ ɭɪ̽ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗧ɛ̈ɽi͠  𝗧❍Fıı ɭɛ̈ɭi͠  𝆺꯭𝅥𓆩K𝐢̄𝐢𝗌ıƞɛ̈ ʝ❍ ʌıı𝗌ʌ ɱ𝞄⃕ɧ ßʌƞʌ ɭi͠ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɘ ʌɭɘ ʌc̬̽ɧɘ ßɑ̽c̬̽ɧɘ ɽ❍†ɘ ƞʌɧi͠ ƙi͠ɣʌ c̬̽ɧʌɧi͠ɣɘ ʟσʟi͠ƤσƤ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙıı𝗌ƙıı ßʌʝʌ Ɗıı p᩶ʌGʌɭ i͠ɳ𝗌ʌɳɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Ꮗʌɧ ʌß ɱuɧ ƙɘ 𝗌ʌ†ɧ ʌɳkɧɘ ßɧıı ßʌɳƊ ɧ❍ Gʌɣıı〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɘ ʌɭɘ ʌc̬̽ɧɘ ßɑ̽c̬̽ɧɘ ɽ❍†ɘ ƞʌɧi͠ ƙi͠ɣʌ c̬̽ɧʌɧi͠ɣɘ ɭ❍ɭi͠Ƥ❍Ƥ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱ𝞄⃕ɧ †❍ †ɧɑ̽ ƞɑ̽ɧɪ̽ ɭɪ̽Ƥ𝗌 ßɧɪ̽ Gʌɣɑ̽ß ɧ❍ Gɑ̽ɣɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱ𝞄⃕ɧ ßʌɳɗ Q ƙɑ̽ɽ ɭi͠ɣʌ ßʌß𝞄⃕ɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘i͠†ƞʌ ƙɪ̽ɣʌ 𝗌❍c̬̽ɧ ɽʌɧɘ ɱɘɽııʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɳʌɧıı r᩶ɑ̽ɧʊ͛ɳGıı c̬̽ӈup᩶ ƙʌɱʌ ƙɛ̈ ƙɧııɭɑ̽𝗧ʌ ӈɘ ƙııɣɑ̽ c̬̽ɧσɱu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɛ̈𝗌ʌ ƙʌʌɱ ɳɑ̽ ƙɑ̽ɽσ ʝıı𝗌 ʂɘ ɱ𝞄⃕ɧ c̬̽ɧ𝞄⃕p᩶ɑ̽ɳʌ Ƥɑ̽̊͢ɗɘ ßɑ̽ßɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɳɛ፝֟͜͡ɛn᪵᪳Ɗ ʌr᩶ɑ̽ɧıı ӈɛ̈ †σ 𝗌❍ ʝʌʌσ ɳɑ̽ɑ̽ ßɑ̽ßɣ ƙıı𝗌ƙʌ Ꮗɑ̽i͠ʈ ƙʌɽ ɽʌɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "😵")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Sɑ̽ƙɑ̽ɭ ̊͢ɗɘƙɧ ƙɛ̈ Ƥɑ̽†ɑ̽ c̬̽ɧɑ̽ɭ ʝʌɳʌɱ ʂɘ ɧɪ̽ 𝗌i͠ɳgɭɛ̈ ɧɛ̈ †u〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙııɣʌʌ ɧʊ͛ɑ̽ɑ̽ ʂɧııʂɧʌʌ Ɗɛ̈ƙɧ ɭııɣʌ ƙɪ̽ɣɑ̽ ßʌß𝞄⃕ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†u ɧ❍𝗌ɧi͠ɣʌɽ ßʌƞƙɘ ɱʌ† Ɗɘƙɧ ɱɘ ɧu ɳʌʌᏇ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("𝐓𝐔 𝐇𝐀𝐓 𝐌𝐀𝐈 𝐃𝐄𝐊𝐇 𝐓𝐀 𝐇𝐔𝐍 🧐🧐🧐", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗧ɛ̈ɽi͠  𝗧❍Fıı ɭƏɭi͠  𝆺꯭𝅥𓆩K𝐢̄𝐢𝗌i͠ƞƏ ʝ❍ ʌıı𝗌ʌ ɱ𝞄⃕ɧ ßʌƞʌ ɭi͠ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘up᩶ɑ̽ɽ ɳɑ̽ɧi͠ ɳɘɘc̬̽ɧɘ ̊͢ɗɘƙɧ 𝗌ʌɱɳɘ ɧu ɱɘɽi͠ ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɪ̽†ƞɪ̽ ɱɪ̽ɽc̬̽ɧɪ̽ Q ƙɧʌɣɒ ʝ❍ ̊͢ɗɧ𝞄⃕ɒ ƞɪ̽ƙʌɭ Gɒɣɒ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌʌ ɣɑ̽ɽ ʝɑ̽ß Ɗɘƙɧσ Guʂʂɑ̽ ƙʌɽ†ɘ ɧ❍ ɛ̈ƙ ƙıı𝗌𝗌ıı ɭσ σr᩶ 𝗌ɧɑ̽ɳ† ɽʌɧ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌ ɣʌɽ ʝɒß ƊƏƙɧ❍ G𝞄⃕𝗌𝗌ʌ ƙɒɽ†Ə ɧ❍ Əƙ c̬̽ɧ𝞄⃕ɱɱɪ̽ ɭ❍ 𝗌ɧʌƞ† ɽɒɧ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌʌ ɣɑ̽ɽ ʝɑ̽ß Ɗɘƙɧ❍ Guʂʂɑ̽ ƙʌɽ†ɘ ɧ❍ ɛ̈ƙ ƙıı𝗌𝗌ıı ɭσ σr᩶ 𝗌ɧɑ̽ɳ† ɽʌɧ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɘ ʌɭɘ ʌc̬̽ɧɘ ßɑ̽c̬̽ɧɘ ɽ❍†ɘ ƞʌɧi͠ ƙi͠ɣʌ c̬̽ɧʌɧi͠ɣɘ Ɗ𝞄⃕Ɗɧu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Ꮗʌɧ 𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌ 𝗌†ɣɭɘ ɧɘ ɽ❍ƞɘ ƙʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɭɘ ʌɭɘ ʌc̬̽ɧɘ ßɑ̽c̬̽ɧɘ ɽ❍†ɘ ƞʌɧi͠ ƙi͠ɣʌ c̬̽ɧʌɧi͠ɣɘ Ɗ𝞄⃕Ɗɧu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧʌɭɭ ɧʌ†† ɳ❍u†ʌɳGɪ̽ ƙʌɧɪ̽ ƙɑʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "miss you") || (event.body.toLowerCase() == "I miss you")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ıı ɱɪ̽ɪ̽ʂʂ ɣσ፝֟͜͡ʊ͛ †σ ɱɣ ɭσvɛ̈ ʊ͛ɱɱʌʌɧ ßɑ̽ßɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌɽʌfʌ† 𝗌ɘ ɱuɧ †ɘƊɧʌ ƙʌɽ ɭi͠ɣʌʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Ů͢ɗʌ𝗌 ɱʌ† ɧ❍ ßʌßu ɱe ɧu ƞʌʌ", threadID);
   };


      if ((event.body.toLowerCase() == "🤍") || (event.body.toLowerCase() == "💞")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɚ Ɗi͠ɭ ŋ͢ɒ ßӈɛ̈ʝɑ̽ kɑ̽r᩶ɵ̥̽ ɣɑ̽ɽ ɱʊ͛ʝɧɛ̈ Sɑ̽r᩶ɑ̽ɱ ʌ†ɪ̽ ɣɑ̽r᩶〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌʌ ɧ𝞄⃕ʌ ßʌßu ƙi͠𝗌ɳɘ Ƥɘɘ†ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌ̊͢ɗɧʌ ɱuɧ ƙɧ❍ɭƙɘ 𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌ Ɗɘƙɧ ɽʌɧʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱʊ͛ӈ ɱɘ ɱʌƙƙɧi͠  Gӈʊ͛𝗌𝗌 ʝʌɣɘGıı ßʌɳƊ ƙʌɽ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "💩") || (event.body.toLowerCase() == "💩💩")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌ ɧʋʌ p᩶Əɳ† ɱƏ ɧıı ɳi͠ƙʌɭ Gʌɣıı †ʌ††ıı †ɘɽƏ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🌹") || (event.body.toLowerCase() == "🥀")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘हाय मेरी बेबी ने मुझे रोज दिया〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘e𝗌ɘ ɱʌ†† Ɗɘƙɧ ɣʌʌɽ ɳʌɧıı †❍ ƙıı𝗌𝗌 ƙʌɽ ɭuɳGʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ɘɽʌ 𝗌ʌɽ ɱe ß❍ɱß ƙıı𝗌ɳɘ f❍̊͢ɗʌʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧʌɭɭ ɧʌ†† ɳ❍u†ʌɳGɪ̽ ƙʌɧɪ̽ ƙɑʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Ů͢ɗʌ𝗌 ɱʌ† ɧ❍ ßʌßu ɱe ɧu ƞʌʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("c̬̽ɧʌɭɭ ɧʌ†† ɳ❍u†ʌɳGɪ̽ ƙʌɧɪ̽ Kɒɒ", threadID);
   };

      if ((event.body.toLowerCase() == "wow") || (event.body.toLowerCase() == "Wow")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ɧʌƞƙ ɣ❍ʊ͛ ʌƤƙσ ßӈıı ß❍†  c̬̽ɧɑ̽ɧi͠ɣɘ †❍ Sʌɱɘɘr᩶ ʂɘ ɱi͠ɭ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌʌᏇ ßʌßɣ 𝗌ʌɽƊıı ɭʌG ɧɘ ʈ❍ ɱɘɽɘ p᩶ʌʌ𝗌 ʌʝʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙ𝞄⃕††ɘ Ƥɘɘc̬̽ɧɘ ƤʌƊ Gʌɣɘ ƙııɣʌ ɱɘɽɪ̽ ʝʌʌɳ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙ❍ƞ𝗌ʌ ɱʌɧııɳʌ c̬̽ɧʌɭ ɽʌɧʌ ɱʋɳɳıı ßʌƊƞʌʌɱ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɽɘ ʝʌʌƞʌ ɱɘƙ❍ ßɧıı ßɘɘɱʌɽ ƙʌɽƞʌ ɧɘ 𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɽɘ ʝʌʌƞʌ ɱɘƙ❍ ßɧıı ßɘɘɱʌɽ ƙʌɽƞʌ ɧɘ 𝆺꯭𝅥𓆩K𝐢̄𝐢ɣʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘c̬̽ɧɑ̽𝗌ɱɑ̽ ɧɑ̽ʈɑ̽σ n᪵᪳ɑ̽ 𝗌ɑ̽ɧɑ̽ß ƙɪ̽ɣɑ̽ n᪵᪳ɑ̽ɱɛ̈ ɧɛ̈ ɑ̽p᩶ƙɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Gɧʌɽ Ꮗɑ̽ɭɵ̥̽ ɳɛ̈ r᩶❍†ɪ̽ ɳɒӈi͠ ̊͢ɗʌɭi͠ ʈʊ͛ʝӈɘ ɑ̽ɑ̽ʝ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɛ̈ Ɗɘƙɧσ ʌɳɛ̈ƙ Ꮗɑ̽ɭɑ̽ 𝆺꯭𝅥𓆩ʝ𝐢̄𝐢n᪵᪳n᪵᪳n᪵᪳〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝗌ʌc̬̽ɧ ɱɘ ʝ❍ƙʌɽ ɧɛ̈ ɱuʝɧɘ ʌʝ Ƥʌ†ʌ c̬̽ɧʌɭʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Ꮗʌɧ ʌpƙʌ 𝗌ʌƙʌɭ ɳƏƏɭʌ ɧ❍ Gʌɣʌ ßƏGʌɳ ʝƏ𝗌ɑ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "sala") || (event.body.toLowerCase() == "kamina")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Gɑ̽ɭi͠ ŋ͢ʌ ̊ ̊͢ɗ❍ n᪵᪳ɒӈɪ̽ 𝗌ʌɱƏƏɽ ßʌßʊ͛ Kɵ̥̽ ßɑ̽†ʌ Ɗ𝞄⃕n᪵᪳gi͠〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ɘɽɘ 𝗌ɘ ʌc̬̽ɧʌ †❍ ßııɭɭi͠ɣʌ i͠†ɽʌ ɭɘ†ıı ɧɛ̈〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "👄")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌßɘ ɣʌɭɭ ɣɘ ƙıı𝗌𝗌ɪ̽ɪ̽ ωi͠𝗌𝗌ɪ̽ ɳʌ ƙʌɽ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘƙ❍ ƙʌɭʌ Ɗi͠ɭ c̬̽ɧʌɧi͠ɣɘ ɭʌɭ Ɗi͠ɭ †❍❍† ʝʌ†ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɚ Ɗi͠ɭ ŋ͢ɒ ßӈɛ̈ʝɑ̽ kɑ̽r᩶ɵ̥̽ ɣɑ̽ɽ ɱʊ͛ʝɧɛ̈ Sɑ̽r᩶ɑ̽ɱ ʌ†ɪ̽ ɣɑ̽r᩶〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar_🌿_liya___🌿___mujhse____🌿🌹❣️__________________?🥰🥰😍", threadID);
   };

         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "💓")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɘ𝗌ɘ †u Ꮗɘ𝗌ɘ ɣɘ †ɘɽʌ Ɗi͠ɭ ƙʌɭʌ c̬̽ɧʌɭʌ ʝʌ ƙɑ̽ɭi͠ɣɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɛ̈ ̊͢ɗɘkɧ❍ Gɑ̽r᩶ɛ፝֟͜͡ɛßØ ƙʌ ßσ፝֟͜͡†ӈ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍👍")) {
     return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
   };

      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝐔𝐡 𝐊𝐎 𝐢𝐒𝐊𝐢 𝐉𝐲𝐀𝐃𝐀 𝐉𝐚𝐑𝐔𝐫𝐀𝐓 𝐇𝐞〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†𝞄⃕ɱ𝗌ɘ ʌc̬̽ɧʌ †❍ ɣɘ ßɒƞ̊͢ɗʌɽ 𝗌ɧʌɽɱʌ ɭɘ†ɘ ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙııɣʌ ƊƏƙɧ ɽʌɧʌ p᩶ʌp᩶ʌ ƙıı ßʌɽʌ† ʌɽʌɧıı〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘❍ɣɘ ɧ❍ɣɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "Ok") || (event.body.toLowerCase() == "Okay")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙııɣʌʌ ❍ƙ ɱɘɽıı ʝʌʌƞ ɱuʝɧɘ ßʌ†ʌ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "G") || (event.body.toLowerCase() == "Han G")) {
     return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈɱɱ ӈɱɱ ɳʌ ƙɒɽ❍ 𝗌ɘɘƊɧʌ ß❍ɭ❍ ɧɘɣ ɱɘɽɽɣ ɱe〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ӈʌƞ G ɱɘɽɪ̽ ɳʌʂ❍ ɱɘ ßɘɧ†ʌ ɧ𝞄⃕ʌ ƙɧ𝞄⃕ɳ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝɑ̽ɑ̽ŋ͢ʊ͛ ɱɛ̈ ʂɪ̽r᩶Ғ Sɑ̽ɱɘɘɽ kīī ɧʊ͛ ʂʌɱʝɧɣ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "bot go to sleep") || (event.body.toLowerCase() == "bot goes for sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƙɧʋƊ ƙ❍ ƙııɣʌ ɭƏGƏɳƊ 𝗌ʌɱʝɧ†Ə ɧ❍ c̬̽ɧ❍ɱʋ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "good morning Darling")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘ ӈʊ͛ ƞʌʌ ʝʌɳɘɱʌɳɳ ß❍ɭ❍ †ʌʌ ɧ𝞄⃕ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "suno sameer") || (event.body.toLowerCase() == "sameer") || (event.body.toLowerCase() == "kaha ho sameer") || (event.body.toLowerCase() == "boss")) {
     return api.sendMessage( "꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ßσʂʂ ß𝞄⃕𝗌ɣ ӈ❍ɳgɘ ɱ𝞄⃕ʝɧ𝗌ɘ ßʌʌ𝗧 ƙɑ̽r᩶σ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂",threadID);


   };

   if ((event.body.toLowerCase() == "bot ka owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟💙SAMEER🎸  ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐌𝐫 𝐒𝐚𝐦𝐞𝐞𝐑. 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :https://www.facebook.com/PRINCE SAMEER.HERE", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon he") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Sameer Sharabi ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("He is Sameer Sharabi. He Gives his name Mr Sameer everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "@Nazma khan") || (event.body.toLowerCase() == "@Sehreen khan")) {
     return api.sendMessage("ye toh hasina h. meri jaan h. meri dil ki dhadkan h🤩.", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "KAM BOL") || (event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɳʌɧıı r᩶ɑ̽ɧʊ͛ɳGıı c̬̽ӈup᩶ ƙʌɱʌ ƙɛ̈ ƙɧııɭɑ̽𝗧ʌ ӈɘ ƙııɣɑ̽ c̬̽ɧσɱu〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘†ʊ͛ ɧɘ ß†S c̬̽ɧʌɭɑ̽ ʝʌ ßɧ❍𝗌Ɗi͠ƙɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘𝐒𝐎𝐫𝐑𝐢 𝐦𝐀𝐋𝐢𝐊 𝐒𝐀𝐦𝐞𝐞𝐫 𝐦𝐔𝐣𝐡𝐞 𝐌𝐚𝐅 𝐊𝐚𝐫𝐃𝐨 𝐀𝐛 𝐍𝐚𝐡𝐢 𝐊𝐚𝐫𝐔𝐧𝐆𝐚〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🍁") || (event.body.toLowerCase() == "🍁🍁") || (event.body.toLowerCase() == "🍁🍁🍁") || (event.body.toLowerCase() == "🍁🍁🍁🍁")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣƏ ɱƏɽi͠ɪ 𝐬ɒ𝚋𝗌Ə p᩶ɣʌɽi͠ɪ ʝʌʌƞ ʝʌƞƞʌ𝗧 𝙱ʌ𝚋ᴜ̽ Kɒɒ Ғʌv❍ɽi͠𝗧Ə〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️sab dekh rahe hai brna bhot kiss deta🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Jaan")) {
     return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘ ӈu ɧıı ɪ̽†n᪵᪳ʌ ʌc̬̽ɧɑ̽ 𝗌ɑ̽ß ɭσg †ɑ̽ɽɛ̈ɛ̈Ғ ƙʌɽ†ɘ ӈɘ ɱɘɽɪ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "Good morning") || (event.body.toLowerCase() == "Morning") || (event.body.toLowerCase() == "Gud morning") || (event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "GOOD MORNING")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘G❍❍Ɗ ɱ❍ɽƞııɳG G❍Ɗ ßɭɘ𝗌𝗌 ɣ❍ʊ͛ ʝʌʌɳʊ͛〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("️꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘Ɗɪ̽ɭ †σ፝֟͜͡σ† Gʌɣʌ †❍ ɭfɪ̽ ɭ❍ ɣʌɧʌ Q ßɧɘʝ ɽɑ̽ɧɑ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ƞʌɱɘ ɱɘ ƙɪ̽ɣʌ ɽʌƙɧʌ †𝞄⃕ɱ ƙʌɱ Ƥɘ ɗɧi͠ɣʌɳ ɗ❍〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘɽʌ ßʌc̬̽ɧʌ †❍ †𝞄⃕ɱɧʌɽɘ Ƥɘ† ɱɘ ɧɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱɘ †❍ ʌɳƊɧʌ ɧʊ͛ ɗɘƙɧ ƞʌɧɪ̽ 𝗌ʌƙ†ʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "Sameer kon h") || (event.body.toLowerCase() =="Neha kon h")) {
     return api.sendMessage("️Aafat or Chiku ek dusre ki jan hai😍😍💞", threadID);
   };

   if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɪ̽ ɭ❍vɛ̈ ɣσu †σ ɱɣ ɭØvɘ uɱɱɑ̽ɧ ɱɛ̈ɽɪ̽ ʝɑ̽ɑ̽ŋ͢〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "sorry")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʝʌ❍ ɱɑ̽f ƙi͠ɣʌ ƴɑ̽ɗ r᩶ɑ̽ƙɧ❍Gɘ †𝞄⃕ɱ ßɧɪ̽〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍😍😍")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘i͠𝗌𝗌 ɳʌʝʌr᩶ 𝗌ɛ̈ ɱɛ̈ɽɛ̈ σ፝֟͜͡Ꮗɳɘɽ 𝗌ʌɱɛ፝֟͜͡ɛr᩶ ƙ❍ Ɗɛ̈ƙɧσ ɱʌʝʌ ʌɣɘGʌ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ʌɽɘ ʌƤɳɘ ɱuɧ Ƥɘ Q ɱʌɽ ɽɑ̽ɧɘ Ƥʌgʌɭ ɪ̽ɳ𝗌ʌɳɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "☔") || (event.body.toLowerCase() == "🌧️") || (event.body.toLowerCase() == "🙆") || (event.body.toLowerCase() == "💁") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɘ ƙi͠ɣʌ †ʌɱʌ𝗌ɧʌ ßɧɘʝ ɽʌɧʌ ƤʌʌGɑ̽ɭ i͠ɳ𝗌ʌɳɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "💫") || (event.body.toLowerCase() == "🌚") || (event.body.toLowerCase() == "👺") || (event.body.toLowerCase() == "👹")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɣɘ ƙi͠ɣʌ †ʌɱʌ𝗌ɧʌ ßɧɘʝ ɽʌɧʌ ƤʌʌGɑ̽ɭ i͠ɳ𝗌ʌɳɘ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ɱƏ †ʌßɧıı ʌc̬̽ɧʌ ɧ๏†ʌ ɧʋ ʝʌß ʌpƙ❍ ɧʌ𝗌ʌ†ʌ ɧʋ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "boat") || (event.body.toLowerCase() == "Boat")) {
     return api.sendMessage("𝐁𝐨𝐭 𝐧𝐚𝐡𝐢 𝐑𝐚𝐧𝐢 𝐛𝐨𝐥𝐨 𝐏𝐚𝐠𝐚𝐥", threadID);
   };
   mess = "{name}"

  if (event.body.includes("Bot") == 1 ||
     (event.body.includes("bot") == 1 ||
     (event.body.includes("BOT") == 1 ||
     (event.body.includes("BABU") == 1 ||
     (event.body.includes("Babu") == 1 ||
     (event.body.includes("babu") == 1 ||
     (event.body.includes("boot") == 1 ||
     (event.body.includes("Oye") == 1 ||
     (event.body.includes("oye") == 1 ))))))))) {
      var msg = {
        body: `${rand}`
      }
  var msg = {
    body: `⫷╍╍╍╍╍╍💖╍╍╍╍╍╍⫸
       ◄───╬❆☠️❅╬───►
      ❤️🌿🍒${name}🌿🥀💙,
       ◄───╬❆😈❅╬───► \n\n
          ${rand} 🎻♡💋🤣🍁❤
          
𐄪༆🦋ﮩ٨ـ⚜️🍁♡😘⚜️ﮩ٨ـ🦋༆𐄪,

 *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝❦ ════ •⊰𝐒𝐀𝐌𝐄𝐄𝐑⊱• ════ ❦🍀🍒 ❥||ㅎ
 
𐄪༆🦋ﮩ٨ـ⚜️🍁♡😘⚜️ﮩ٨ـ🦋༆𐄪`
  }
  return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
