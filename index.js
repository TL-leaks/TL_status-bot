const Discord = require('discord.js');
const { Client, MessageEmbed, Collection, MessageAttachment  } = require('discord.js');
const bot = new Discord.Client()
const fetch = require("node-fetch")

bot.on('ready', () => {
    console.info(`Logeado con la cuenta: ${bot.user.tag}! TL CITY`);
});

bot.login("TOKEN DEL BOT https://discord.com/developers/applications ")

bot.on('message', msg => {

    if(msg.content.startsWith("-statusauto")){
msg.delete()
        setInterval(function(){
            fetch("http://TU_IP_DE_MAQUINA:3010/dynamic.json", {timeout: 800})
            .then(res => res.json())
            .then((out) => {
                
                const mensaje = new Discord.MessageEmbed()
                    .setColor("#03fc0f")
                    .setTitle("Estado del servidor TL_City")
                    .setDescription("En este canal podrás ver si el servidor está ON o si está OFF para no tener que preguntarlo.\n\nSe irá actualizando a medida que esté abierto: `✅` o cerrado `❌`")
                    .addField("Status", "`✅ ON ✅`\n")
                    .addField("Info", "`IP:` cfx.re/join/ek33va\n`Jugadores:` "+ out["clients"])
                    msg.channel.send(mensaje).then(message => { setTimeout(() => message.delete(), 58000)});
            }).catch(err => {
                const mensaje = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle("Estado del servidor TL_City")
                    .setDescription("En este canal podrás ver si el servidor está ON o si está OFF para no tener que preguntarlo.\n\nSe irá actualizando a medida que esté abierto: `✅` o cerrado `❌`")
                    .addField("Status", "`❌ OFF ❌`\n")
                    .addField("Info", "`IP:` cfx.re/join/ek33va")
                    msg.channel.send(mensaje).then(message => { setTimeout(() => message.delete(), 58000)});
            });
        }, 60000)
        
    }

})