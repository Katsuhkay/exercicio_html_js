//Fazer anotações sempre que possível para facilitar a leitura do código
//E também para maior fixação no aprendizado

const form = document.getElementById('formulario');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');
//Armazenamos os elementos em variáveis para melhor performance
//Evitamos repetição de getElementById, que é uma operação mais custosa


function validaNome(nome) {
    const nomeComoArray = nome.trim().split(' ');
    return nomeComoArray.length >= 2;
    // Verifica se o nome contém pelo menos dois elementos (nome e sobrenome)
    // O método trim() remove espaços em branco do início e do fim da string
}

function validaEmail(email) {
    return email.includes('@') && email.includes('.');
    // Verifica se o email contém '@' e '.'
    // Isso é uma simplificação, mas para um projeto real
    // pode usar expressões regulares mais complexas
}

function validaSenha(senha) {
    return senha.length >= 6;
    // Verifica se a senha tem pelo menos 6 caracteres
}

form.addEventListener('submit', function(e) {
    // Adiciona um evento de escuta para o evento de envio do formulário
    // O evento é passado como argumento para a função de callback
    
    e.preventDefault();
    // Previne o comportamento padrão do formulário, que é recarregar a página
    // Isso permite que possamos validar os dados antes de enviar
    
    const nomeCompleto = campoNome.value;
    const email = campoEmail.value;
    const senha = campoSenha.value;
    // Armazena os valores dos campos em variáveis para facilitar a validação
    // Isso também melhora a legibilidade do código
    
    if (!validaNome(nomeCompleto)) {
        alert('O nome não está completo! Deve conter pelo menos um nome e sobrenome.');
        return;
        // Se o nome não for válido, exibe um alerta e interrompe a execução
        // do restante do código, evitando que o formulário seja enviado
    }
    
    if (!validaEmail(email)) {
        alert('Por favor, insira um email válido!');
        return;
        // Se o email não for válido, exibe um alerta e interrompe a execução
        // do restante do código, evitando que o formulário seja enviado
    }
    
    if (!validaSenha(senha)) {
        alert('A senha deve ter pelo menos 6 caracteres!');
        return;
        // Se a senha não for válida, exibe um alerta e interrompe a execução
        // do restante do código, evitando que o formulário seja enviado
    }
    
    const mensagemSucesso = `Formulário preenchido com sucesso!\nNome: ${nomeCompleto}\nEmail: ${email}`;
    alert(mensagemSucesso);
    // Se todas as validações passarem, exibe uma mensagem de sucesso
    // A mensagem inclui o nome e o email preenchidos pelo usuário
    
    // Limpa os campos
    campoNome.value = '';
    campoEmail.value = '';
    campoSenha.value = '';
    
    // Opcional: Dar foco ao primeiro campo após limpar
    campoNome.focus();
});