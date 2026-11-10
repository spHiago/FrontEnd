document.querySelectorAll(" .card").forEach((item) => {
    if (localStorage.getItem(Item.id)) {
        item.classList.add("marcado");
    }
})

function marcar(id, nome) {
    const card = document.querySelector(`#${id}`);
    card.classList.toggle("marcado");

    if (card.classList.contains("marcado")) {
        localStorage.setItem(id, nome);
    } else {
        localStorage.removeItem(id);
    }
}