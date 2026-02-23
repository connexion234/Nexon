const Discord = require('discord.js');
const { Pool } = require('pg');
require('dotenv').config();

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent] });

const pool = new Pool({
  user: process.env.AIVEN_USERNAME,
  password: process.env.AIVEN_PASSWORD,
  host: process.env.AIVEN_HOST,
  port: process.env.AIVEN_PORT,
  database: process.env.AIVEN_DB_NAME,
});

client.once('ready', () => {
  console.log('Discord bot is online!');
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);