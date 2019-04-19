const WebSocket = require('ws');
var app = require('express')();
const client = require('discord-rich-presence')('568882497249607685');

app.get('/script', (req, res) => {
  res.sendFile(__dirname + "/script.js")
})

app.listen(1333)


const wss = new WebSocket.Server({ port: 1234 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    var json = JSON.parse(message);
    if(json.code == "presence") {
      client.updatePresence({
        state: `${json.map}`,
        details: `${json.match} (${json.players})`,
        largeImageKey: 'krunker-icon',
        largeImageText: `${json.region}`,
        smallImageKey: 'krunker-icon',
        smallImageText: `${json.username}`,
        instance: true,
      });
    }
  });

});


