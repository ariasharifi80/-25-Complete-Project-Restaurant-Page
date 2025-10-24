// src/components/contact.js

export default function getContactHTML() {
  return `
    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-header">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Reach out for reservations, events, or feedback.</p>
        </div>

        <div class="contact-grid">
          <!-- Info Card -->
          <div class="contact-card">
            <h3>Get in Touch</h3>
            <ul class="contact-details">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <span>123 Flavor Street, Foodville</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-1.034-1.034a.678.678 0 0 0-.77.063L12.457 9.678a.678.678 0 0 0-.063.77l1.034 1.034c-.19.583-.638.986-1.142 1.142a16.075 16.075 0 0 1-5.023-5.023c-.156-.504-.559-.952-1.142-1.142L9.678 3.543a.678.678 0 0 0-.77-.063L7.874 4.514a.678.678 0 0 0-.063.77z"/>
                </svg>
                <a href="tel:5551234567">(555) 123-4567</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <a href="mailto:hello@deliciousbites.com">hello@deliciousbites.com</a>
              </li>
            </ul>

            <h4>Hours</h4>
            <ul class="hours-list">
              <li><span>Mon–Thu</span> <span>11am – 9pm</span></li>
              <li><span>Fri–Sat</span> <span>11am – 10pm</span></li>
              <li><span>Sunday</span> <span>10am – 8pm</span></li>
            </ul>
          </div>

          <!-- Form -->
          <div class="contact-form-wrapper">
            <form class="contact-form" id="contactForm">
              <h3>Send a Message</h3>
              <div class="form-row">
                <div class="form-group">
                  <input type="text" id="name" name="name" required>
                  <label for="name">Name</label>
                </div>
                <div class="form-group">
                  <input type="email" id="email" name="email" required>
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="form-group full-width">
                <textarea id="message" name="message" rows="4" required></textarea>
                <label for="message">Message</label>
              </div>
              <button type="submit" class="form-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
