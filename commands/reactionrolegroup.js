module.exports = {
    name: 'reactionrolegroup',
    description: 'Sets up a reaction role message!',
    async execute(message, args, Discord, client) {
        const channel = '938037025314078761';
        const groupOneRole = message.guild.roles.cache.find(
            role => role.name === 'Grupa 1'
        );
        const groupTwoRole = message.guild.roles.cache.find(
            role => role.name === 'Grupa 2'
        );

        const groupOneEmote = '❌';
        const groupTwoEmote = '⭕';

        let embed = new Discord.MessageEmbed()
            .setColor('#96812d')
            .setTitle('Wybierz grupę')
            .setDescription(
                'Wybierz swoją grupę aby otrzymywać powiadomienia o przesyłanych plikach z danej grupy\n\n' +
                    `${groupOneEmote} - Grupa 1 \n` +
                    `${groupTwoEmote} - Grupa 2`
            )
            .setFooter('Made by Mateusz Hladky');

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(groupOneEmote);
        messageEmbed.react(groupTwoEmote);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === groupOneEmote) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(groupOneRole);
                } else if (reaction.emoji.name === groupTwoEmote) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(groupTwoRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === groupOneEmote) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(groupOneRole);
                } else if (reaction.emoji.name === groupTwoEmote) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(groupTwoRole);
                }
            } else {
                return;
            }
        });
    },
};
