// src/components/menu.js

export default function getMenuHTML() {
  return `
    <section class="menu-section">
    
      <h2>Our Menu</h2>
      <p>Fresh ingredients, bold flavors — crafted daily.</p>

      <div class="menu-category">
        <h3>Starters</h3>
        <ul class="menu-items">
          <li>
            <span class="item-name">Garlic Bread</span>
            <span class="item-price">$6</span>
            <p class="item-desc">Toasted baguette with garlic butter & parsley</p>
          </li>
          <li>
            <span class="item-name">Caesar Salad</span>
            <span class="item-price">$9</span>
            <p class="item-desc">Romaine, parmesan, croutons, house dressing</p>
          </li>
        </ul>
      </div>

      <div class="menu-category">
        <h3>Mains</h3>
        <ul class="menu-items">
          <li>
            <span class="item-name">Grilled Salmon</span>
            <span class="item-price">$18</span>
            <p class="item-desc">With lemon-dill sauce and seasonal veggies</p>
          </li>
          <li>
            <span class="item-name">Mushroom Risotto</span>
            <span class="item-price">$16</span>
            <p class="item-desc">Arborio rice, wild mushrooms, truffle oil</p>
          </li>
        </ul>
      </div>
    </section>
  `;
}
