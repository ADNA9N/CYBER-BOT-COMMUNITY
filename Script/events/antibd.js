module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname"],
  version: "0.0.1",
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁",
  description: "Against changing Bot's nickname"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID)
        var info = await Users.getData(author);
       return api.sendMessage({ body: `${info.name} - 💐𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐀𝐏 𝐁𝐎𝐓 𝐊𝐀 𝐍𝐈𝐂𝐊𝐍𝐀𝐌𝐄 𝐂𝐇𝐀𝐍𝐆𝐄 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑 𝐒𝐊𝐓𝐄💐`}, threadID);
    }  
        }
