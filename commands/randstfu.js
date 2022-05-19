module.exports = {
    name: 'randstfu',
    description: 'Mutes random person on the server!',
    async execute(message, args, Discord, client) {
        const members = await message.guild.members.fetch();
        const randMember = members.radnom();
        console.log(randMember);
    },
};
