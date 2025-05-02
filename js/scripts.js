/**
 * scripts.js - Validação de Formulário EBAC
 * 
 * Este script realiza a validação completa de um formulário com:
 * - Campos de texto (nome, email, senha)
 * - Campos numéricos (dois valores para comparação)
 * - Exibe alertas específicos para cada tipo de validação
 */

// 1. CAPTURA DOS ELEMENTOS DO FORMULÁRIO
// --------------------------------------
// Obtém referência ao formulário principal pelo ID
const formulario = document.getElementById('formulario');

// Obtém referência ao campo de nome completo
const campoNome = document.getElementById('nome');

// Obtém referência ao campo de email
const campoEmail = document.getElementById('email');

// Obtém referência ao campo de senha
const campoSenha = document.getElementById('senha');

// Obtém referência ao primeiro campo numérico (valor A)
const botaoA = document.getElementById('botaoA');

// Obtém referência ao segundo campo numérico (valor B)
const botaoB = document.getElementById('botaoB');


// 2. FUNÇÕES DE VALIDAÇÃO INDIVIDUAIS
// -----------------------------------

/**
 * Valida se o nome contém pelo menos nome e sobrenome
 * @param {string} nome - O nome completo a ser validado
 * @returns {boolean} - Retorna true se for válido
 */
function validaNome(nome) {
    // Remove espaços extras no início/fim e divide por espaços
    const nomeComoArray = nome.trim().split(' ');
    // Verifica se tem pelo menos 2 partes (nome e sobrenome)
    return nomeComoArray.length >= 2;
}

/**
 * Valida o formato básico de um email
 * @param {string} email - O email a ser validado
 * @returns {boolean} - Retorna true se contiver '@' e '.'
 */
function validaEmail(email) {
    // Verifica presença dos caracteres essenciais
    return email.includes('@') && email.includes('.');
}

/**
 * Valida o comprimento mínimo da senha
 * @param {string} senha - A senha a ser validada
 * @returns {boolean} - Retorna true se tiver 6+ caracteres
 */
function validaSenha(senha) {
    // Verifica o tamanho da string
    return senha.length >= 6;
}

/**
 * Valida se os valores são números válidos
 * @param {number} numA - Primeiro número
 * @param {number} numB - Segundo número
 * @returns {boolean} - Retorna true se ambos forem números válidos
 */
function validaNumeros(numA, numB) {
    // Verifica se algum valor não é um número
    if (isNaN(numA) || isNaN(numB)) {
        alert('Por favor, insira números válidos em ambos os campos numéricos!');
        return false;
    }
    return true;
}


// 3. EVENTO PRINCIPAL - SUBMIT DO FORMULÁRIO
// ------------------------------------------

// Adiciona um "ouvinte" de evento para quando o formulário for enviado
formulario.addEventListener('submit', function(e) {
    // Previne o comportamento padrão de recarregar a página
    e.preventDefault();
    
    // 3.1 VALIDAÇÃO DOS CAMPOS DE TEXTO
    // ---------------------------------
    
    // Valida o campo nome - se falhar, exibe alerta e interrompe
    if (!validaNome(campoNome.value)) {
        alert('O nome não está completo! Deve conter pelo menos um nome e sobrenome.');
        return; // Sai da função
    }
    
    // Valida o campo email - se falhar, exibe alerta e interrompe
    if (!validaEmail(campoEmail.value)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    // Valida o campo senha - se falhar, exibe alerta e interrompe
    if (!validaSenha(campoSenha.value)) {
        alert('A senha deve ter pelo menos 6 caracteres!');
        return;
    }
    
    // 3.2 VALIDAÇÃO DOS CAMPOS NUMÉRICOS
    // ----------------------------------
    
    // Converte os valores para números decimais
    const valorA = parseFloat(botaoA.value);
    const valorB = parseFloat(botaoB.value);
    
    // Valida se são números - se falhar, já exibe alerta dentro da função
    if (!validaNumeros(valorA, valorB)) return;
    
    // 3.3 COMPARAÇÃO DOS VALORES
    // -------------------------
    
    // Verifica se B é maior que A
    if (valorB > valorA) {
        alert('SUCESSO: O segundo número é maior que o primeiro!');
    } 
    // Verifica se A é maior que B
    else if (valorA > valorB) {
        alert('AVISO: O segundo número não é maior que o primeiro');
    } 
    // Caso sejam iguais
    else {
        alert('Os números são iguais!');
    }
    
    // 3.4 FEEDBACK FINAL
    // -----------------
    
    // Exibe mensagem de sucesso com os dados principais
    alert(`Formulário enviado com sucesso!\nNome: ${campoNome.value}\nEmail: ${campoEmail.value}`);
    
    // Limpa todos os campos do formulário (opcional)
    formulario.reset();
    
    // Dica: Poderíamos focar no primeiro campo novamente
    // campoNome.focus();
});


// 4. CONSIDERAÇÕES FINAIS
// -----------------------
// - Todas as validações estão interligadas em um único fluxo
// - Cada etapa tem seu próprio feedback específico
// - O código está organizado em seções lógicas
// - Fácil de manter e adicionar novas validações