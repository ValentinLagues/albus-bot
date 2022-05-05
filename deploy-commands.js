// import { readdirSync } from "fs";
// import { REST } from "@discordjs/rest";
// import { Routes } from "discord-api-types/v9";

// const commands = [];
// const commandFiles = readdirSync("./commands").filter((file) =>
//   file.endsWith(".js")
// );

// for (const file of commandFiles) {
//   const command = require(`./commands/${file}`);
//   commands.push(command.data.toJSON());
// }

// const rest = new REST({ version: "9" }).setToken(token);

// (async () => {
//   try {
//     await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
//       body: commands,
//     });

//     console.log("Successfully registered application commands.");
//   } catch (error) {
//     console.error(error);
//   }
// })();

const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
// const { clientId, guildId, token } = require("./config.json");
require("dotenv").config();

const commands = [];
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.APP_ID, process.env.GUILD_ID),
      {
        body: commands,
      }
    );
    console.log("Les commandes ont étés enregistrées !");
  } catch (error) {
    console.error(error);
  }
})();
