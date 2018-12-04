const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

//Since we only have 1 contract we will return it directly:
module.exports = solc.compile(source, 1).contracts[':Inbox'];
