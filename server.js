import requests
import json
from telegram.ext import Updater, CommandHandler

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.5944391940:AAFPF1_V_MH5eRDKn1NDFKHAavKU1i8tNw0;

def download_reel(url):
    # code to download reel from Instagram using the URL
    pass

def start(update, context):
    update.message.reply_text("Welcome! Share an Instagram reel link and I'll download it for you.")

def reel_downloader(update, context):
    url = update.message.text
    if 'instagram.com/reel' in url:
        update.message.reply_text("Downloading reel...")
        download_reel(url)
        update.message.reply_text("Reel downloaded!")
    else:
        update.message.reply_text("Invalid URL. Please share a link to an Instagram reel.")

def main():
    # Set up Telegram bot
    updater = Updater("5944391940:AAFPF1_V_MH5eRDKn1NDFKHAavKU1i8tNw0", use_context=True)
    dp = updater.dispatcher
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(MessageHandler(Filters.text, reel_downloader))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
