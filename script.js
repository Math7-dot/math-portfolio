    function toggleCard(cardId, btn) {
      let card = document.getElementById(cardId);
      card.classList.toggle("expandido");
      btn.innerText = card.classList.contains("expandido") ? "Mostrar menos" : "Ver mais";
    }
