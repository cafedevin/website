const menu = {
  "Frühstück": [
    ["Süßes Frühstück", "5,00 €", "croissant"],
    ["Kleines Frühstück", "7,90 €", "fruh"],
    ["Simit Pfanne", "8,00 €", "simit"],
    ["Simit Pfanne mit Sucuk", "10,00 €", "simit_sucuk"],
    ["Menemen mit Sucuk", "9,00 €", "menemen"],
    ["Sucukpfanne", "7,00 €", "sucukpfanne"],
    ["Spiegelei / Rührei (3 Eier)", "6,00 €", "spiegelei"],
    ["Rührei mit Sucuk", "8,00 €", "sucukpfanne"],
    ["Kuymak", "9,00 €", "kuymak"],
    ["Sucuk-Käse-Sandwich", "5,00 €", null],
    ["Serpme Kahvaltı (pro Person, ab 2 Personen)", "15,00 €", "fruh"]
  ],

  "Warme Speisen": [
    ["Mantı", "Preis auf Anfrage", "manti"],
    ["Linsensuppe", "Preis auf Anfrage", "soup"]
  ],

  "Çiğköfte": [
    ["Çiğköfte Dürüm", "6,00 €", "cigwrap"],
    ["Çiğköfte 250 g", "8,00 €", "cig"],
    ["Çiğköfte 500 g", "14,00 €", "cig"],
    ["Çiğköfte 1 kg", "24,90 €", "cig"],
    ["Çiğköfte-Sushi", "9,00 €", "cig"]
  ],

  "Desserts": [
    ["Waffel", "ab 3,90 €", "waffle"],
    ["Crêpe", "ab 3,90 €", "crepe"],
    ["Bella Vista Mono Kuchen", "5,00 €", null],
    ["Erdnuss-Karamell Mono Kuchen", "5,00 €", null],
    ["Schoko Mono Kuchen", "5,00 €", "schoko"],
    ["Spekulatius Mono Kuchen", "5,00 €", null],
    ["Himbeer Mono Kuchen", "Preis auf Anfrage", null],
    ["Pistazien Mono Kuchen", "Preis auf Anfrage", "pistazien"],
    ["Apfelkuchen", "Preis auf Anfrage", null],
    ["Käsekuchen", "Preis auf Anfrage", null],
    ["Donauwelle", "Preis auf Anfrage", null],
    ["Bienenstich", "Preis auf Anfrage", null],
    ["Schoko-Creme-Torte", "Preis auf Anfrage", null],
    ["Tiramisu", "Preis auf Anfrage", null],
    ["Trileçe", "Preis auf Anfrage", null],
    ["Baklava", "Preis auf Anfrage", null]
  ],

  "Heiße Getränke": [
    ["Espresso", "2,30 €", null],
    ["Doppelter Espresso", "3,30 €", null],
    ["Espresso Macchiato", "2,80 €", null],
    ["Caffè Americano", "3,00 €", null],
    ["Cappuccino", "3,50 €", null],
    ["Milchkaffee", "4,20 €", null],
    ["Latte Macchiato", "4,00 €", null],
    ["Heiße Schokolade", "4,00 €", null],
    ["Matcha Latte", "5,90 €", null],
    ["Erdbeer-Matcha-Latte", "6,90 €", null],
    ["Karamell-Matcha-Latte", "6,90 €", null],
    ["Vanille-Matcha-Latte", "6,90 €", null],
    ["Schwarzer Tee – klein", "2,00 €", null],
    ["Schwarzer Tee – groß", "3,00 €", null],
    ["Grüner Tee", "3,90 €", null],
    ["Kamillentee", "3,90 €", null],
    ["Pfefferminztee", "3,90 €", null],
    ["Früchtetee", "3,90 €", null]
  ],

  "Kalte Getränke": [
    ["Iced Americano", "4,00 €", null],
    ["Iced Latte", "5,00 €", null],
    ["Iced Matcha Latte", "5,90 €", null],
    ["Iced Erdbeer-Matcha-Latte", "6,90 €", null],
    ["Iced Karamell-Matcha-Latte", "6,90 €", null],
    ["Iced Vanille-Matcha-Latte", "6,90 €", null],
    ["Eiskaffee mit Eis", "7,20 €", null],
    ["Eisschokolade", "7,20 €", null],
    ["Milchshake – klein", "4,80 €", null],
    ["Milchshake – groß", "6,00 €", null],
    ["Apfelsaft", "3,00 €", null],
    ["Orangensaft", "3,00 €", null],
    ["Coca-Cola", "3,00 €", null],
    ["Coca-Cola Zero Sugar", "3,00 €", null],
    ["Sprite", "3,00 €", null],
    ["Fanta", "3,00 €", null],
    ["Red Bull", "3,30 €", null],
    ["Apfelschorle", "3,00 €", null],
    ["Uludağ Gazoz", "3,00 €", null],
    ["Stilles Wasser", "2,50 €", null],
    ["Mineralwasser mit Kohlensäure", "2,50 €", null],
    ["Durstlöscher", "2,00 €", null],
    ["Ayran", "2,50 €", null]
  ]
};

const hashToCategory = {
  "#fruehstueck": "Frühstück",
  "#warme": "Warme Speisen",
  "#cigkoefte": "Çiğköfte",
  "#desserts": "Desserts",
  "#getraenke": "Heiße Getränke"
};

let active = hashToCategory[location.hash] || "Frühstück";

function render() {
  const tabs = document.getElementById("tabs");
  const items = document.getElementById("items");

  if (!tabs || !items) {
    console.error("Menu elements not found!");
    return;
  }

  tabs.innerHTML = Object.keys(menu).map(category => `
    <button class="tab ${category === active ? "active" : ""}"
            data-cat="${category}">
      ${category}
    </button>
  `).join("");

  tabs.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      active = button.dataset.cat;
      render();
    });
  });

  items.innerHTML = menu[active].map(([name, price, img]) => `
    <article class="item">
      ${
        img
          ? `<img src="images/${img}.jpg"
                  alt="${name}"
                  loading="lazy"
                  onerror="this.style.display='none'">`
          : `<div class="placeholder">☕</div>`
      }

      <div class="info">
        <div class="line">
          <span>${name}</span>
          <strong>${price}</strong>
        </div>
      </div>
    </article>
  `).join("");
}

render();
