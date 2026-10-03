const TelegramBot = require('node-telegram-bot-api');

const token = '8687811721:AAE4RAqvrbP5Or1DWI_DvcLf1BnnW1T7sBM';
const bot = new TelegramBot(token, { polling: true });

const CHAT_ID = -5094922445;

bot.getChatMemberCount(CHAT_ID)
    .then((count) => {
        console.log("Số thành viên trong nhóm:", count);
    })
    .catch((err) => {
        console.log("Lỗi:", err.message);
    });