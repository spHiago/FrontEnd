const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function executar(event)
{
    event.preventDefault();

    limparForm();
     validarForm();
}

//() => {} arrow function
function limparForm()
{
    document.querySelectorAll(".erro").forEach((item) => {
        item.classList.remove("erro");
        item.classList.add("oculto");
    });
    document.querySelector("#concluido").classList.add("oculto");
};

function validarForm()
{
      const nome = document.querySelector("#nome").value;
    const errorNome = document.querySelector("#erro-nome");
    if(nome === "")
    {
        errorNome.textContent = "Campo obrigatório";
        errorNome.classList.remove("oculto");
    }
    const idade = document.querySelector("#idade").value;
    const errorIdade = document.querySelector("#erro-idade");
    if (idade === "") {
        errorIdade.textContent = "Campo obrigatório";
        errorIdade.classList.remove("oculto");
    } else if (Number(idade) < 18) {
        errorIdade.textContent = "Você deve ter pelo menos 18 anos.";
        errorIdade.classList.add("erro");
        errorIdade.classList.remove("oculto");
    }

    // VALIDAR EMAIL COM REGEX

    const termos = document.querySelector("#termos");
    const errorTermos = document.querySelector("#erro-termos");
    if (!termos.checked)
    {
        errorTermos.textContent = "É preciso aceitar os termos!";
        errorTermos.classList.add("erro");
        errorTermos.classList.remove("oculto");
    }

    const concluido = document.querySelector("#concluido");
    const valid = document.querySelectorAll(".erro").length === 0;
    if (!valid)
    {
        concluido.textContent = "Corrija os erros antes de prosseguir!";
        concluido.classList.add("erro");
        concluido.classList.remove("oculto");
    }
    else{
        concluido.textContent = "Cadastro realizado com sucesso!";
        concluido.classList.remove("erro");
        concluido.classList.remove("oculto");
    }
}