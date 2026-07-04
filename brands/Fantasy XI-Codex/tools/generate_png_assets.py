from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "exports"
OUT.mkdir(exist_ok=True)

NAVY = "#07111F"
PANEL = "#091826"
PANEL2 = "#0D2232"
SLATE = "#273142"
GREEN = "#12B76A"
WHITE = "#F7F7F2"
AMBER = "#F5B841"
RED = "#EF4444"

# Registered Soccer/Football Envato Fonts
WORLD_CONDENSED = ROOT / "fonts/vendor-envato/world/WORLD-Condensed.ttf"
INTER_SOCCER = ROOT / "fonts/vendor-envato/inter-soccer/Inter-Soccer.ttf"
INTER_SOCCER_OUTLINE = ROOT / "fonts/vendor-envato/inter-soccer/Inter-Soccer-Outline.ttf"
BIGSTAGE = ROOT / "fonts/vendor-envato/bigstage/Bigstage.ttf"
MOVAULT = ROOT / "fonts/vendor-envato/movault/Movault.ttf"
MANUVER = ROOT / "fonts/vendor-envato/manuver/Manuver Rounded.otf"


def font(path, size):
    try:
        return ImageFont.truetype(str(path), size)
    except Exception:
        return ImageFont.truetype("arial.ttf", size)


def center(draw, xy, text, fnt, fill):
    box = draw.textbbox((0, 0), text, font=fnt)
    x = xy[0] - (box[2] - box[0]) / 2
    y = xy[1] - (box[3] - box[1]) / 2
    draw.text((x, y), text, font=fnt, fill=fill)


def rounded(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def pitch(draw, box, line=WHITE, alpha=70):
    color = tuple(int(line[i:i+2], 16) for i in (1, 3, 5)) + (alpha,)
    x1, y1, x2, y2 = box
    draw.rectangle(box, outline=color, width=4)
    draw.line((x1 + (x2-x1)//2, y1, x1 + (x2-x1)//2, y2), fill=color, width=4)
    draw.ellipse((x1+(x2-x1)//2-100, y1+(y2-y1)//2-100, x1+(x2-x1)//2+100, y1+(y2-y1)//2+100), outline=color, width=4)


def save(img, name):
    img.save(OUT / name)


def logo():
    img = Image.new("RGBA", (1080, 1080), NAVY)
    d = ImageDraw.Draw(img)
    d.ellipse((120, 120, 960, 960), outline=SLATE, width=24)
    shield = [(540, 130), (860, 248), (860, 528), (820, 670), (716, 820), (540, 930), (364, 820), (260, 670), (220, 528), (220, 248)]
    d.polygon(shield, fill=PANEL)
    d.line(shield + [shield[0]], fill=GREEN, width=24)
    d.rectangle((320, 310, 760, 680), outline=WHITE, width=10)
    d.line((540, 310, 540, 680), fill=WHITE, width=6)
    d.ellipse((470, 425, 610, 565), outline=WHITE, width=6)
    d.line((390, 395, 470, 620), fill=WHITE, width=50)
    d.line((470, 395, 390, 620), fill=WHITE, width=50)
    d.line((600, 395, 600, 620), fill=WHITE, width=50)
    d.line((690, 395, 690, 620), fill=WHITE, width=50)
    d.polygon([(790, 240), (725, 430), (805, 430), (675, 660), (720, 485), (650, 485), (730, 240)], fill=AMBER)
    center(d, (540, 805), "DEADLINE XI", font(WORLD_CONDENSED, 92), WHITE)
    center(d, (540, 880), "WITH PAPA RANJEET", font(MANUVER, 34), GREEN)
    save(img, "deadline-xi-logo-1080.png")


def banner():
    img = Image.new("RGBA", (2560, 1440), NAVY)
    d = ImageDraw.Draw(img)
    pitch(d, (170, 188, 2390, 1252), alpha=55)
    rounded(d, (560, 423, 2000, 1017), 34, PANEL, SLATE, 6)
    center(d, (1280, 615), "DEADLINE XI", font(WORLD_CONDENSED, 190), WHITE)
    rounded(d, (790, 704, 1770, 780), 10, GREEN)
    center(d, (1280, 742), "WITH PAPA RANJEET", font(MANUVER, 46), NAVY)
    center(d, (1280, 858), "SAFE PICKS  |  SMART PUNTS  |  CAPTAINCY CALLS", font(INTER_SOCCER, 44), AMBER)
    center(d, (1280, 936), "Daily World Cup Fantasy calls in Hinglish", font(MANUVER, 32), WHITE)
    save(img, "youtube-channel-banner-2560x1440.png")


def thumbnail():
    img = Image.new("RGBA", (1280, 720), NAVY)
    d = ImageDraw.Draw(img)
    
    # Background Grid
    pitch(d, (54, 54, 1226, 666), alpha=45)
    
    # Dynamic Diagonal Split Panel
    d.polygon([(720, 0), (1280, 0), (1280, 720), (580, 720)], fill=PANEL)
    d.line([(720, 0), (580, 720)], fill=GREEN, width=4)
    
    # Left Header Tag
    rounded(d, (54, 72, 420, 142), 8, GREEN)
    d.text((82, 86), "DEADLINE XI", font=font(INTER_SOCCER, 40), fill=NAVY)
    
    # Headline text
    d.text((70, 180), "CAPTAIN", font=font(WORLD_CONDENSED, 132), fill=WHITE)
    d.text((70, 330), "LOCK?", font=font(INTER_SOCCER_OUTLINE, 138), fill=AMBER)
    
    # Right Side Mini FUT Card
    card_pts = [(800, 130), (1120, 130), (1150, 160), (1150, 480), (1120, 510), (800, 510), (770, 480), (770, 160)]
    d.polygon(card_pts, fill=PANEL2)
    d.line(card_pts + [card_pts[0]], fill=SLATE, width=6)
    
    # Card avatar circle & ?
    d.ellipse((960 - 90, 260 - 90, 960 + 90, 260 + 90), fill=PANEL, outline=GREEN, width=4)
    center(d, (960, 265), "?", font(WORLD_CONDENSED, 120), WHITE)
    
    # Red chip inside card
    rounded(d, (830, 380, 1090, 440), 8, RED)
    center(d, (960, 412), "AANKH BAND?", font(MANUVER, 30), WHITE)
    
    d.text((70, 610), "PAPA RANJEET KA DIRECT CALL", font=font(MANUVER, 38), fill=GREEN)
    save(img, "youtube-thumbnail-captain-call-1280x720.png")


def story():
    img = Image.new("RGBA", (1080, 1920), NAVY)
    d = ImageDraw.Draw(img)
    rounded(d, (64, 80, 1016, 1840), 36, PANEL, SLATE, 6)
    center(d, (540, 235), "DEADLINE XI", font(WORLD_CONDENSED, 112), WHITE)
    rounded(d, (198, 316, 882, 394), 12, GREEN)
    center(d, (540, 355), "PAPA RANJEET REMINDER", font(MANUVER, 38), NAVY)
    center(d, (540, 700), "LOCK", font(WORLD_CONDENSED, 170), AMBER)
    center(d, (540, 855), "BEFORE", font(WORLD_CONDENSED, 150), WHITE)
    center(d, (540, 1010), "DEADLINE", font(WORLD_CONDENSED, 150), RED)
    rounded(d, (150, 1160, 930, 1350), 20, PANEL2)
    center(d, (540, 1236), "Apna captain check kar lo.", font(MANUVER, 42), WHITE)
    center(d, (540, 1304), "Naam nahi, minutes dekho.", font(MANUVER, 36), GREEN)
    rounded(d, (220, 1540, 860, 1636), 18, AMBER)
    center(d, (540, 1588), "SEND YOUR DRAFT", font(INTER_SOCCER, 42), NAVY)
    save(img, "instagram-story-deadline-reminder-1080x1920.png")


def square(name, label, icon):
    img = Image.new("RGBA", (1080, 1080), NAVY)
    d = ImageDraw.Draw(img)
    d.ellipse((220, 180, 860, 820), fill=PANEL, outline=GREEN, width=20)
    center(d, (540, 500), icon, font(WORLD_CONDENSED, 250), AMBER)
    center(d, (540, 870), label, font(INTER_SOCCER, 62), WHITE)
    save(img, name)


def avatar():
    img = Image.new("RGBA", (1080, 1080), NAVY)
    d = ImageDraw.Draw(img)
    d.ellipse((130, 130, 950, 950), fill=PANEL, outline=GREEN, width=22)
    d.ellipse((370, 245, 710, 585), fill="#B97846")
    d.pieslice((330, 210, 750, 460), 180, 360, fill="#151515")
    d.ellipse((456, 408, 492, 444), fill="#151515")
    d.ellipse((588, 408, 624, 444), fill="#151515")
    d.arc((410, 500, 670, 680), 20, 160, fill="#151515", width=22)
    d.pieslice((320, 575, 760, 920), 180, 360, fill=GREEN)
    rounded(d, (330, 216, 750, 308), 46, AMBER)
    center(d, (540, 262), "PAPA RANJEET", font(MANUVER, 42), NAVY)
    center(d, (540, 910), "MAZA AEGA", font(WORLD_CONDENSED, 78), WHITE)
    save(img, "papa-ranjeet-avatar-1080.png")


def player_card():
    # Card is 900x1180
    img = Image.new("RGBA", (900, 1180), NAVY)
    d = ImageDraw.Draw(img)
    
    # Custom Card Outline Path
    card_pts = [(100, 56), (800, 56), (844, 100), (844, 1080), (800, 1124), (100, 1124), (56, 1080), (56, 100)]
    d.polygon(card_pts, fill=PANEL)
    d.line(card_pts + [card_pts[0]], fill=SLATE, width=6)
    
    # Pitch line details in background
    d.line((56, 590, 844, 590), fill=SLATE, width=4)
    d.ellipse((450 - 180, 590 - 180, 450 + 180, 590 + 180), outline=SLATE, width=4)
    
    # Status Badge
    badge_pts = [(92, 92), (292, 92), (317, 128), (292, 164), (92, 164), (77, 128)]
    d.polygon(badge_pts, fill=GREEN)
    center(d, (182, 128), "LOCK", font(INTER_SOCCER, 34), NAVY)
    
    # Player Name & Team
    d.text((92, 210), "PLAYER NAME", font=font(WORLD_CONDENSED, 82), fill=WHITE)
    d.text((96, 305), "TEAM / POSITION", font=font(MANUVER, 32), fill=AMBER)
    
    # Player Avatar Silhouette
    d.ellipse((690 - 105, 240 - 105, 690 + 105, 240 + 105), fill=PANEL2, outline=GREEN, width=6)
    d.pieslice((635, 275, 745, 335), 180, 360, fill=SLATE)
    d.ellipse((690 - 40, 220 - 40, 690 + 40, 220 + 40), fill=SLATE)
    
    # Stat/Metrics Panel
    rounded(d, (92, 400, 808, 610), 18, PANEL2, SLATE, 3)
    d.line((450, 400, 450, 610), fill=SLATE, width=3)
    
    # Price
    d.text((132, 430), "PRICE", font=font(MANUVER, 28), fill=WHITE)
    d.text((132, 485), "[TBS]", font=font(INTER_SOCCER, 68), fill=GREEN)
    
    # Fixture
    d.text((490, 430), "FIXTURE", font=font(MANUVER, 28), fill=WHITE)
    d.text((490, 485), "[TBS]", font=font(INTER_SOCCER, 68), fill=AMBER)
    
    # Papa Ranjeet Call
    d.text((92, 660), "PAPA RANJEET CALL", font=font(WORLD_CONDENSED, 44), fill=WHITE)
    d.text((92, 720), "Tension-free pick hai, lock kar do.", font=font(MANUVER, 34), fill=GREEN)
    
    # Analysis Box
    rounded(d, (92, 830, 808, 1020), 18, PANEL, SLATE, 4)
    d.text((132, 860), "Reason: minutes + role + fixture", font=font(MANUVER, 28), fill=WHITE)
    d.text((132, 920), "Risk: [To be supplied]", font=font(MANUVER, 28), fill=WHITE)
    
    save(img, "player-stat-card-1080.png")


if __name__ == "__main__":
    logo()
    banner()
    thumbnail()
    story()
    square("highlight-cover-captains-1080.png", "CAPTAINS", "C")
    square("highlight-cover-drafts-1080.png", "DRAFTS", "XI")
    square("highlight-cover-results-1080.png", "RESULTS", "+")
    square("highlight-cover-start-here-1080.png", "START", "!")
    avatar()
    player_card()
    print(f"Generated PNG assets in {OUT}")
