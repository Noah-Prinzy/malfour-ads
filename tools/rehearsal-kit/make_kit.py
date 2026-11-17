"""Rehearsal kit for the Inventory explainer: a scannable EAN-13 image and a sample import CSV.
All codes use GS1's 200-299 'internal use' prefix, which is never assigned to real products.
Run: python make_kit.py"""
import csv
from PIL import Image, ImageDraw, ImageFont

L = ["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"]
G = ["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"]
R = ["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"]
PAR = ["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"]

def check(d12):
    s = sum(int(c) * (3 if i % 2 else 1) for i, c in enumerate(d12))
    return str((10 - s % 10) % 10)

def ean13(d12):
    code = d12 + check(d12)
    bits = "101" + "".join((L if p == "L" else G)[int(c)] for c, p in zip(code[1:7], PAR[int(code[0])])) \
        + "01010" + "".join(R[int(c)] for c in code[7:]) + "101"
    return code, bits

def png(code, bits, path, mod=8, h=420):
    quiet = 11 * mod
    w = len(bits) * mod + 2 * quiet
    im = Image.new("RGB", (w, h + 110), "white")
    d = ImageDraw.Draw(im)
    guard = {0, 1, 2, 45, 46, 47, 48, 49, 92, 93, 94}
    for i, b in enumerate(bits):
        if b == "1":
            bh = h + 25 if i in guard else h
            d.rectangle([quiet + i * mod, 30, quiet + (i + 1) * mod - 1, 30 + bh], fill="black")
    f = ImageFont.truetype("C:/Windows/Fonts/ARIALNB.TTF", 62)
    d.text((quiet - 70, h + 38), code[0], font=f, fill="black")
    d.text((quiet + 3 * mod + 3 * mod, h + 38), code[1:7], font=f, fill="black")
    d.text((quiet + 50 * mod + 3 * mod, h + 38), code[7:], font=f, fill="black")
    im.save(path)

# 1) the barcode shown on the phone during the video (the "new product" we add)
code, bits = ean13("200123456780")
png(code, bits, "barcode-new-product.png")
print("new product barcode:", code)

# 2) sample import file: 8 clearly fictional products
rows = [
 ("Demo Paracetamol 500mg", "Paracetamol", "Pain & fever", "Tablet", "Strip of 10", 10, 60, 100, "DEMO-B001", "2028-03-31", 200, 50),
 ("Demo Amoxi 250mg", "Amoxicillin", "Antibiotics", "Capsule", "Strip of 10", 10, 180, 300, "DEMO-B002", "2027-11-30", 120, 40),
 ("Demo Cough Syrup 100ml", "Guaifenesin", "Cough & cold", "Bottle", "Bottle of 1", 1, 900, 1400, "DEMO-B003", "2027-09-30", 60, 20),
 ("Demo ORS Sachet", "Oral rehydration salts", "Rehydration", "Sachet", "Box of 20", 20, 1200, 1800, "DEMO-B004", "2028-06-30", 40, 10),
 ("Demo Antacid Tab", "Aluminium hydroxide", "Digestive", "Tablet", "Strip of 12", 12, 150, 250, "DEMO-B005", "2028-01-31", 150, 30),
 ("Demo Vitamin C 500mg", "Ascorbic acid", "Vitamins", "Tablet", "Tube of 20", 20, 700, 1200, "DEMO-B006", "2028-08-31", 80, 20),
 ("Demo Antiseptic 100ml", "Chlorhexidine", "First aid", "Bottle", "Bottle of 1", 1, 800, 1300, "DEMO-B007", "2028-02-29", 45, 15),
 ("Demo Eye Drops 10ml", "Lubricant eye drops", "Eye care", "Bottle", "Bottle of 1", 1, 2500, 3900, "DEMO-B008", "2027-12-31", 30, 10),
]
hdr = ["Brand name","Generic name","Category","Base unit","Pack size","Units per pack","Barcode","Cost price (RWF)","Sell price (RWF)","Batch number","Expiry date","Opening quantity","Reorder level","Supplier","VAT category"]
with open("sample-import.csv", "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh); w.writerow(hdr)
    for i, (n, g, c, u, p, k, cost, sell, b, e, q, rl) in enumerate(rows):
        w.writerow([n, g, c, u, p, k, ean13("200987654%03d" % (i + 1))[0], cost, sell, b, e, q, rl, "Demo Supplier Ltd", "TAX_B"])
print("wrote sample-import.csv with", len(rows), "rows")
