// const Discord = require("discord.js");
// require("dotenv").config();

// const { Client, Intents } = require("discord.js");

// const myIntents = new Intents();
// myIntents.add(
//   Intents.FLAGS.GUILD_MESSAGES,
//   Intents.FLAGS.GUILDS,
//   Intents.FLAGS.GUILD_BANS,
//   Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
//   Intents.FLAGS.GUILD_INVITES
// );

// const client = new Client({ intents: myIntents });

// client.once("ready", () => {
//   console.log("Bienvenue à Xarxaroth !!!");
// });

// client.login(process.env.DISCORD_TOKEN);

// client.on("messageCreate", (msg) => {
//   if (msg.content === "Albus ?") {
//     msg.reply("Alors ça !!!");
//   }
//   if (msg.content === "Patxi ?") {
//     msg.reply("Connard !!!");
//   }
// });

const fs = require("fs");
const { Client, Collection, Intents } = require("discord.js");
require("dotenv").config();

const handleCommand = require("./helpers/command");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("Bienvenue à Xarxaroth !");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "Albus ?") {
    msg.reply("Alors ça !!!");
  }
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) handleCommand(client, interaction);
});

client.login(process.env.DISCORD_TOKEN);
