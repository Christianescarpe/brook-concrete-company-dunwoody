const https = require('https');
const fs = require('fs');

const sheetId = '1XQ4uWndgSo635IY6WOQL7YgDK2Q4NsLwNm36DALUH4U';
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;

function download(url, dest, cb) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log('Redirecting to', res.headers.location);
      return download(res.headers.location, dest, cb);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close(cb);
    });
  }).on('error', err => {
    console.error(err);
  });
}

download(url, 'spreadsheet.xlsx', () => {
  console.log('Downloaded spreadsheet.xlsx, size:', fs.statSync('spreadsheet.xlsx').size);
});
