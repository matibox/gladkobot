module.exports = {
    name: 'stfu',
    description: 'Mutuje kawę.',
    async execute(message, args, Discord, client) {
        const memberId = '561228400870686723';
        const member = message.guild.members.cache.get(memberId);

        if (message.member.roles.find(role => role.name === 'Korepetytor')) {
            let muted = member.voice.serverMute;
            if (muted) {
                member.voice.setMute(false);
                message.channel.send('Kawa został odmutowany D:');
            } else {
                member.voice.setMute(true);
                message.channel.send(
                    'Kawa został zmutowany, wszyscy się cieszą!'
                );
            }
        } else {
            message.channel.send(
                'Nie możesz zmutować/odmutować Kawy, beka z ciebie.'
            );
        }
    },
};
