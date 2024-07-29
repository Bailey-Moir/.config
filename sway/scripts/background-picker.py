import glob
import random

ROOT = "/home/charps/.config/sway"

bgs = glob.glob(f"{ROOT}/wallpaper/*")
bg = random.choice(bgs)

f = open(f"{ROOT}/scripts/bg.txt", "w")
f.write(bg)
f.close()

print(bg)
