var username = document.getElementById("menuAccountUsername").innerHTML

console.log(username)
var ws = new WebSocket("ws://localhost:1234");

setInterval(() => {
    var ServerID = window.location.search.split('=')[1];

    fetch("https://matchmaker.krunker.io/game-info?game=" + ServerID).then(res => res.json()).then(json => {
        var match = (json.data.custom ? "In a custom match" : "In a public match")
        var map = "Playing in " + json.data.info
        var players = `${json.clients}/${json.maxClients}`
        var region = `Region: ${json.region}`
        var id = json.id
        ws.send(JSON.stringify({
            code: "presence",
            match,
            map,
            players,
            region,
            username,
            id,
            maxP: json.maxClients,
            P: json.clients
        }))
    }).catch(err => console.warn("Unexcepted error! " + err))
}, 3000)

setInterval(() => {
    ws.send(JSON.stringify({
        code: "asd"
    }))
}, 250)
