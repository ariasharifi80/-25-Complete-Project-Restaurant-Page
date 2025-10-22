// src/components/contact.js

export default function getContactHTML() {
  return `
    <section class="contact-section">
      <h2>Contact Us</h2>
      <div class="contact-info">
        <p><strong>Location:</strong> 123 Flavor Street, Foodville</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> hello@deliciousbites.com</p>
        <p><strong>Hours:</strong></p>
        <ul class="hours-list">
          <li>Monday–Thursday: 11am – 9pm</li>
          <li>Friday–Saturday: 11am – 10pm</li>
          <li>Sunday: 10am – 8pm</li>
        </ul>
      </div>

      <form class="contact-form" id="contactForm">
        <h3>Send us a message</h3>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="form-button">Send Message</button>
      </form>
    </section>
  `;
}
