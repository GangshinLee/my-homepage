# -*- coding: utf-8 -*-
import sys

filepath = r"c:\Users\user\Desktop\my_homapage\index.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

replacements = [
    ("김도현", "이강신"),
    ("Dohyun Kim", "Gangshin Lee"),
    ("Kim, Dohyun", "Lee, Gangshin"),
    ("Dohyun", "Gangshin"),
    ("&lt;DK /&gt;", "&lt;GL /&gt;"),
    ("kim2025adaptive", "lee2025adaptive"),
    ("kim2024multimodal", "lee2024multimodal"),
    ("kim2023selfsup", "lee2023selfsup"),
    ("kim2024patent", "lee2024patent"),
    ("dohyun.kim.research@example.com", "otter1212@gmail.com"),
]

for old, new in replacements:
    content = content.replace(old, new)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully replaced name in index.html")
