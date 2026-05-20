import { InquireForm } from "./inquire-form";

export default function Home() {
  return (
    <>
      <div className="strip">
        <div className="pair">
          <span>EST. 2026</span>
          <span>SAN FRANCISCO</span>
        </div>
        <div className="pair">
          <a href="#brew">Brew</a>
          <a href="/menu">Menu</a>
          <a href="#space">Space</a>
          <a href="#inquire">Club</a>
        </div>
      </div>

      <section className="hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="ripples" aria-hidden="true">
          <svg viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="r1" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset="0.5" stopColor="#fff" stopOpacity="0.25" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,180 Q300,140 600,180 T1200,180"
              stroke="url(#r1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,260 Q300,220 600,260 T1200,260"
              stroke="url(#r1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,360 Q300,320 600,360 T1200,360"
              stroke="url(#r1)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M0,460 Q300,420 600,460 T1200,460"
              stroke="url(#r1)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <span className="wordmark">CAFE RACER</span>
        <h1>
          ESPRESSO<span className="slash">/</span>
          <span className="line">BAR<span className="slash">/</span></span>
          <span className="last">GARAGE.</span>
        </h1>
        <p className="sub">
          The coffee shop for gear heads. Espresso pulled hard, a kitchen
          that knows breakfast, a bar that opens at five, and a garage in
          back for the bikes.
        </p>
        <div className="meta">
          <span>
            OPENING
            <b>Spring 2026</b>
          </span>
          <span>
            CLUB
            <b>Capped at 200 riders</b>
          </span>
          <span>
            SATURDAY RIDE
            <b>Leaves at 8 sharp</b>
          </span>
        </div>
      </section>

      <section className="pillars">
        <article className="pillar work" id="brew">
          <div>
            <div className="num">01</div>
            <h2>BREW.</h2>
          </div>
          <p>
            Single-origin espresso, real drip, and a barista who&apos;ll
            actually pull you a second shot. Open at 6:30. Closed when
            it&apos;s closed.
          </p>
        </article>
        <article className="pillar eat" id="eat">
          <div>
            <div className="num">02</div>
            <h2>EAT.</h2>
          </div>
          <p>
            Breakfast that holds you to lunch. A burger that holds up to a
            ride home. Six dishes done well, not thirty done halfway.
          </p>
        </article>
        <article className="pillar drink" id="drink">
          <div>
            <div className="num">03</div>
            <h2>DRINK.</h2>
          </div>
          <p>
            Cold beer, short cocktail list, the wine you actually want by
            the glass. The bar opens at five. We ID the keys, not the
            licence.
          </p>
        </article>
        <article className="pillar swim" id="ride">
          <div>
            <div className="num">04</div>
            <h2>RIDE.</h2>
          </div>
          <p>
            Three covered spots out back and a lift in the garage. Saturday
            rides leave at 8 sharp — coffee&apos;s on us, fuel&apos;s on
            you.
          </p>
        </article>
      </section>

      <section className="philosophy">
        <span className="eyebrow">— The Pitch —</span>
        <blockquote>
          The coffee shop got <em>quiet.</em> So we built one with a{" "}
          <em>garage.</em>
        </blockquote>
        <div className="attrib">— Founders</div>
      </section>

      <section className="space" id="space">
        <header className="space-head">
          <span className="eyebrow">— The Space —</span>
          <h2>
            FOUR ROOMS.<br />
            <em>One front door.</em>
          </h2>
        </header>
        <div className="space-grid">
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-garage.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">01</span>
              <span className="cap-name">The Garage</span>
              <span className="cap-meta">Three covered spots · Lift in back</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-counter.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">02</span>
              <span className="cap-name">The Counter</span>
              <span className="cap-meta">Espresso · Pour-over · Open at 6:30</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-work-longtable.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">03</span>
              <span className="cap-name">The Long Table</span>
              <span className="cap-meta">Shared · Open · Always set</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-work-desks.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">04</span>
              <span className="cap-name">The Floor</span>
              <span className="cap-meta">Booths · Banquettes · Power</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-bar.jpg')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">05</span>
              <span className="cap-name">The Bar</span>
              <span className="cap-meta">Opens at 5 · Closes when it does</span>
            </figcaption>
          </figure>
          <figure className="space-photo">
            <div
              className="space-photo-img"
              style={{ backgroundImage: "url('/photo-storefront.png')" }}
              aria-hidden="true"
            />
            <figcaption>
              <span className="cap-num">06</span>
              <span className="cap-name">The Front Door</span>
              <span className="cap-meta">584 4th St · San Francisco</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cta-band" id="inquire">
        <h2>JOIN THE CLUB.</h2>
        <InquireForm />
      </section>

      <footer className="footer">
        <span className="mark">CAFE RACER</span>
        <span>Espresso · Bar · Garage · 2026</span>
        <span>San Francisco · See you Saturday</span>
      </footer>
    </>
  );
}
