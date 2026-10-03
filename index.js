const TelegramBot = require('node-telegram-bot-api');

const token = '8995059787:AAFRxXbQryaAc352DcJUBmhaGqDncrAUN78';
const bot = new TelegramBot(token, { polling: true });

const CHAT_ID = -1004293801897;

bot.getChatMemberCount(CHAT_ID)
    .then((count) => {
        console.log("Số thành viên trong nhóm:", count);
    })
    .catch((err) => {
        console.log("Lỗi:", err.message);
    });
