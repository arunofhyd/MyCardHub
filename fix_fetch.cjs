const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

code = code.replace(
    'const response = await fetch(GOOGLE_APPS_SCRIPT_URL);',
    "const response = await fetch(GOOGLE_APPS_SCRIPT_URL + '?t=' + Date.now(), { cache: 'no-store' });"
);

fs.writeFileSync('src/App.jsx', code);
