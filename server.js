const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: 9000,
  path: '/mon-app'
});

console.log('Serveur PeerJS démarré sur le port 9000');

