const fs = require('fs');
const html = fs.readFileSync('sheet_preview.html', 'utf8');
const gids = html.match(/gid=[0-9]+/g) || [];
console.log('Unique GIDs:', [...new Set(gids)]);

// Find any tab names
const tabMatches = html.match(/<li[^>]*id="sheet-button-[^>]*>[\s\S]*?<\/li>/gi) || [];
console.log('Tab items count:', tabMatches.length);
tabMatches.forEach(t => console.log(t));

// Also search for sheet names / tabs in general
const nameMatches = html.match(/class="name"[^>]*>([^<]+)</gi) || [];
console.log('Names:', nameMatches);
