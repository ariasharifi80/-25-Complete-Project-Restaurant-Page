// src/components/about.js

export default function getAboutHTML() {
  return `
    <section class="about-section">
      <h2>About Us</h2>
      <div class="about-content">
        <p>
          Founded in 2015, <strong>Delicious Bites</strong> began as a small family kitchen with a big dream:
          to serve honest, flavorful food made from locally sourced ingredients.
        </p>
        <p>
          Today, we’re proud to welcome guests from around the city into our warm, rustic dining room —
          where every dish tells a story of tradition, care, and passion.
        </p>
        <div class="about-highlight">
          <h3>Our Promise</h3>
          <ul>
            <li>Farm-to-table ingredients</li>
            <li>Zero food waste initiative</li>
            <li>Handcrafted with love</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}
