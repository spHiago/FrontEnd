function executar(event)
{
    event.preventDefault();

    const nome =document.querySelector("#nome").value;
    const idade =document.querySelector("#idade").value;
    const email =document.querySelector("#email").value;
    const termos =document.querySelector("#termos").checked;

    if (!nome || !idade || !email || !termos) {
        alert("Por favor, preencha todos os campos e aceite os termos.");
        return;
    }
    alert("Bem-Vindo " + nome + "!");
}