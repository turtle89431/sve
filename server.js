const http = require('http');
const https = require("https");
const express = require('express');
const fs = require("fs")
const { ExpressPeerServer } = require('peer');
const Bundler = require('parcel-bundler');
const file = 'src/index.html';
const options = {};
const bundler = new Bundler(file, options);
const app = express();
const server = http.createServer(app);
const ssoptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/test.winserworks.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/test.winserworks.com/fullchain.pem')
};

const sockServer = https.createServer(ssoptions, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
});

const socketIO = require("socket.io")(server, {
    cors: {
        origin: "https://test.winserworks.com",
        methods: ["GET", "POST"]
    }
})

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use('/images', express.static("images"))

app.get("/user", (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
})


socketIO.on('connection', socket => {
    console.log("hello", socket.id)
})
app.use(bundler.middleware());
server.listen(1234);
