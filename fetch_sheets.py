import urllib.request
import re
import json

sheet_id = '1XQ4uWndgSo635IY6WOQL7YgDK2Q4NsLwNm36DALUH4U'
url = f'https://docs.google.com/spreadsheets/d/{sheet_id}/htmlview'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        with open('sheet_preview.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print('Saved sheet_preview.html, length:', len(html))
        
        # Look for sheet tabs / buttons
        tabs = re.findall(r'<li id="sheet-button-([^"]+)">.*?<a[^>]*>([^<]+)</a>', html, re.DOTALL)
        print('Tabs:', tabs)
        if not tabs:
            # alternative regex
            tabs2 = re.findall(r'id="sheet-button-([^"]+)"[^>]*><a[^>]*>([^<]+)<', html)
            print('Tabs2:', tabs2)
except Exception as e:
    print('Error:', e)
