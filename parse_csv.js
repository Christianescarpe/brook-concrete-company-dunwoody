const fs = require('fs');

function parseCSV(text) {
  const rows = [];
  let currentRow = [];
  let currentVal = '';
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentVal += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentVal);
      currentVal = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentVal);
      rows.push(currentRow);
      currentRow = [];
      currentVal = '';
    } else {
      currentVal += char;
    }
  }
  if (currentVal || currentRow.length > 0) {
    currentRow.push(currentVal);
    rows.push(currentRow);
  }
  return rows;
}

const csvData = fs.readFileSync('website_content.csv', 'utf8');
const rows = parseCSV(csvData);
const headers = rows[0];
console.log('Headers:', headers);
console.log('Total rows:', rows.length - 1);

const pages = [];
for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  if (row.length < 2 || !row[0]) continue;
  const pageObj = {};
  headers.forEach((h, idx) => {
    pageObj[h ? h.trim() : `col_${idx}`] = row[idx] ? row[idx].trim() : '';
  });
  pages.push(pageObj);
}

console.log(`Parsed ${pages.length} pages:`);
pages.forEach((p, idx) => {
  console.log(`${idx + 1}. [${p['Page Title']}] slug: "${p['URL Slug']}"`);
});

fs.writeFileSync('parsed_pages.json', JSON.stringify(pages, null, 2));
console.log('Saved parsed_pages.json');
