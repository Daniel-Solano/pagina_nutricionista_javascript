var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do elemento (que neste caso é recarregar a página e apagar o formulário).
    
    var form = document.querySelector("#form-adiciona") // Obtém dados do formulário
    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);    

    var erros = validaPaciente(paciente);
    console.log(erros)
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }    
    
    adicionaPacienteNaTabela(paciente);

    form.reset(); // Limpa os campos do formulário após a inclusão
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente){ // Adicionando o paciente na tabela 
    var pacienteTr = montaTr(paciente); // Cria a tr e td do paciente
    var tabela = document.querySelector("#tabela-pacientes"); // Seleciona tabela do index.html
    tabela.appendChild(pacienteTr); // Adiciona a tag "tr" na tabela do index.html
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

titulo.addEventListener("click", function(){ // Selecionamos um elemento e adicionamos um "escutador" de eventos nele mais a função.
    console.log("Olha só, posso chamar uma função anônima.");
});

function obtemPacienteDoFormulario(form){ // Função que cria um objeto
    var paciente = { // Declaração de objeto
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // Função que cria nova tag
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // Insere a tag "td" dentro da tag "tr"
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado; // Insere conteúdo na tag
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco")
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco")
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco")
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco")
    }

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!"); // Laço "if" em uma linha, "push" adiciona à lista
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");

    return erros;
}