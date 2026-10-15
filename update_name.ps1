$files = @(
    "c:\Users\user\Desktop\my_homapage\index.html",
    "c:\Users\user\Desktop\my_homapage\styles.css",
    "c:\Users\user\Desktop\my_homapage\script.js",
    "c:\Users\user\Desktop\my_homapage\README.md"
)

foreach ($filePath in $files) {
    if (Test-Path $filePath) {
        $text = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
        $text = $text.Replace("김도현", "이강신")
        $text = $text.Replace("Dohyun Kim", "Gangshin Lee")
        $text = $text.Replace("Kim, Dohyun", "Lee, Gangshin")
        $text = $text.Replace("dohyun.kim.research@example.com", "otter1212@gmail.com")
        $text = $text.Replace("&lt;DK /&gt;", "&lt;GL /&gt;")
        $text = $text.Replace("kim2025adaptive", "lee2025adaptive")
        $text = $text.Replace("kim2024multimodal", "lee2024multimodal")
        $text = $text.Replace("kim2023selfsup", "lee2023selfsup")
        $text = $text.Replace("kim2024patent", "lee2024patent")
        $text = $text.Replace("Dohyun", "Gangshin")
        [System.IO.File]::WriteAllText($filePath, $text, [System.Text.Encoding]::UTF8)
        Write-Host "Updated: $filePath"
    }
}
