import moment from "moment"; // require
import { readdirSync } from "fs";
import got from "got";
import { JSDOM } from "jsdom";
import commands from "./commands/index.js";

import clientId from "./deploys-commands.js";

// const Discord = require("discord.js");
// require("dotenv").config();

console.log(clientId);

import { Client, Collection, Intents } from "discord.js";

const myIntents = new Intents();
myIntents.add(
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_BANS,
  Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
  Intents.FLAGS.GUILD_INVITES
);

const client = new Client({ intents: myIntents });

const servers = "971685052599656449";

client.on("ready", () => {
  console.log("Bienvenue à Xarxaroth !!!");
});

// client.on("ready", () => {
//   client.commands = new Collection();
//   const commandFiles = readdirSync("./commands").filter((file) =>
//     file.endsWith(".js")
//   );

//   for (const server of servers) {
//     commands.map((command) => {
//       client.api
//         .applications(client.user.id)
//         .guilds(server)
//         .commands.post({
//           data: {
//             name: command.name,
//             description: command.description,
//             options: command.options,
//           },
//         });
//       console.log(`${command.name} ajoutée`);
//     });
//   }
// });

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isCommand()) return;

//   try {
//     switch (interaction.commandName) {
//       case "token":
//         await interaction.reply(`Voici des tokens`);
//         break;
//       case "patxi":
//         await interaction.reply(`Connard !!!`);
//         break;
//     }
//   } catch {
//     console.log("erreur");
//   }
// });

client.login(
  "OTcxNjgyNDY2MDI2ODgxMDI0.GbBYt-.x0BPrRl8CVHp9rQq13-TTv1Xceoth7E1DiUHZ0"
);

client.on("message", (msg) => {
  if (msg.content === "Albus ?") {
    msg.reply("Alors ça !!!");
  }
});
