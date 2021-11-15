module.exports = {
    name: 'reactionrole',
    description: 'Sets up a reaction role message!',
    async execute(message, args, Discord, client) {
        const channel = '909532424084533249';
        const role = message.guild.roles.cache.find(
            role => role.name === 'Uczeń'
        );

        const emote = '📚';

        let embed = new Discord.MessageEmbed()
            .setColor('#96812d')
            .setTitle('Wybierz rolę')
            .setDescription(
                'Wybierz odpowiednią rolę aby otrzymywać powiadomienia dotyczące korepetycji\n\n' +
                    `${roleStudent} - Uczeń`
            )
            .setFooter('Made by Mateusz Hladky');

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(emote);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emote) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.add(role);
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
                if (reaction.emoji.name === emote) {
                    await reaction.message.guild.members.cache
                        .get(user.id)
                        .roles.remove(role);
                }
            } else {
                return;
            }
        });
    },
};
