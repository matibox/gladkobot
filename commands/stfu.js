module.exports = {
    name: 'stfu',
    description: 'Mutuje kawę.',
    async execute(message, args, Discord, client) {
        const memberId = '561228400870686723';

        message.channel.send('Kawa został zmutowany :)');
        message.guild.members.cache.get(memberId).voice.setMute(true);
    },
};
