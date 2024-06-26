const { Manager } = require('erela.js')

module.exports = (client) => {
    return new Manager({
        nodes: [{
            host: "localhost",
            password: "lavalink1234",
            port: 2333
        }],
        send: (id, payload) => {
            const guild = client.guilds.cache.get(id)
            if (guild) guild.shard.send(payload)
        }
    })
        .on("nodeConnect", node => console.log(`Node "${node.options.identifier}" Conectado.`))
        .on("nodeError", (node, error) => console.log(
            `Node "${node.options.identifier}" encountered an error: ${error.message}.`
        ))
        .on("trackStart", (player, track) => {
            const channel = client.channels.cache.get(player.textChannel);
            channel.send(`Tocando Agora: \`${track.title}\`, solicitado por ${track.requester.toString()}.`)
        })
        .on("queueEnd", player => {
            const channel = client.channels.cache.get(player.textChannel);
            channel.send("A fila de musicas acabou.")

            setTimeout(() => {
                player.destroy()
            }, 5* 60000)
        });
}