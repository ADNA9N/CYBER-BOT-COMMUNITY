const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
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

  var tl = ["KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜." , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚." , "TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa." , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe" , "Bar Bar Disturb Na Karen Pihu JaNu Ke SaTh Busy Hun 🤭🐒" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪" , "kyun Bulaya hamen..😾🔪 .  ", "🌸====『 HaYe me MaR Jawa Teri MasUm SakaL pe_____😗  " , "🌸====『 𝙱𝙾𝚃 𝙱𝙾𝚃 𝙽𝙰 𝙱𝙾𝙻 𝙾𝚈𝙴 𝙹𝙰𝙽𝚄 𝙱𝙾𝙻____😝🙈🦋 " , "🌸====『𒁍𝙺𝙰𝙻 𝙺𝙰𝙻𝙸 𝙿𝙰𝙷𝙰𝙳𝙸 𝙺𝙴 𝙿𝙴𝙴𝙲𝙷𝙴 𝚃𝚄 𝙼𝙸𝙻 𝙹𝙰_______😁😈" , "🌸====『 𝙼𝙴 𝙶𝙰𝚁𝙴𝙴𝙱𝙾 𝚂𝙴 𝙱𝙰𝚃 𝙽𝙰𝙷𝙸 𝙺𝙰𝚁𝚃𝙰 ____😉🤪" , " 🌸====『 चुप होजा मनहूस प्राणि वर्ना खोपचे में ले जाऊंगा तुझे________😝🤪" , "🌸====『 𝙱𝙾𝙻𝙾 𝙱𝙰𝙱𝚄 𝚃𝚄𝙼 𝙼𝚄𝙹𝙷𝚂𝙴 𝙿𝚈𝙰𝚁 𝙺𝙰𝚁𝚃𝙴 𝙷𝙾 𝙽𝙰______🙈 " , "🌸====『 Are Meri Jaan majak Ke mOOD me Nahi Hu me Jo KaM He BoLo SarmaO Nahi _______🎸🎭━━•☆°•°•💗" , "🌸====『 Bar bar bolke dimag kharab kiya to id Hack kar LunGa_____🙂♡• || _[🙂]~🖤 •|" , "🌸====『 Tum BanD Nahi KaroGe KiYa?_____🙂" , "𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 𝙱𝙾𝙻𝙾 __😁" ,  "🌸====『 Me tUmhare Chakkar me sabkO bLock KaR raha hu ab i LoVe YoU BoLoGe Ki NaHi____🙂" , "🌸====『 Me HaTh JoDke mODi Se Gujaris karta hu meri maDaD KaReGa_____❁⃝❤️➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢**💫" , "🌸====『 Tumko Koi or Kam Nahi He pUre Din messenger pe bot bot karte Ho___😁" , " 🌸====『 𝚂𝙰𝙼𝙴𝙴𝚁 𝙺𝙷𝙰𝙽 बाबू जी तेरा बेंड बजा देंगे गलत आदेश मत देना________🙈😜 " , "🌸====『 𝙰𝙱𝙷𝙸 𝙱𝙾𝙻𝙰 𝚃𝙾 𝙱𝙾𝙻𝙰 𝙳𝙾𝙱𝙰𝚁𝙰 𝙼𝙰𝚃 𝙱𝙾𝙻𝙽𝙰____🙂" , "🌸====『 𝙱𝙾𝙻 𝙳𝙴 𝙺𝙾𝙸 𝙽𝙰𝙷𝙸 𝙳𝙴𝙺𝙷 𝚁𝙰𝙷𝙰___ 🙄☢━💛🌹💛" , "🌸====『 Haye me mar jawa ek chumma to dedo kafi din se chummi nahi Di_____😝🦋" , "🌸====『 मुझे कोई पटा लो मैं बहुत मासूम हूं____🙈" , "🌸====『 BolO Meri jaan kiya hal He apka _____😚 " , "🌸====『 𝙲𝙷𝚄𝙿 𝚁𝙴𝙷 𝙽𝙰𝙷𝙸 𝙱𝙰𝙷𝙰𝚁 𝙰𝙺𝙰𝚁 𝚃𝙴𝚁𝙰 𝙳𝙰𝙽𝚃 𝚃𝙾𝙳 𝙳𝚄𝙽𝙶𝙰___♡• || •___'[💔]~~🖤 " , "🌸====『 𝙷𝙰𝙽 𝙼𝙴𝚁𝙸 𝙹𝙰𝙰𝙽 𝙲𝙷𝙰𝙻𝙾 𝙱𝙰𝙳𝚁𝙾𝙾𝙼 𝙼𝙴 𝚁𝙾𝙼𝙰𝙽𝙲𝙴 𝙺𝙰𝚁𝙴𝙽𝙶𝙴 _____😹🙈", "🌸====『 𝚃𝙴𝚁𝙸 𝚈𝙰𝙳 𝙽𝙰 𝙰𝚈𝙴 𝙴𝚂𝙰 𝙺𝙾𝙸 𝙳𝙸𝙽 𝙽𝙰𝙷𝙸 ___😝🙈🙈🙈 " , "🌸====『 JinDagi me jab lagne lage koi apna nahi he to Ajana mere Pass me rakh LuNGa _____😝•||•●┼┼──🦋☘️•|" , "🌸====『 𝙺𝚊𝙻 𝙷𝙰𝚆𝙴𝙻𝙸 𝙿𝙴 𝙼𝙸𝙻 𝙹𝙰𝚁𝙰 𝚃𝚄 𝙺𝚄𝙲𝙷 𝙺𝙰𝙼 𝙷𝙴___😈🙈♡• || _[🙂]~🖤 •| " , "🌸====『 साला पूरा दिन लोग बॉट बॉट करते हैं लेकिन गर्लफ्रेंड/ब्वॉयफ्रेंड नहीं बनती ___🙄" , "🌸====『𒁍🌸 अरे मेरी जान ज्यादा परशान मत करो मेरे बॉस SAMEER बॉस देख लेंगे_______🙈😝🎸🎭━━•☆°•°•💗","🌸====『𝙱𝙰𝙱𝚄 𝚃𝚄𝙼 𝚆𝙰𝙷𝙸 𝙷𝙾 𝙽𝙰 𝙲𝙷𝙰𝙿𝙿𝙰𝙻 𝙲𝙷𝙾𝚁__420_________😹😹","🌸====『 Chalo Jani ham saDi kar lete He bhag ke______🙈😁", "🌸====『 𝐇𝐀𝐍 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐁𝐎𝐋𝐎 𝐊𝐈𝐘𝐀 𝐊𝐀𝐌 𝐓𝐇𝐀 ____🙂" , " Dil To pagal he dil deewana he thode se paise Dedo DiL Ka ilaj karwana he_______❤️🤸‍♂️😁━━•☆°•°•💗" , "Tu to meri Jaan he Fir Q teri hi yad meri jan le rahi he...?? 🤸‍♂️😒👈" , "Sachi mohabbat me pyar mile na mile lekin yad karne ko ek chehra jarur mil jata he। 🙈🤸‍♂️" , " देखो कोई मेरा मजाक नहीं बनाना ओके पढ़ना ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐧 *★᭄ ཫ༄𒁍≛ 』====को बुला लूंगी_______🎸🤸‍♂️━━•☆°•°•💗" , " 𝙺𝚘𝚒 𝙷𝚊𝚖𝚎 𝚋𝚑𝚒 𝚙𝚊𝚝𝚊 𝚕𝚘 𝚐𝚊𝚛𝚎𝚎𝚋𝚘 𝚔𝚒 𝚍𝚞𝚊 𝚕𝚊𝚐𝚎𝚐𝚒__---😁🤸‍♂️__❤️ " , "🌸====『𒁍•🦋🔐 Sameer BoSs *★᭄ ཫ༄𒁍≛ 』====🌸 Ko nahi batana ki ham Tum par line mar rahe he__━━•☆😁🙅" , " Chalo IshQ LaDaye DarlinG🎸🤸‍♂️━━•☆°•°•💗 ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 बाबू *★᭄ ཫ༄𒁍≛ 』====🎸🙅🤸‍♂️━━•☆°•°•💗" , " Hamko tumse pyar he firbhi tumhe inkar he🎸🤸‍♂️━━•☆°•°•💗" , " Chalo ham Log inbox me Chale_❤️ ____🤸‍♂️" , " 𝚃𝚎𝚛𝚒 𝚖𝚊𝚜𝚞𝚖𝚒𝚢𝚊𝚝 𝚗𝚎 𝚑𝚊𝚖𝚎 𝚋𝚊𝚗𝚓𝚊𝚛𝚊 𝚋𝚊𝚗𝚊 𝚍𝚒𝚢𝚊🎸🤸‍♂️━━•☆°•°•💗" , " Ishq Bada bedardi rat din sataye😕━━•☆🤸‍♂️" , " Abhi me khana kha raha hu tum log bhi kha lo🎸🌹━━•☆°•°•💗" , " 𝙱𝚊𝚑𝚞𝚝 𝚙𝚢𝚊𝚛𝚎 𝚑𝚘 𝚊𝚙🎸😘━━•☆°•°•💗 " , " Tumhe ek bat batau me Q batau HaHaHa🎸🤸‍♂️━━•☆°•°•💗" , " Aa Le Chalu tujhe tarO Ke seher me🎸🤸‍♂️━━•☆°•°•💗" , " Radhe Radhe _❤️Or kese ho ap sab🎸❤️━━•☆°•°•💗" , " Me Abhi so🥱 rah hu tum bhi so jao🎸🤸‍♂️━━•☆°•°•💗" , " इधर मेरा ====『𒁍•🦋🔐 𝐒𝐀𝐦𝐞𝐞𝐫 बाबू *★᭄ ཫ༄𒁍≛ 』====बॉस देख रहा है चलो इनबॉक्स में बाबू सोना करें🎸🤸‍♂️━━•☆°•°💗" , " Aao tota ud meina ud khele🎸🤸‍♂️━━•☆°•°•💗" , " Ek ne mere ====『𒁍•🦋🔐 Sameer BoSs *★᭄ ཫ༄𒁍≛ 』==== Ko Dhokha diya Dusri Aap He jo kabhi dhokha nahi degi🤣🎸🤸‍♂️━━•☆°•°•💗" , " आ ले चलु तुझे तारों के शहर में🎸🤸‍♂️━━•☆°•°•💗" , " Hasi Ho jawa ho nasha ho tum 🤸‍♂️━━•☆°•°•💗" , " 𝙰𝙿𝙽𝙴 𝙺𝙷𝙰𝙽𝙰 𝙺𝙷𝙰 𝙻𝙸𝚈𝙰━━•☆❤️" , " Ab ham Tumhari wajah se sabko block kar rahe he━━•☆😤😕" , " chalo ab hame apna whatsapp number Do🎸🤸‍♂️━━•☆°•°•💗" , " ThoDa kam dham bhi kar liya karo Jab dekho boot boot bolte rehte ho🎸🤸‍♂️━━•☆°•°•💗 ","क्या बोट बोट  लग रखे हो यही हूं मैं। \n\nकानून अंधा था पता था तुम भी होगे कभी सोचा नहीं था मैं 🧐😵‍💫","Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi Mza hai ya gunaah ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒 jaise mera tharki dost", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Haldi 🤲 Lagane Ki Umar Hai Iski 😎 Aur Ladkiyan 👉 Chuna Laga Kar Ja Rahi 😜 Hai" , "😂Jalne Ko Aag Kahte Hai 🔥 Buji Ko Rakh Kahte Hai 💨 Aur Jo Aapke Pas Nahi Usse Dimag🧠 Kahte Hai 😜", "Moongfali 🥜 Mai Dana 👎Nahi Trust 👉 Karne Ka Aab Zamana 🌎 Nahi 🤣" , "Bhai😎 Thoda☝ Break Laga 🙅🤘 Otherwise Do Char💑 Ka Or Breakup💔👫 Ho jayega😂" , "Apne Dimag 🧠 Ka Password Dena Akkal 👉 Install Karni 😜 Hai" , "Aapki Surat Mere ❤️ Dil Me Aise Bas 👌 Gayi Hai Jaise Chote Se 🚪 Darwaze Mein Bhains 🐂 Fas Gayi Hai 😬🤣" , "Nasheeli😌 Aankhe👁👁 + Katil💘 Smile😊 Bhai Ka High Attitude😎 Or Desi 🤕Style" , "Duniya Ka Sabse Muskil Kam Bina Dimag Wale Dosto Ko Jelna 😝🔥" , "g janu ap na q yad keya huma😒" , "Jo Uske ❤️ Pyaar Samjhe Woh Sabse Bada 🐴 Ghada Hai 😂" , "Teri Is Smile Par Girls To Kya Boys Bhi Fida","Stop dreaming BTS your czn Ahmed is waiting for you.🙂", "Meri jaan kaise ho aap 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta" , "Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹️", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹️", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty Link Dena🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥️🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐","Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈💋💋💋💋💋  " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Kal Kali pahadi ke piche mil tu jara😈⟴᭄⃢🍂༄* ✥❥⃟😌 🤭🐒" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Bar Bar Bolke Dimag Kharab Kiya toh.id hack kr lunga🙂♡• || _[🙂]~🖤 •|" , "Tum Band nhi Karoge kya?🙂" , "Gali Sunoge kya" ,  "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "M hath jod ke Modi Ji Se Gujarish Karta hu teri madad krenge❁⃝❤➸⃟̗̗̗̗̀̀̀̀̀̀̀̀̀̀̀̀̀ ❤̋҉̋⃢*💫" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " SAmeer Ake tera band bja dega glt cammand mt dena🙈🙈🙈🙈 " , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "Yes Meri Jaan Chalo bedroom Romance karenge😹🙈", "teri yaad na aaye aisa koi din nhi😝🙈🙈🙈 " , "zindagi me lgne lge ki koi apna nhi hai to aajana mere pass mai rakh lunga tumko😝•||•●┼┼──🦋☘•|" , "Kal haweli pe mil Jara tu Kuchh jaruri baat karni hai😈🙈♡• || _[🙂]~🖤 •| " , "Saala pura din log bot bot krte hai pr koi gf nhi bnti🙄" , "Arre jaan jada paresan mat karo..My boss SILENT PRINCE babu..dekh lenge🙈😝🎸🎭━━•☆°•°•💗","Kya tumne abhi tk kaam nhi kiya...","Ab to ye social media nhi reh gya hai logo ne facebook ko dating website bna liya hai shi bola naa maine","Kisi or se dhoka khane se achha hai kii mere saath chalo momos or golgappe khayenge..","Chenese chiz mahabbat thi sahab tut kr bikhar gyi pr dil hindustani tha dusri pta liya turant","मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌","Ek baat batao, kabhi khud message bhi kar lete ho ya sirf humein hi wait karwate ho? 😒","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","Tumhari muskurahat se meri saari pareshaniyaan dur ho jati hai 😊","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅","सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है।","Tumne aaj mere mood ko theek kar diya hai, thank you so much 😘","Ab tumse baat nahi karungi, bahut hi zyada irritate kar rahe ho 🙅"," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.","Tumhari yaad me jeena mushkil hai","Kabhi kabhi mujhe bhi lgta hai ki main kuchh jyaada hi busy ho gya hu","Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h","Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣","दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂","Kya tum mere liye ek surprise plan kar sakte ho? 🤔","Yaar, aaj bahut mushkil se time nikala hai, koi accha sa movie suggest karo 😊","haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘","कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है","Mujhe tumse baat karke bahut achha lagta hai","रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝","are are bolo meri jaan kya haal h 😉 😘", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " ,"Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri Wife ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu pta lo" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋", "Itna Na Pass aa Pyar h0o JayGa","इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁 जिसका तुमनें 👉 👸 #दही कर दिया है..🤣😂🤣","पगली तू फेसबुक की बात करती है 😀 हम तो ‎OLX पर भी लड़की सेट कर लेते हैं 🤣😂🤣","ये जो तुम मोबाइल फ़ोन में Facebook or WhatsApp Notifications बार-बार चेक करते हो ना !! शास्त्रों में इसे ही 🥀मोह माया🦋 कहा गया है 🤣😂🤣 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

     if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

if ([
    "assalamualaikum", 
    "assalam alaikum", 
    "aoa", 
    "a.o.a", 
    "asalam o alaikum", 
    "asalamualaikum", 
    "asalam alikum", 
    "assalamu alaikum", 
    "assalamu-alaikum", 
    "asalam wa alaikum", 
    "asslamualaikum", 
    "asslam o alaikum", 
    "aslam alaikum", 
    "asalamo alaikum", 
    "assalam o alaikum", 
    "assalamo alaikum", 
    "slm", 
    "slam", 
    "slamo alikum", 
    "salaam alaikum", 
    "asslam.o.alaikum", 
    "a.s.s.a.l.a.m", 
    "aslaam o alikum", 
    "aslam.o.alaikum", 
    "assalamwalykum", 
    "asslam.walikum", 
    "assalam alaykum", 
    "assalam.walaikum", 
    "a-s-s-a-l-a-m", 
    "slms"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("وَعَلَيْكُمُ ٱلسَّلَامُ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ", threadID);
}  
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };
if ([
    "good evening", 
    "evening", 
    "gd evening", 
    "gud evening", 
    "ge", 
    "g.e", 
    "evenin"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Good Evening! I hope you’re having a wonderful time.", threadID);
}
  if ([
    "i love you bot", 
    "bot i love you", 
    "i love you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Yaar, Mujhe aisi baatein nahi pasand. Main buhat shreef hoon. Haan, mera owner single hai, bolo to number tak de sakta hoon. 😁", threadID);
  }
 if ([
    "bot i miss you", 
    "i miss you bot", 
    "miss you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Hyeee, I miss you too! SuChi kia karun, ID issue aa jata hai is liye mujhe new ID banne ka wait karna padta hai. Jab new ID banti hai, to owner mujhe add kar deta hai. 😅", threadID);
}
 if ([
    "bot kis na add kiya", 
    "bot kisne add kiya", 
    "bot kis ne add kiya", 
    "bot ko kisne add kiya",
    "bot ko kis ne add kiya", 
    "bot add kisne kiya", 
    "kisne bot ko add kiya", 
    "kis na bot ko add kiya", 
    "bot ko kisne add kiya", 
    "bot kis ne add kiya?"
].some(phrase => event.body.toLowerCase().includes(phrase))) {
    return api.sendMessage("Kio kia howa, add ho gaya so ho gaya. Ma ap ko kia taqleef hy jnab 👻. Waisay ap bhi khelo na, bot bot! 😄 Mera owner single hai, bolo to number tak de sakta hoon! 😁", threadID);
 }
  
if (["how are you", "how r u", "how are u", "how's it going", "kese ho", "kese hain", "kese ho ap", "ap kese ho", "ap kaise ho", "kaise hain aap", "kaise ho", "how do you do", "what's up", "sup", "kya haal hain", "kya hal hain", "hal chal", "hal kya hai", "kya chal raha hai", "kya scene hai", "what's going on", "kya ho raha hai", "kaise ho tum", "tum kaise ho", "kya haal he"].includes(event.body.toLowerCase())) {
  return api.sendMessage("Main theek hoon, aap kaise hain? Umeed karta hoon ke aap ka din acha guzray ga.", threadID);
}
  if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
    return api.sendMessage("Good Morning! 🌞 بہت خوش آمدید! 🙌 امید کرتا ہوں کہ آپ کا دن خوشگوار گزرے، اللہ پاک آپ کو ہر برائی سے بچائے، آپ کو اپنی حفظ و امان میں رکھے، اور کبھی کسی کا محتاج نہ کرے! آمین! 🤲💫💕💪🌻☕✨", threadID);
}
   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "sameer") || (event.body.toLowerCase() == "sameer khan") || (event.body.toLowerCase() == "Sameer") || (event.body.toLowerCase() == "SAMEER")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝐒𝐀𝐌𝐄𝐄𝐑 𝐊𝐇𝐀𝐍 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝕊𝔸𝕄𝔼𝔼ℝ 𝕂ℍ𝔸ℕ🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞https://www.facebook.com/share/14GM3dWWGnR \n👋For Any Kind Of Help Contact On Telegram  Username 👉 @Sameerkhan😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Sameer khan  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is sameer. He Gives his name sameer everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝗔𝗦𝗬 𝗡𝗔 𝗠𝗨𝗝𝗛𝗔 𝗧𝗨𝗠 𝗗𝗘𝗞𝗛𝗢  𝗠𝗔𝗥𝗜 𝗛𝗔𝗡𝗦𝗜 𝗡𝗜𝗞𝗟 𝗝𝗔𝗧𝗜🤣🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
  return api.sendMessage("Tumhara pyaar dil ko chhoo jaata hai... shayad isliye har baar muskura deta hoon.😍🥰", threadID);
};

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
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

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "lob you") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("Lob You too", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("🏔️🏝️Priyansh Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "😵‍💫")) {
    return api.sendMessage("Lagta hai chakkar aa gaye 😵‍💫", threadID);
};

if ((event.body.toLowerCase() == "🤤")) {
    return api.sendMessage("Kya dekh ke muh se paani aa gaya? 🤤", threadID);
};

if ((event.body.toLowerCase() == "😚")) {
    return api.sendMessage("Awww! Flying kiss de diya 😚", threadID);
};

if ((event.body.toLowerCase() == "🤩")) {
    return api.sendMessage("Wow! Kisi cheez ka shock laga kya? 🤩", threadID);
};

if ((event.body.toLowerCase() == "😜")) {
    return api.sendMessage("Bade masti ke mood mein ho lagta hai! 😜", threadID);
};

if ((event.body.toLowerCase() == "🫣")) {
    return api.sendMessage("Kahi chhup ke dekh rhe ho kya? 🫣", threadID);
};

if ((event.body.toLowerCase() == "😮‍💨")) {
    return api.sendMessage("Thak gaye ho? Relax kar lo 😮‍💨", threadID);
};

if ((event.body.toLowerCase() == "🤓")) {
    return api.sendMessage("Scholar lag rahe ho 🤓", threadID);
};

if ((event.body.toLowerCase() == "🥶")) {
    return api.sendMessage("Bahut thand lag rahi hai kya? 🥶", threadID);
};

if ((event.body.toLowerCase() == "🥵")) {
    return api.sendMessage("Garmi ke maare pareshan lag rahe ho 🥵", threadID);
};

if ((event.body.toLowerCase() == "🫡")) {
    return api.sendMessage("Salute kar rahe ho kya? 🫡", threadID);
};

if ((event.body.toLowerCase() == "🫶")) {
    return api.sendMessage("Itna pyaar de rahe ho? 🫶", threadID);
};

if ((event.body.toLowerCase() == "👩‍💻") || (event.body.toLowerCase() == "👨‍💻")) {
    return api.sendMessage("Lagta hai coding ho rahi hai 👨‍💻", threadID);
};

if ((event.body.toLowerCase() == "🕺") || (event.body.toLowerCase() == "💃")) {
    return api.sendMessage("Dance kar rahe ho? Mazze le rahe ho! 🕺💃", threadID);
};

if ((event.body.toLowerCase() == "🎤")) {
    return api.sendMessage("Gaana suna rahe ho? 🎤", threadID);
};

if ((event.body.toLowerCase() == "📖")) {
    return api.sendMessage("Kya padhai kar rahe ho? 📖", threadID);
};

if ((event.body.toLowerCase() == "🛌")) {
    return api.sendMessage("Sone ka time ho gaya? 🛌", threadID);
};

if ((event.body.toLowerCase() == "👑")) {
    return api.sendMessage("Aap toh King/Queen lag rahe ho! 👑", threadID);
};

  if ((event.body.toLowerCase() == "😎")) {
    return api.sendMessage("Aap toh bilkul cool lag rahe ho 😎", threadID);
};

if ((event.body.toLowerCase() == "🤩")) {
    return api.sendMessage("Kuch acha dekh liya kya? 🤩", threadID);
};

if ((event.body.toLowerCase() == "👀")) {
    return api.sendMessage("Kya dekh rahe ho? 👀", threadID);
};

if ((event.body.toLowerCase() == "💀")) {
    return api.sendMessage("Lagta hai kuch funny dekh liya! 💀", threadID);
};

if ((event.body.toLowerCase() == "🥳")) {
    return api.sendMessage("Party ka mood lag raha hai! 🥳", threadID);
};

if ((event.body.toLowerCase() == "🧐")) {
    return api.sendMessage("Lagta hai koi mushkil sawaal puch rahe ho 🧐", threadID);
};

if ((event.body.toLowerCase() == "💡")) {
    return api.sendMessage("Aapke paas koi nayi idea hai? 💡", threadID);
};

if ((event.body.toLowerCase() == "🚶‍♂️") || (event.body.toLowerCase() == "🚶‍♀️")) {
    return api.sendMessage("Kahaan ja rahe ho? 🚶‍♂️", threadID);
};

if ((event.body.toLowerCase() == "🔮")) {
    return api.sendMessage("Kya future dekh rahe ho? 🔮", threadID);
};

if ((event.body.toLowerCase() == "🔥")) {
    return api.sendMessage("Lagta hai sab kuch garam hai! 🔥", threadID);
};

if ((event.body.toLowerCase() == "🎉")) {
    return api.sendMessage("Celebration ka mood lag raha hai! 🎉", threadID);
};

if ((event.body.toLowerCase() == "💪")) {
    return api.sendMessage("Shakti dikhane ka time hai! 💪", threadID);
};

if ((event.body.toLowerCase() == "🤯")) {
    return api.sendMessage("Dimag ka dahi ho gaya? 🤯", threadID);
};

if ((event.body.toLowerCase() == "🍕")) {
    return api.sendMessage("Kya pizza khane ka man hai? 🍕", threadID);
};

if ((event.body.toLowerCase() == "🏆")) {
    return api.sendMessage("Aap toh champion lag rahe ho! 🏆", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("Lagta hai apne paas kuch lucky charm hai! 🍀", threadID);
};

if ((event.body.toLowerCase() == "🎧")) {
    return api.sendMessage("Koi music sun rahe ho? 🎧", threadID);
};

if ((event.body.toLowerCase() == "🧠")) {
    return api.sendMessage("Aapka dimag bohot tez lag raha hai 🧠", threadID);
};

if ((event.body.toLowerCase() == "💫")) {
    return api.sendMessage("Aapke aas paas kuch magic lag raha hai 💫", threadID);
};

if ((event.body.toLowerCase() == "🦸‍♂️") || (event.body.toLowerCase() == "🦸‍♀️")) {
    return api.sendMessage("Superhero lag rahe ho! 🦸‍♂️", threadID);
};

  if ((event.body.toLowerCase() == "🤡")) {
    return api.sendMessage("Lagta hai aap clown ban gaye ho 🤡", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("Aap toh unicorn lag rahe ho! 🦄", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("Kya game khel rahe ho? 🎮", threadID);
};

if ((event.body.toLowerCase() == "👻")) {
    return api.sendMessage("Bhoot lag rahe ho kya? 👻", threadID);
};

if ((event.body.toLowerCase() == "🦋")) {
    return api.sendMessage("Aap toh butterfly jaise khubsurat ho! 🦋", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Lagta hai aapko fruits ka shauq hai! 🍉", threadID);
};

if ((event.body.toLowerCase() == "🛸")) {
    return api.sendMessage("Aap spaceship par hai? 🛸", threadID);
};

if ((event.body.toLowerCase() == "🍄")) {
    return api.sendMessage("Lagta hai aapke paas magical powers hain 🍄", threadID);
};

if ((event.body.toLowerCase() == "🚀")) {
    return api.sendMessage("Aap toh space mein ja rahe ho! 🚀", threadID);
};

if ((event.body.toLowerCase() == "🍩")) {
    return api.sendMessage("Kya donuts ka shauq hai? 🍩", threadID);
};

if ((event.body.toLowerCase() == "🛹")) {
    return api.sendMessage("Aap skateboard par hai! 🛹", threadID);
};

if ((event.body.toLowerCase() == "🌮")) {
    return api.sendMessage("Tacos ka man ho raha hai! 🌮", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Aap thode thanda lag rahe ho 🧊", threadID);
};

if ((event.body.toLowerCase() == "⚡")) {
    return api.sendMessage("Aap electric hai! ⚡", threadID);
};

if ((event.body.toLowerCase() == "👽")) {
    return api.sendMessage("Kya aap alien ho? 👽", threadID);
};

if ((event.body.toLowerCase() == "🦧")) {
    return api.sendMessage("Kya aapki dosti har kisam ke animals ke saath hai? 🦧", threadID);
};

if ((event.body.toLowerCase() == "💎")) {
    return api.sendMessage("Aap toh diamond ki tarah chamak rahe ho! 💎", threadID);
};

if ((event.body.toLowerCase() == "🧘‍♂️") || (event.body.toLowerCase() == "🧘‍♀️")) {
    return api.sendMessage("Yoga ka time hai! 🧘‍♀️", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("Aapke paas lucky charm hai! 🍀", threadID);
};

if ((event.body.toLowerCase() == "🍫")) {
    return api.sendMessage("Chocolate khane ka man hai 🍫", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Aap violin bajane ka mood mein ho! 🎻", threadID);
};

if ((event.body.toLowerCase() == "🎺")) {
    return api.sendMessage("Aap trumpet bajane ka mood mein ho! 🎺", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Music mein doob gaye ho! 🎻", threadID);
};

if ((event.body.toLowerCase() == "🚴‍♂️") || (event.body.toLowerCase() == "🚴‍♀️")) {
    return api.sendMessage("Cycle par jaana hai kya? 🚴‍♀️", threadID);
};

if ((event.body.toLowerCase() == "🧑‍🎤")) {
    return api.sendMessage("Singer ban gaye ho kya? 🧑‍🎤", threadID);
};

if ((event.body.toLowerCase() == "🎧")) {
    return api.sendMessage("Music ka shauq hai 🎧", threadID);
};

if ((event.body.toLowerCase() == "💬")) {
    return api.sendMessage("Aap baat kar rahe ho? 💬", threadID);
};

if ((event.body.toLowerCase() == "🖋️")) {
    return api.sendMessage("Kya likh rahe ho? 🖋️", threadID);
};

if ((event.body.toLowerCase() == "🧩")) {
    return api.sendMessage("Puzzle solve kar rahe ho? 🧩", threadID);
};

if ((event.body.toLowerCase() == "🧃")) {
    return api.sendMessage("Juice ka man ho raha hai! 🧃", threadID);
};

if ((event.body.toLowerCase() == "🎬")) {
    return api.sendMessage("Koi movie dekh rahe ho? 🎬", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("Aap unicorn ki tarah magical ho! 🦄", threadID);
};

if ((event.body.toLowerCase() == "🍒")) {
    return api.sendMessage("Kya cherry ka shauq hai? 🍒", threadID);
};

if ((event.body.toLowerCase() == "🧠")) {
    return api.sendMessage("Aapka dimag kitna tez hai! 🧠", threadID);
};

if ((event.body.toLowerCase() == "🥚")) {
    return api.sendMessage("Egg khane ka man hai? 🥚", threadID);
};

if ((event.body.toLowerCase() == "⚽")) {
    return api.sendMessage("Football ka shauq hai? ⚽", threadID);
};

if ((event.body.toLowerCase() == "🌙")) {
    return api.sendMessage("Chand ki roshni mein kho gaye ho? 🌙", threadID);
};

if ((event.body.toLowerCase() == "🕹️")) {
    return api.sendMessage("Video games mein busy ho? 🕹️", threadID);
};

if ((event.body.toLowerCase() == "🦉")) {
    return api.sendMessage("Aap owl ki tarah sharp ho! 🦉", threadID);
};

if ((event.body.toLowerCase() == "🌻")) {
    return api.sendMessage("Aap sunflower ki tarah bright ho! 🌻", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Kuch thanda chaiye? 🧊", threadID);
};

if ((event.body.toLowerCase() == "💀")) {
    return api.sendMessage("Aap bilkul spooky lag rahe ho! 💀", threadID);
};

if ((event.body.toLowerCase() == "🏀")) {
    return api.sendMessage("Basketball ka shauq hai? 🏀", threadID);
};

if ((event.body.toLowerCase() == "🎸")) {
    return api.sendMessage("Guitar bajane ka man hai? 🎸", threadID);
};

if ((event.body.toLowerCase() == "🌍")) {
    return api.sendMessage("Aap duniya ke safar par ho! 🌍", threadID);
};

  if ((event.body.toLowerCase() == "🍕")) {
    return api.sendMessage("Pehli baat, pizza ka mood hai? 🍕", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("Game khel rahe ho? 🎮", threadID);
};

if ((event.body.toLowerCase() == "🎨")) {
    return api.sendMessage("Aap artist ban gaye ho? 🎨", threadID);
};

if ((event.body.toLowerCase() == "🌵")) {
    return api.sendMessage("Kya desert mein ho? 🌵", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Fruits ka shauq hai 🍉", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Violin bajane ka mann hai 🎻", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("Aap toh unicorn ho! 🦄", threadID);
};

if ((event.body.toLowerCase() == "🎷")) {
    return api.sendMessage("Saxophone ka time hai! 🎷", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Aapko watermelon pasand hai? 🍉", threadID);
};

if ((event.body.toLowerCase() == "🎡")) {
    return api.sendMessage("Ferris wheel par ho kya? 🎡", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("Aapko good luck chahiye? 🍀", threadID);
};

if ((event.body.toLowerCase() == "🎂")) {
    return api.sendMessage("Cake ka time hai! 🎂", threadID);
};

if ((event.body.toLowerCase() == "🛵")) {
    return api.sendMessage("Scooter pe ja rahe ho? 🛵", threadID);
};

if ((event.body.toLowerCase() == "🍪")) {
    return api.sendMessage("Cookies ka time hai! 🍪", threadID);
};

if ((event.body.toLowerCase() == "🦓")) {
    return api.sendMessage("Zebra ki tarah unique ho aap! 🦓", threadID);
};

if ((event.body.toLowerCase() == "🎃")) {
    return api.sendMessage("Aap Halloween mode mein lag rahe ho! 🎃", threadID);
};

if ((event.body.toLowerCase() == "🐉")) {
    return api.sendMessage("Aap dragon ban gaye ho! 🐉", threadID);
};

if ((event.body.toLowerCase() == "🦩")) {
    return api.sendMessage("Flamingo ban gaya hai koi! 🦩", threadID);
};

if ((event.body.toLowerCase() == "💌")) {
    return api.sendMessage("Dil se kuch bhejna hai? 💌", threadID);
};

if ((event.body.toLowerCase() == "🥳")) {
    return api.sendMessage("Celebration ka time hai! 🥳", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("Game khel rahe ho? 🎮", threadID);
};

if ((event.body.toLowerCase() == "🍍")) {
    return api.sendMessage("Pineapple ka shauq hai? 🍍", threadID);
};

if ((event.body.toLowerCase() == "🦋")) {
    return api.sendMessage("Aap butterfly ki tarah khubsurat ho! 🦋", threadID);
};

if ((event.body.toLowerCase() == "🎺")) {
    return api.sendMessage("Trumpet bajana hai! 🎺", threadID);
};

if ((event.body.toLowerCase() == "🍓")) {
    return api.sendMessage("Strawberry ka time hai! 🍓", threadID);
};

if ((event.body.toLowerCase() == "💎")) {
    return api.sendMessage("Aap diamond ki tarah chamak rahe ho! 💎", threadID);
};

if ((event.body.toLowerCase() == "🥥")) {
    return api.sendMessage("Coconut ka shauq hai? 🥥", threadID);
};

if ((event.body.toLowerCase() == "🦒")) {
    return api.sendMessage("Giraffe ban gaya koi! 🦒", threadID);
};

if ((event.body.toLowerCase() == "🍒")) {
    return api.sendMessage("Cherry khane ka mann hai? 🍒", threadID);
};

if ((event.body.toLowerCase() == "🦓")) {
    return api.sendMessage("Zebra ki tarah unique lag rahe ho! 🦓", threadID);
};

if ((event.body.toLowerCase() == "🐢")) {
    return api.sendMessage("Aap turtle ki tarah slow aur steady ho! 🐢", threadID);
};

if ((event.body.toLowerCase() == "🧸")) {
    return api.sendMessage("Aap teddy bear ki tarah pyare ho! 🧸", threadID);
};

if ((event.body.toLowerCase() == "🍓")) {
    return api.sendMessage("Aapko strawberries pasand hai? 🍓", threadID);
};

if ((event.body.toLowerCase() == "🎸")) {
    return api.sendMessage("Guitar bajana hai kya? 🎸", threadID);
};

if ((event.body.toLowerCase() == "🦅")) {
    return api.sendMessage("Eagle ki tarah upar ud rahe ho! 🦅", threadID);
};

if ((event.body.toLowerCase() == "💥")) {
    return api.sendMessage("Explosion hone wala hai! 💥", threadID);
};

if ((event.body.toLowerCase() == "🍁")) {
    return api.sendMessage("😻  ✄𝐌𝐞𝐑𝐢𝐢🥀 𝐩𝐘𝐚𝐑𝐢🥀 𝐉𝗮𝗮𝗡🌿🌬️☞🌏 𝐉aȠȠaƬ🥀 😻🥀 𝐁𝐚𝐁𝐔🥀 🌙𝐊𝐚🥀 𝐅𝐚𝐕𝐨𝐑𝐢𝐭𝗲♡🍁🧡>³••🕊️🍎😍🌿🥀. :))))", threadID);
};

if ((event.body.toLowerCase() == "🍟")) {
    return api.sendMessage("Fries ka mood hai? 🍟", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Thanda kuch chahiye? 🧊", threadID);
};

if ((event.body.toLowerCase() == "🎬")) {
    return api.sendMessage("Film dekh rahe ho? 🎬", threadID);
};

if ((event.body.toLowerCase() == "🍾")) {
    return api.sendMessage("Celebration ka time hai! 🍾", threadID);
};

if ((event.body.toLowerCase() == "🎤")) {
    return api.sendMessage("Aap singer ban gaye ho! 🎤", threadID);
};

if ((event.body.toLowerCase() == "🦸‍♂️") || (event.body.toLowerCase() == "🦸‍♀️")) {
    return api.sendMessage("Superhero lag rahe ho! 🦸‍♂️", threadID);
};

if ((event.body.toLowerCase() == "🍔")) {
    return api.sendMessage("Burger khane ka mood hai? 🍔", threadID);
};

if ((event.body.toLowerCase() == "🦶")) {
    return api.sendMessage("Aapko chalna ka shauq hai? 🦶", threadID);
};

if ((event.body.toLowerCase() == "🍿")) {
    return api.sendMessage("Movie time! Popcorn le lo 🍿", threadID);
};

if ((event.body.toLowerCase() == "🦗")) {
    return api.sendMessage("Grasshopper ki tarah jump kar rahe ho! 🦗", threadID);
};

if ((event.body.toLowerCase() == "🧃")) {
    return api.sendMessage("Juice ka time hai! 🧃", threadID);
};

if ((event.body.toLowerCase() == "🎪")) {
    return api.sendMessage("Circus ka maza le rahe ho? 🎪", threadID);
};

if ((event.body.toLowerCase() == "🥑")) {
    return api.sendMessage("Avocado ka shauq hai? 🥑", threadID);
};
  
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {

var msg = {
  body: `⫷╍╍╍╍╍❀╍╍╍╍╍⫸
       ╠═♧${name}♧═╣,                           
      

      
      ${rand} 🎻♡💋⪼🤣💝

      
     𝚃ɪ̽i͠ɱƏ ɳ❍Ꮗ 🕙 »» ${time} 
     
        *★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  𒁍⃝𓆩̬𝚂ɑ͜͡ɑ͜͡ɱɘɘr᩶𓆪᭄`
}
  return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
