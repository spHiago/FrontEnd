
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function executar(event) {
    event.preventDefault();

    limparForm();
    validarForm();
}

function limparForm() {
    document.querySelectorAll(
        "#erro-nome, #erro-idade, #erro-email, #erro-termos, #concluido"
    ).forEach((item) => {
        item.textContent = "";
        item.classList.remove("erro", "sucesso");
        item.classList.add("oculto");
    });
}

function validarForm() {
    const nome = document.querySelector("#nome").value.trim();
    const idade = document.querySelector("#idade").value;
    const email = document.querySelector("#email").value.trim();
    const termos = document.querySelector("#termos");

    const errorNome = document.querySelector("#erro-nome");
    const errorIdade = document.querySelector("#erro-idade");
    const errorEmail = document.querySelector("#erro-email");
    const errorTermos = document.querySelector("#erro-termos");
    const concluido = document.querySelector("#concluido");

    if (nome === "") {
        errorNome.textContent = "Campo obrigatório";
        errorNome.classList.add("erro");
        errorNome.classList.remove("oculto");
    }

    if (idade === "") {
        errorIdade.textContent = "Campo obrigatório";
        errorIdade.classList.add("erro");
        errorIdade.classList.remove("oculto");
    } else if (Number(idade) < 18) {
        errorIdade.textContent = "Você deve ter pelo menos 18 anos.";
        errorIdade.classList.add("erro");
        errorIdade.classList.remove("oculto");
    }

    if (email === "") {
        errorEmail.textContent = "Campo obrigatório";
        errorEmail.classList.add("erro");
        errorEmail.classList.remove("oculto");
    } else if (!EMAIL_REGEX.test(email)) {
        errorEmail.textContent = "Digite um e-mail válido.";
        errorEmail.classList.add("erro");
        errorEmail.classList.remove("oculto");
    }

    if (!termos.checked) {
        errorTermos.textContent = "É preciso aceitar os termos!";
        errorTermos.classList.add("erro");
        errorTermos.classList.remove("oculto");
    }

   const valid = document.querySelectorAll(".erro").length === 0;

if (!valid) {
    concluido.textContent = "Corrija os erros antes de prosseguir!";
    concluido.classList.add("erro");
    concluido.classList.remove("sucesso");
} else {
    concluido.textContent = "Cadastro realizado com sucesso!";
    concluido.classList.remove("erro");
    concluido.classList.add("sucesso");
}

concluido.classList.remove("oculto");
}
