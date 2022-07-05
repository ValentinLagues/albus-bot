import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();
import commands from "./deploy-commands.js";
import { ethers } from "ethers";
import hehehe from "./assets/hehe.gif";

// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
let provider;
if (typeof window !== "undefined") {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log(provider);
}
// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
// const signer = provider.getSigner();

// Look up the current block number
// await provider.getBlockNumber();
// 14681280

// Get the balance of an account (by address or ENS name, if supported by network)
// balance = await provider.getBalance("ethers.eth");
// { BigNumber: "182826475815887608" }

// Often you need to format the output to something more user-friendly,
// such as in ether (instead of wei)
// ethers.utils.formatEther(balance);
// '0.182826475815887608'

// If a user enters a string in an input field, you may need
// to convert it from ether (as a string) to wei (as a BigNumber)
// ethers.utils.parseEther("1.0");
// { BigNumber: "1000000000000000000" }

// Send 1 ether to an ens name.
// const tx = signer.sendTransaction({
//   to: "ricmoo.firefly.eth",
//   value: ethers.utils.parseEther("1.0"),
// });

// Create a new client instance
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const servers = [
  "971685052599656449",
  "888739366590107678",
  "962034321345114142",
];

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Alors ça!");

  for (const server of servers) {
    commands.map((command) => {
      client.api
        .applications(client.user.id)
        .guilds(server)
        .commands.post({
          data: {
            name: command.name,
            description: command.description,
            options: command.options,
          },
        });
      console.log(`${command.name} ajoutée`);
    });
  }
});

// Interactions with "/" commands
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "gregory") {
    await interaction.reply("Non mais les gars, c'est un délire là !");
  } else if (commandName === "patxi") {
    await interaction.reply("Connard !");
  } else if (commandName === "bonjour") {
    await interaction.reply("Bonjour à tous");
  } else if (commandName === "albus") {
    await interaction.reply("Alors ça....");
  } else if (commandName === "héhéhé") {
    await interaction.replay(hehehe);
  } else if (commandName === "lenz") {
    await interaction.reply(
      "Vive la droite qui privatisent des entreprises publics profitable ( ex fdj adp) et renfloue des entreprises privées dans le rouge quel belle gestion . Privatisons les profits et mutualisons les pertes. Merci aussi de vendre nos fleurons industrielles de rendre les autoroutes payantes à prix exorbitant pour le contribuable .  Vraiment bien négocier ça encore. Merci de nous mettre en concurrence avec le monde entier on adore !!! Merci pour la deregulation financière fabuleux.  Et quel Audace en matière écologique du jamais vu ! Quel humanisme lors de la manifpourtous ! Non franchement la droite française"
    );
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
