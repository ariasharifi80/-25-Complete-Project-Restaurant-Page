// src/components/about.js
import aboutImg from "../images/kitchen.jpg";
// and in HTML: <img src="${aboutImg}" alt="Our kitchen">
export default function getAboutHTML() {
  return `
    <section class="about-section">
      <div class="about-container">
        <div class="about-header">
          <h2>Our Story</h2>
          <p>Rooted in tradition, crafted with passion.</p>
        </div>

        <div class="about-content">
          <div class="about-text">
            <p>
              Founded in 2015, <strong>Delicious Bites</strong> began as a humble family kitchen with a simple mission: 
              to serve honest, flavorful food made from ingredients sourced within 50 miles of our door.
            </p>
            <p>
              Today, we welcome guests into our warm, rustic-chic dining room — where every dish tells a story of 
              seasonal produce, time-honored techniques, and a deep love for community.
            </p>

            <div class="values-grid">
              <div class="value-card">
                <div class="value-icon">🌱</div>
                <h3>Farm-to-Table</h3>
                <p>90% of our ingredients come from local farms and artisans.</p>
              </div>
              <div class="value-card">
                <div class="value-icon">♻️</div>
                <h3>Zero Waste</h3>
                <p>We compost, reuse, and repurpose to minimize our footprint.</p>
              </div>
              <div class="value-card">
                <div class="value-icon">❤️</div>
                <h3>Handcrafted</h3>
                <p>Every sauce, bread, and dessert is made in-house daily.</p>
              </div>
            </div>
          </div>

          <div class="about-image-placeholder">
             <img src="${aboutImg}" alt="Our kitchen" class="about-image"> 
            <div class="image-fallback">Restaurant Interior</div>
          </div>
        </div>
      </div>
    </section>
  `;
}
