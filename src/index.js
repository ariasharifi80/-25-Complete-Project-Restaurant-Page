import "./styles/style.css";
import lavaCake from "./images/lava-cake.jpg";
import margarita from "./images/margarita.jpg";
import pasta from "./images/pasta.jpg";
import getMenuHTML from "./pages/menu";
import getAboutHTML from "./pages/aboutUs";
import getContactHTML from "./pages/contact";

// Tab configuration
const tabs = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "contact", label: "Contact" },
  { id: "about", label: "About Us" },
];

// Create tab elements
const tabContainer = document.getElementById("tabs");
tabs.forEach((tab) => {
  const button = document.createElement("button");
  button.className = "tab";
  button.textContent = tab.label;
  button.dataset.id = tab.id;
  tabContainer.appendChild(button);
});

// Create content containers
const contentContainer = document.getElementById("content");
tabs.forEach((tab) => {
  const section = document.createElement("div");
  section.id = tab.id;
  section.className = "content-section";
  section.style.display = "none";

  if (tab.id === "home") {
    section.innerHTML = `
    <section class="home-intro">
    <h2>Welcome to Our Restaurant!</h2>
    
    <p>At <strong>Delicious Bites</strong>, we craft meals with love using ingredients sourced from local farms. </p>
    
    </section>
    <section class="featured-dishes">
        <h3>Today's Specials</h3>
        <div class="dishes-grid">
          <div class="dish-card">
          <img src="${pasta}" alt="Truffle Pasta" class="dish-img">
            <h4>Truffle Pasta</h4>
            <p>Creamy mushroom pasta with black truffle shavings</p>
          </div>
          <div class="dish-card">
          <img class="dish-img" src="${margarita}" alt="margarita pizza">
            <h4> margarita pizza</h4>
            <p>Freshly made margarita pizza with fresh ingredient</p>
          </div>
          <div class="dish-card">
           <img class="dish-img" src="${lavaCake}" alt="Chocolate Lava Cake">
            <h4>Chocolate Lava Cake</h4>
            <p>Warm molten center with vanilla bean ice cream</p>
          </div>
        </div>
      </section>
    `;
  } else if (tab.id === "menu") {
    section.innerHTML = getMenuHTML();
  } else if (tab.id === "contact") {
    section.innerHTML = getContactHTML();
  } else if (tab.id === "about") {
    section.innerHTML = getAboutHTML();
  }

  contentContainer.appendChild(section);
});

// Show first tab by default
document.querySelector(".tab").classList.add("active");
document.getElementById(tabs[0].id).style.display = "block";

// Add tab switching logic
tabContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab")) {
    // Remove active class from all tabs
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("active");
    });

    // Add active class to clicked tab
    e.target.classList.add("active");

    // Hide all sections
    document.querySelectorAll(".content-section").forEach((section) => {
      section.style.display = "none";
    });

    // Show selected section
    const selectedId = e.target.dataset.id;
    document.getElementById(selectedId).style.display = "block";
  }
});
