// MAS TIPOS DE REPLIES? GIFS FOTOS EMBEDS...

module.exports = {
	name: 'efe',
  description: 'El bot te dice efe.',
  aliases: ['f'],
  usage: '[usuario]',
  guildOnly: true,
  async execute(msg, args) {
		if (!msg.mentions.users.size) { 
      msg.delete()
      return msg.channel.send("***F***")
    }
	},
};