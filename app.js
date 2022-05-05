const Discord = require("discord.js");
require("dotenv").config();

const { Client, Intents } = require("discord.js");

const myIntents = new Intents();
myIntents.add(
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_BANS,
  Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  Intents.FLAGS.GUILD_INVITES
);

const client = new Client({ intents: myIntents });

client.on("ready", () => {
  console.log("Bienvenue à Xarxaroth !!!");
});

client.login(process.env.DISCORD_TOKEN);

client.on("message", (msg) => {
  if (msg.content === "Albus ?") {
    msg.reply("Alors ça !!!");
  }
});
