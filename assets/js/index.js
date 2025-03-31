// import naoVaembora from "./naoVaembora.js";
const cardsData = [
  {
    id: 1,
    title: "Raphael Ramalho",
    company: "\uD83D\uDCBB Webtra Tech",
    description:
      "Desenvolvimento de <strong>sites institucionais e soluções WEB.</strong>",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    whatsapp: 5531983674043,
  },

  {
    id: 2,
    title: "Profissional 2",
    description: "Este é o segundo card.",
    image:
      "https://images.unsplash.com/photo-1743021192936-56644cc30ac7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Profissional 3",
    description: "Este é o terceiro card.",
    image:
      "https://images.unsplash.com/photo-1743021192936-56644cc30ac7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
// Função para renderizar os cards no HTML
function renderCards(arrayDeCards) {
  const container = document.getElementById("card-container");
  container.innerHTML = arrayDeCards
    .map(
      (card) => `
        <div class="card">
          <img class="card-img-profissional" id="card-img-${card.id}" src=${card.image}" alt="${card.name} da empresa ${card.company}">
          <h2>${card.title}</h2>
          <h3>${card.company}</h3>
          <p>${card.description}</p>
          <a href="https://wa.me/${card.whatsapp}" target="_blank" class="whatsapp-icon" title="Falar no WhatsApp">
            <img class="card-img-whatsapp" src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="link WhatsApp">
          </a>
        </div>
      `
    )
    .join(""); // Corrigido o .join("") evita a quebra
}

// Chama a função para renderizar os cards
renderCards(cardsData);
