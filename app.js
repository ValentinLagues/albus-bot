// Require the necessary discord.js classes
import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

// Interactions with "/" commands
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "gregory") {
    await interaction.reply("Non mais les gars, c'est un délire là !");
  } else if (commandName === "patxi") {
    await interaction.reply("Connard !");
  } else if (commandName === "montrer") {
    await interaction.reply("NON");
  } else if (commandName === "albus") {
    await interaction.reply("Alors ça....");
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
