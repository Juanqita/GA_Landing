"""Genera las imágenes web del collage (WebP 720 y 1440 + JPG de respaldo).

Uso (desde la raíz del proyecto):  python tools/build_collage.py
Requiere Pillow:  pip install pillow
Lee   assets/collage-<marca>/<foto>.jpg   (originales, no se modifican)
Escribe assets/collage-<marca>/web/<foto>-720.webp, -1440.webp y .jpg
e imprime el aspect-ratio de cada una para ponerlo en el HTML (style="--r: ...").
"""
import json, os
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cfg = json.load(open(os.path.join(ROOT, "tools", "collage.json"), encoding="utf-8"))

for brand, photos in cfg.items():
    if brand.startswith("_"):
        continue
    src_dir = os.path.join(ROOT, "assets", f"collage-{brand}")
    out_dir = os.path.join(src_dir, "web")
    os.makedirs(out_dir, exist_ok=True)
    for name, opts in photos.items():
        src = os.path.join(src_dir, f"{name}.jpg")
        if not os.path.exists(src):
            print(f"  (falta) {src}")
            continue
        im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
        if opts.get("crop"):
            l, t, r, b = opts["crop"]
            W, H = im.size
            im = im.crop((round(l * W), round(t * H), round(r * W), round(b * H)))
        w, h = im.size
        for target in (720, 1440):
            v = im if w <= target else im.resize((target, round(h * target / w)), Image.LANCZOS)
            v.save(os.path.join(out_dir, f"{name}-{target}.webp"), "WEBP", quality=82, method=6)
        fb = im if w <= 1200 else im.resize((1200, round(h * 1200 / w)), Image.LANCZOS)
        fb.save(os.path.join(out_dir, f"{name}.jpg"), "JPEG", quality=82, optimize=True, progressive=True)
        print(f"{brand}/{name}: {w}x{h}  --r: {w / h:.3f}")
