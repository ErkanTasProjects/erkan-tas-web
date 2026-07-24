import os
from PIL import Image
assets_dir = r"c:\Users\HezaPcKolog\Desktop\ERKAN TAŞ WEB SİTE\erkan-tas-website\assets"
for file in os.listdir(assets_dir):
    if file.endswith(".jpg") or file.endswith(".png"):
        filepath = os.path.join(assets_dir, file)
        img = Image.open(filepath).convert("RGB")
        webp_path = filepath.rsplit(".", 1)[0] + ".webp"
        if img.width > 1200:
            ratio = 1200 / img.width
            new_height = int(img.height * ratio)
            img = img.resize((1200, new_height), Image.Resampling.LANCZOS)
        img.save(webp_path, "webp", quality=60)
        print(f"Saved {webp_path}")
