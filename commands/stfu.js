module.exports = {
    name: 'stfu',
    description: 'Mutuje kawę.',
    async execute(message, args, Discord, client) {
        const memberId = '561228400870686723';
        const member = message.guild.members.cache.get(memberId);

        if (
            message.member.roles.cache.has('938035219112558642') || // korepetytor
            message.member.roles.cache.has('938028987848994816') // wierny uczeń
        ) {
            console.log('Jesteś gładkim albo wiernym uczniem');
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
            console.log('Jesteś sus');
            message.channel.send(
                'Nie możesz zmutować/odmutować Kawy, beka z ciebie.'
            );
        }
    },
};
