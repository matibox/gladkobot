module.exports = {
    name: 'stfu',
    description: 'Mutuje kawę.',
    async execute(message, args, Discord, client) {
        const memberId = '561228400870686723';
        const channelId = message.guild.channels.find(
            channel => (channel.name = '📚┇gładkie korepetycje')
        );

        message.channel.send('Kawa został zmutowany :)');
        message.guild.members.cache.get(memberId).voice.setMute(true);
    },
};
