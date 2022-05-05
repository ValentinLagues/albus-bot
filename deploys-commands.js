import { readdirSync } from "fs";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const clientId = "971682466026881024";
const guildId = "971685052599656449";
const token =
  "OTcxNjgyNDY2MDI2ODgxMDI0.GbBYt-.x0BPrRl8CVHp9rQq13-TTv1Xceoth7E1DiUHZ0";

const commands = [];
const commandFiles = readdirSync("./commands").filter((file) =>
  file.endsWith(".js")
);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log("Successfully registered application commands.");
  } catch (error) {
    console.error(error);
  }
})();

export default clientId;
