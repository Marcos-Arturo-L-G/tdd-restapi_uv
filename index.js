require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 8112;

server.listen(PORT, () => console.log(`server is live at localhost:${PORT}`));