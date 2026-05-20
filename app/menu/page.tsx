import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cafe Racer — Menu",
  description:
    "Cafe Racer's menu: espresso, breakfast, sandwiches, beer, cocktails, and the Garage Plate for riders. Open at 6:30, last call at 11.",
  openGraph: {
    title: "Cafe Racer — Menu",
    description:
      "Espresso, breakfast, sandwiches, beer, cocktails, and the Garage Plate. Open at 6:30, last call at 11.",
    images: ["/photo-hero.jpg"],
    type: "website",
    siteName: "Cafe Racer",
  },
};

type Item = { name: string; price?: string; desc?: string };

function MenuSection({
  eyebrow,
  title,
  intro,
  items,
  tone = "cream",
  photo,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Item[];
  tone?: "cream" | "beige" | "pool" | "chrome" | "teal";
  photo?: string;
}) {
  const style = photo ? { backgroundImage: `url(${photo})` } : undefined;
  return (
    <section
      className={`menu-section tone-${tone}${photo ? " has-photo" : ""}`}
      style={style}
    >
      <div className="menu-section-inner">
        <header className="menu-section-head">
          <span className="menu-eyebrow">{eyebrow}</span>
          <h2 className="menu-section-title">{title}</h2>
          {intro && <p className="menu-section-intro">{intro}</p>}
        </header>
        <ul className="menu-list">
          {items.map((it, i) => (
            <li key={i} className="menu-item">
              <div className="menu-item-line">
                <span className="menu-item-name">{it.name}</span>
                <span className="menu-item-dots" aria-hidden />
                {it.price && <span className="menu-item-price">{it.price}</span>}
              </div>
              {it.desc && <p className="menu-item-desc">{it.desc}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const espresso: Item[] = [
  { name: "Espresso", price: "4", desc: "Double, always. Single on request." },
  { name: "Macchiato", price: "4.5", desc: "Espresso, one spoon of foam." },
  { name: "Cortado", price: "5", desc: "Equal parts. The right drink, 9am to 2pm." },
  { name: "Cappuccino", price: "5.5", desc: "Six ounces. No bigger." },
  { name: "Latte", price: "6", desc: "Twelve ounces. Whole, oat, or none." },
  { name: "Americano", price: "4.5", desc: "Long pull, hot water. Bottomless after a ride." },
  { name: "Drip", price: "4", desc: "Single origin, rotating. Bottomless." },
  { name: "Pour-over", price: "7", desc: "Made one at a time. Worth the wait." },
  { name: "Cold brew", price: "5.5", desc: "Twelve-hour, on tap. Not iced coffee." },
  { name: "Iced latte", price: "6", desc: "Espresso, milk, ice. That's it." },
];

const pastries: Item[] = [
  { name: "Almond croissant", price: "6", desc: "Made tomorrow morning, eaten today." },
  { name: "Plain croissant", price: "5", desc: "All butter. Always." },
  { name: "Chocolate babka", price: "7", desc: "Pulls apart. Doesn't survive the ride home." },
  { name: "Banana bread", price: "5", desc: "Toasted. Salted butter." },
  { name: "Morning bun", price: "5", desc: "Cinnamon, citrus zest, sugar." },
  { name: "Cookie of the day", price: "4", desc: "Ask. There's only one kind." },
];

const breakfast: Item[] = [
  { name: "The Racer", price: "14", desc: "Two eggs, sourdough, brown butter. Cooked while you sit down." },
  { name: "Bacon, egg + cheese", price: "11", desc: "On a roll. Foil-wrapped. Gone in four bites." },
  { name: "Avocado toast", price: "13", desc: "Levain, garlic-chili, lemon, salt." },
  { name: "Granola + yogurt", price: "11", desc: "House granola, stone fruit, honey." },
  { name: "Soft-scrambled eggs", price: "15", desc: "Crème fraîche, chives, more chives." },
  { name: "Pancakes", price: "13", desc: "Brown butter, real maple." },
];

const sandwiches: Item[] = [
  { name: "The Racer Burger", price: "17", desc: "Smash patty, cheddar, secret sauce, soft roll. Wrapped for the ride." },
  { name: "Crispy chicken", price: "16", desc: "Buttermilk, hot honey, pickles, brioche." },
  { name: "Tuna melt", price: "15", desc: "Albacore, cheddar, grilled sourdough." },
  { name: "Italian sub", price: "16", desc: "Salami, mortadella, provolone, hot peppers." },
  { name: "Roast veg", price: "13", desc: "Charred peppers, eggplant, pesto, focaccia." },
  { name: "Grilled cheese", price: "12", desc: "Three cheeses, sourdough. Tomato soup +4." },
];

const garagePlate: Item[] = [
  {
    name: "The Garage Plate",
    price: "22",
    desc: "Two eggs, two slices of bacon, sausage, hash, sourdough, coffee. The pre-ride.",
  },
  { name: "Steak + eggs", price: "26", desc: "Hanger, two eggs, hash, toast. Order before the ride." },
  { name: "Breakfast burrito", price: "14", desc: "Eggs, chorizo, cheese, salsa verde. Foil-wrapped." },
  { name: "Chilaquiles", price: "15", desc: "Salsa roja, crema, two eggs, queso fresco." },
  { name: "Biscuit + gravy", price: "13", desc: "Sausage gravy, two biscuits, hot sauce on the table." },
  { name: "Hash + eggs", price: "14", desc: "Crispy potatoes, peppers, two eggs, salsa verde." },
];

const beer: Item[] = [
  { name: "Cold lager — can", price: "6", desc: "Whatever's in the fridge. Ask." },
  { name: "Local pilsner — draft", price: "7", desc: "Local, light, cold." },
  { name: "West Coast IPA — draft", price: "8", desc: "Hopped. You know." },
  { name: "Hazy IPA — can", price: "8", desc: "If you must." },
  { name: "Pale ale — can", price: "7", desc: "Sessionable." },
  { name: "Athletic — can", price: "6", desc: "Non-alcoholic. Cold." },
];

const cocktails: Item[] = [
  { name: "Negroni", price: "16", desc: "Gin, Campari, sweet vermouth, orange." },
  { name: "Old Fashioned", price: "16", desc: "Bourbon, sugar, Angostura, orange peel." },
  { name: "Martini", price: "16", desc: "Gin or vodka. Olive or twist." },
  { name: "Manhattan", price: "17", desc: "Rye, sweet vermouth, bitters." },
  { name: "Spicy margarita", price: "15", desc: "Tequila, lime, jalapeño, salt." },
  { name: "Paloma", price: "14", desc: "Tequila, grapefruit, lime, salt." },
  { name: "Espresso martini", price: "15", desc: "Vodka, espresso, coffee liqueur. The post-ride pick-me-up." },
  { name: "Aperol spritz", price: "13", desc: "Aperol, prosecco, soda, orange." },
];

const wine: Item[] = [
  { name: "Sparkling — glass", price: "12 — 18", desc: "Cava, prosecco, grower champagne. Bottle list on request." },
  { name: "Whites + Rosé — glass", price: "11 — 16", desc: "Lean, dry, food-friendly." },
  { name: "Reds — glass", price: "12 — 20", desc: "Light to structured." },
];

const zeroProof: Item[] = [
  { name: "House lemonade", price: "6", desc: "Real lemons, light sugar, mint." },
  { name: "Tonic + cucumber", price: "7", desc: "House tonic, cucumber, lime." },
  { name: "Iced tea", price: "4", desc: "Black, jasmine, or rotating herb." },
  { name: "Topo Chico", price: "4" },
  { name: "San Pellegrino", price: "4" },
  { name: "Athletic IPA", price: "8", desc: "Cold. Non-alcoholic." },
];

export default function MenuPage() {
  return (
    <>
      <div className="strip">
        <div className="pair">
          <Link href="/">← Cafe Racer</Link>
          <span>SAN FRANCISCO</span>
        </div>
        <div className="pair">
          <Link href="/#brew">Brew</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/#inquire">Club</Link>
        </div>
      </div>

      <article className="menu-page">
        <header className="menu-hero">
          <div className="menu-hero-photo" aria-hidden="true" />
          <div className="menu-hero-content">
            <span className="menu-hero-eyebrow">— Cafe &amp; Bar —</span>
            <h1 className="menu-hero-title">
              Six things done well,<br />
              <em>not thirty done halfway.</em>
            </h1>
            <p className="menu-hero-lede">
              Espresso from 6:30. Breakfast and sandwiches all day. Bar
              opens at five. The Garage Plate runs whenever there&apos;s a
              ride. Menu changes when something better shows up at the
              market.
            </p>
            <p className="menu-hero-caveat">
              Prices and selection illustrative · final menu sets in spring ·
              eat in, take out, or pack it for the ride
            </p>
          </div>
        </header>

        <MenuSection
          eyebrow="From 6:30"
          title="Espresso + Coffee"
          intro="Single-origin, rotating. House espresso pulled at 18g, 36g out, 27 seconds. Ask the barista if you want it different."
          items={espresso}
          tone="cream"
        />

        <MenuSection
          eyebrow="From 6:30"
          title="Pastries"
          intro="Baked tomorrow morning, eaten today. Made down the street."
          items={pastries}
          tone="beige"
        />

        <MenuSection
          eyebrow="From 7"
          title="Breakfast"
          intro="The first hour belongs to coffee. The second to eggs."
          items={breakfast}
          tone="cream"
        />

        <MenuSection
          eyebrow="Saturday + pre-ride"
          title="The Garage Plate"
          intro="What you eat before you ride, and what you order when you come back. Foil-wrapped to-go on Saturdays."
          items={garagePlate}
          tone="chrome"
          photo="/photo-garage.png"
        />

        <MenuSection
          eyebrow="All day"
          title="Sandwiches"
          intro="Made on real bread. Cut clean. Wraps for the road, +1."
          items={sandwiches}
          tone="beige"
          photo="/photo-dinner.jpg"
        />

        <MenuSection
          eyebrow="From 5"
          title="Cocktails"
          intro="Classics, executed properly. No froth, no foam, no flame."
          items={cocktails}
          tone="teal"
          photo="/photo-bar.jpg"
        />

        <MenuSection
          eyebrow="Always"
          title="Beer"
          intro="Cold. Local where we can. Cans for the patio."
          items={beer}
          tone="pool"
        />

        <MenuSection
          eyebrow="Always"
          title="Wine"
          items={wine}
          tone="beige"
        />

        <MenuSection
          eyebrow="Always"
          title="Zero Proof"
          intro="A real list, not an afterthought. The riders drink these."
          items={zeroProof}
          tone="cream"
        />

        <footer className="menu-foot">
          <p>
            <strong>Cafe Racer</strong> &nbsp;·&nbsp; 584 4th St, San Francisco &nbsp;·&nbsp;
            Opening Spring 2026 &nbsp;·&nbsp; Saturday ride leaves at 8
          </p>
          <p className="fine">
            Allergens on request. Service included on parties of six or more.
            Menu and prices subject to change as we finalise the kitchen.
          </p>
        </footer>
      </article>
    </>
  );
}
