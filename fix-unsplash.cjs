const fs = require('fs');
const path = require('path');
const dir = './src/content/projects';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.md')) {
    let p = path.join(dir, file);
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/^image:\s*".*unsplash.*".*\r?\n/gm, '');
    fs.writeFileSync(p, c);
  }
});
