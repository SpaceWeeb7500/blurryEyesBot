const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTc3MjUyNDMxODU2MDA5MjE5.XNiWZQ.1YvMCWzqT43jWpHbs8EpcuQ4HTI);
