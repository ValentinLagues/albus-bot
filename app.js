// Require the necessary discord.js classes
import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Alors ça!");
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
  } else if (commandName === "lenz") {
    await interaction.reply(
      "Vive la droite qui privatisent des entreprises publics profitable ( ex fdj adp) et renfloue des entreprises privées dans le rouge quel belle gestion . Privatisons les profits et mutualisons les pertes. Merci aussi de vendre nos fleurons industrielles de rendre les autoroutes payantes à prix exorbitant pour le contribuable .  Vraiment bien négocier ça encore. Merci de nous mettre en concurrence avec le monde entier on adore !!! Merci pour la deregulation financière fabuleux.  Et quel Audace en matière écologique du jamais vu ! Quel humanisme lors de la manifpourtous ! Non franchement la droite française"
    );
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
