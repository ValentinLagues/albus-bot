import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import dotenv from "dotenv";
dotenv.config();

const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.TOKEN;

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder().setName("albus").setDescription("albus"),
  new SlashCommandBuilder().setName("patxi").setDescription("patxi"),
  new SlashCommandBuilder().setName("bonjour").setDescription("bonjour"),
  new SlashCommandBuilder().setName("gregory").setDescription("gregory"),
  new SlashCommandBuilder().setName("lenz").setDescription("lenz"),
].map((command) => command.toJSON());

export default commands;

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
