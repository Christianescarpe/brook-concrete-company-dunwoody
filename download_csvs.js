const https = require('https');
const fs = require('fs');

function downloadGid(gid, filename) {
  const sheetId = '1XQ4uWndgSo635IY6WOQL7YgDK2Q4NsLwNm36DALUH4U';
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
  
  function get(url) {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location);
      }
      const file = fs.createWriteStream(filename);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Saved ${filename}, size: ${fs.statSync(filename).size}`);
        });
      });
    }).on('error', console.error);
  }
  get(url);
}

downloadGid('1438420665', 'website_content.csv');
downloadGid('1329550754', 'notes.csv');
