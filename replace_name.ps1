$path = 'c:\Users\user\Desktop\my_homapage\index.html'
$raw = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

$map = [ordered]@{
    '김도현' = '이강신'
    'Dohyun Kim' = 'Gangshin Lee'
    'Kim, Dohyun' = 'Lee, Gangshin'
    'Dohyun' = 'Gangshin'
    '&lt;DK /&gt;' = '&lt;GL /&gt;'
    'kim2025adaptive' = 'lee2025adaptive'
    'kim2024multimodal' = 'lee2024multimodal'
    'kim2023selfsup' = 'lee2023selfsup'
    'kim2024patent' = 'lee2024patent'
    'dohyun.kim.research@example.com' = 'gangshin.lee.research@example.com'
}

foreach ($k in $map.Keys) {
    $raw = $raw.Replace($k, $map[$k])
}

[System.IO.File]::WriteAllText($path, $raw, [System.Text.Encoding]::UTF8)
Write-Host 'Successfully updated index.html'
