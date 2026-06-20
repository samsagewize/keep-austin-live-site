import "./styles.css";

const artists = [
  { name: "@nicthecig", date: "Jun 16, 2026", tone: "Live room heat" },
  { name: "@aliza1k", date: "Jun 15, 2026", tone: "Mic Drop set" },
  { name: "@yvng.slxgg", date: "Jun 8, 2026", tone: "Austin spotlight" },
  { name: "@blakchyl", date: "Jun 2, 2026", tone: "Performance cut" },
  { name: "@dirtyglove_cjay", date: "Jun 2026", tone: "Raw stage energy" },
  { name: "@floss_thaboss", date: "Apr 2026", tone: "Street-level sound" }
];

const stats = [
  ["761", "posts"],
  ["5.4K+", "followers"],
  ["2010", "keeping Austin live"]
];

const app = document.querySelector("#app");

app.innerHTML = `
  <main>
    <section class="hero" aria-label="Keep Austin Live">
      <div class="hero__media" aria-hidden="true"></div>
      <nav class="nav">
        <a class="brand" href="#top" aria-label="Keep Austin Live home">
          <img class="brand__logo" src="/assets/keep-austin-live-logo.jpg" alt="" />
          <span>Keep Austin Live</span>
        </a>
        <div class="nav__links">
          <a href="#mic-drop">Mic Drop</a>
          <a href="#artists">Artists</a>
          <a href="#book">Book</a>
        </div>
      </nav>

      <div class="hero__content" id="top">
        <img class="hero__crest" src="/assets/keep-austin-live-logo.jpg" alt="Keep Austin Live logo" />
        <p class="kicker">Content Capital Of the World</p>
        <h1>Keep Austin Live</h1>
        <p class="hero__copy">
          Live performance captures, Mic Drop sessions, and artist-first promotion from Austin's underground stage.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="https://www.instagram.com/keepaustinlive_/?hl=en">Book on Instagram</a>
          <a class="button button--ghost" href="#artists">Recent Drops</a>
        </div>
      </div>

      <aside class="statbar" aria-label="Profile stats">
        ${stats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}
      </aside>
    </section>

    <section class="intro" id="mic-drop">
      <div class="intro__copy">
        <p class="eyebrow">Mic Drop Performance</p>
        <h2>Short-form live sets built for artists who need the room to feel immediate.</h2>
      </div>
      <div class="intro__panel">
        <p>
          Book a Live Performance or Mic Drop session through @keepaustinlive_ and @artistallegiance.
          Built around Austin artists, quick turnarounds, and social-ready performance energy.
        </p>
      </div>
    </section>

    <section class="lineup" id="artists" aria-label="Recent Keep Austin Live artists">
      <div class="section-heading">
        <p class="eyebrow">Recent drops</p>
        <h2>Artists on the feed</h2>
      </div>
      <div class="artist-grid">
        ${artists
          .map(
            (artist, index) => `
              <a class="artist-card" style="--i:${index}" href="https://www.instagram.com/keepaustinlive_/?hl=en" aria-label="Watch ${artist.name} on Keep Austin Live Instagram">
                <div class="video-eye" aria-hidden="true">
                  <span class="video-eye__scan"></span>
                  <span class="video-eye__shape">
                    <span class="video-eye__viewer">
                      <span class="video-eye__stage"></span>
                      <span class="video-eye__iris"></span>
                    </span>
                    <span class="video-eye__play"></span>
                  </span>
                </div>
                <div class="artist-card__copy">
                  <span>${artist.date}</span>
                  <h3>${artist.name}</h3>
                  <p>${artist.tone}</p>
                </div>
              </a>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="fund">
      <div>
        <p class="eyebrow">Austin rooted</p>
        <h2>2024 and 2026 Austin Live Music Fund recipient.</h2>
      </div>
      <p>
        Keeping Austin Live since 2010 with local artist promotion, live performance media,
        and collaborations across the city music community.
      </p>
    </section>

    <section class="book" id="book">
      <div>
        <p class="eyebrow">Get on stage</p>
        <h2>Ready for a Mic Drop?</h2>
      </div>
      <a class="button button--primary" href="https://www.instagram.com/keepaustinlive_/?hl=en">Message @keepaustinlive_</a>
    </section>
  </main>
`;
