const https = require('https');
const fs = require('fs');

const sheetId = '1XQ4uWndgSo635IY6WOQL7YgDK2Q4NsLwNm36DALUH4U';
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/htmlview`;

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('sheet_preview.html', data);
    console.log('Saved sheet_preview.html, length:', data.length);
    
    // Look for tabs
    const tabRegex = /id="sheet-button-([^"]+)"[^>]*>.*?<a[^>]*>([^<]+)<\/a>/gs;
    let match;
    const tabs = [];
    while ((match = tabRegex.exec(data)) !== null) {
      tabs.push({ gid: match[1], name: match[2].trim() });
    }
    console.log('Found tabs:', JSON.stringify(tabs, null, 2));
  });
}).on('error', err => console.error(err));
