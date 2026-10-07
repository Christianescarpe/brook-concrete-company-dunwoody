Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("spreadsheet.xlsx")
$sheetEntries = $zip.Entries | Where-Object { $_.FullName -like "xl/worksheets/*" -or $_.FullName -eq "xl/workbook.xml" }
foreach ($entry in $sheetEntries) {
    Write-Host $entry.FullName
}

# Read xl/workbook.xml to see actual sheet names
$wbEntry = $zip.Entries | Where-Object { $_.FullName -eq "xl/workbook.xml" }
$stream = $wbEntry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$content = $reader.ReadToEnd()
Write-Host "Workbook XML:"
Write-Host $content
$zip.Dispose()
