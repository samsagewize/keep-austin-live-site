import "./styles.css";
import { mountHeroScene } from "./heroScene.js";

const artists = [
  {
    name: "@nicthecig",
    date: "Jun 16, 2026",
    tone: "Mic Drop Performance",
    link: "https://www.instagram.com/reel/DZqQEaYxOLz/",
    embed: "https://www.instagram.com/reel/DZqQEaYxOLz/embed"
  },
  {
    name: "@aliza1k",
    date: "Jun 15, 2026",
    tone: "Mic Drop Performance",
    link: "https://www.instagram.com/reel/DZnZkEkx8A7/",
    embed: "https://www.instagram.com/reel/DZnZkEkx8A7/embed"
  },
  {
    name: "@yvng.slxgg",
    date: "Jun 8, 2026",
    tone: "Austin spotlight",
    link: "https://www.instagram.com/reel/DZVovXtxpgh/",
    embed: "https://www.instagram.com/reel/DZVovXtxpgh/embed"
  },
  {
    name: "@blakchyl",
    date: "Jun 2, 2026",
    tone: "Mic Drop Performance",
    link: "https://www.instagram.com/reel/DZGaJoNRJPw/",
    embed: "https://www.instagram.com/reel/DZGaJoNRJPw/embed"
  },
  {
    name: "@dirtyglove_cjay",
    date: "Jun 2026",
    tone: "Raw stage energy",
    link: "https://www.instagram.com/reel/DZBIPnQxWzr/",
    embed: "https://www.instagram.com/reel/DZBIPnQxWzr/embed"
  },
  {
    name: "@floss_thaboss",
    date: "Apr 2026",
    tone: "Mic Drop Performance",
    link: "https://www.instagram.com/reel/DXFZy2qkec7/",
    embed: "https://www.instagram.com/reel/DXFZy2qkec7/embed"
  }
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
      <div class="hero__scene" aria-hidden="true"></div>
      <nav class="nav">
        <a class="brand" href="#top" aria-label="Keep Austin Live home">
          <img class="brand__logo" src="/assets/keep-austin-live-logo.jpg" alt="" />
          <span>Keep Austin Live</span>
        </a>
        <div class="nav__links">
          <a href="#mic-drop">Mic Drop</a>
          <a href="#artists">Artists</a>
          <a href="#book">Book</a>
          <details class="contact-menu">
            <summary>Contact</summary>
            <div class="contact-menu__panel">
              <a href="https://www.instagram.com/keepaustinlive_/?hl=en">Message @keepaustinlive_</a>
            </div>
          </details>
        </div>
      </nav>

      <div class="hero__content" id="top">
        <p class="kicker">Content Capital Of the World</p>
        <h1>Keep Austin Live</h1>
        <p class="hero__copy">
          Live performance captures, Mic Drop sessions, and artist-first promotion from Austin's underground stage.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="https://www.instagram.com/keepaustinlive_/?hl=en">Book on Instagram</a>
          <details class="contact-dropdown">
            <summary class="button button--ghost">Contact</summary>
            <div class="contact-dropdown__panel">
              <a href="https://www.instagram.com/keepaustinlive_/?hl=en">Message @keepaustinlive_</a>
            </div>
          </details>
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
          Book a Live Performance or Mic Drop session through @keepaustinlive_.
          Built around Austin artists, quick turnarounds, and social-ready performance energy.
        </p>
      </div>
    </section>

    <section class="lineup" id="artists" aria-label="Recent Keep Austin Live artists">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Recent drops</p>
          <h2>Artists on the feed</h2>
        </div>
        <div class="slider-controls" aria-label="Recent drops controls">
          <button class="slider-button" type="button" data-slide-dir="-1" aria-label="Previous drop">‹</button>
          <button class="slider-button" type="button" data-slide-dir="1" aria-label="Next drop">›</button>
        </div>
      </div>
      <div class="drop-slider">
        <div class="artist-grid" tabindex="0" aria-label="Recent drops slideshow">
        ${artists
          .map(
            (artist, index) => `
              <article class="artist-card embed-card" style="--i:${index}" data-slide-index="${index}">
                <div class="embed-frame">
                  <iframe
                    title="${artist.name} Keep Austin Live Instagram reel"
                    src="${artist.embed}"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
                <div class="artist-card__copy">
                  <span>${artist.date}</span>
                  <h3>${artist.name}</h3>
                  <p>${artist.tone}</p>
                  <a class="drop-link" href="${artist.link}">Open on Instagram</a>
                </div>
              </article>
            `
          )
          .join("")}
        </div>
        <div class="slider-dots" aria-label="Recent drops slide dots">
          ${artists.map((artist, index) => `<button class="slider-dot" type="button" data-slide-to="${index}" aria-label="Show ${artist.name}"></button>`).join("")}
        </div>
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
      <details class="contact-dropdown contact-dropdown--book">
        <summary class="button button--primary">Contact Booking</summary>
        <div class="contact-dropdown__panel">
          <a href="https://www.instagram.com/keepaustinlive_/?hl=en">Message @keepaustinlive_</a>
        </div>
      </details>
    </section>
  </main>
`;

mountHeroScene(document.querySelector(".hero__scene"));

const slider = document.querySelector(".artist-grid");
const slides = Array.from(document.querySelectorAll(".artist-card"));
const dots = Array.from(document.querySelectorAll(".slider-dot"));

function setActiveSlide(index) {
  dots.forEach((dot, dotIndex) => dot.toggleAttribute("aria-current", dotIndex === index));
}

function getCurrentSlideIndex() {
  if (!slider || !slides.length) return 0;
  const sliderLeft = slider.getBoundingClientRect().left;
  return slides.reduce(
    (closest, slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - sliderLeft);
      return distance < closest.distance ? { index, distance } : closest;
    },
    { index: 0, distance: Number.POSITIVE_INFINITY }
  ).index;
}

function goToSlide(index) {
  if (!slides[index]) return;
  slides[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  setActiveSlide(index);
}

document.querySelectorAll("[data-slide-dir]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = Number(button.dataset.slideDir);
    const nextIndex = (getCurrentSlideIndex() + direction + slides.length) % slides.length;
    goToSlide(nextIndex);
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => goToSlide(Number(dot.dataset.slideTo)));
});

if (slider) {
  let scrollFrame = 0;
  slider.addEventListener("scroll", () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => setActiveSlide(getCurrentSlideIndex()));
  });
  setActiveSlide(0);
}
