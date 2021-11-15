const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');

const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

const prefix = '$';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs
    .readdirSync('./commands/')
    .filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Gładkobot jest online');
    client.channels
        .find(channel => channel.name === '🤖┇вσт')
        .send('Gładko poszło, jestem online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands
            .get('reactionrole')
            .execute(message, args, Discord, client);
        // message.channel.send('Discord.js v13 do wyjebania <3');
    } else if (command === 'reactionrolegroup') {
        client.commands
            .get('reactionrolegroup')
            .execute(message, args, Discord, client);
    }
});

client.login(PROCESS_ENV_TOKEN);
