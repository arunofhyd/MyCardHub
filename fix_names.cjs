const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

code = code.replace(/Purge Terminal/g, 'Delete Card');
code = code.replace(/Protocol Identifier \(Last 4\)/g, 'Card Ending in');
code = code.replace(/Protocol ID \(Last 4\)/g, 'Card Ending in');
code = code.replace(/Security Key:/g, 'Card Ending:');
code = code.replace(/Vault Protocol/g, 'Credit Card Details');
code = code.replace(/Manual Balance/g, 'Outstanding Balance');

// Any others I can find:
code = code.replace(/Purge card from terminal/g, 'Delete card?');

fs.writeFileSync('src/App.jsx', code);
