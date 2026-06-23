// ===================================================
// INTERAÇÃO 1: ACESSIBILIDADE (AUMENTAR TAMANHO DA LETRA)
// ===================================================
const btnFonte = document.getElementById('btn-fonte');

btnFonte.addEventListener('click', () => {
    // Alterna a classe 'fonte-grande' no corpo inteiro do site
    document.body.classList.toggle('fonte-grande');
    
    // Altera o texto do botão para o usuário saber o que vai acontecer
    if (document.body.classList.contains('fonte-grande')) {
        btnFonte.innerText = "🔍 Diminuir Letra";
    } else {
        btnFonte.innerText = "🔍 Aumentar Letra";
    }
});

// ===================================================
// INTERAÇÃO 2: SIMULADOR DE SEGURO VS GOLPE
// ===================================================
function verificarResposta(opcaoEscolhida) {
    const campoResultado = document.getElementById('resultado-simulador');
    
    // Como a mensagem fictícia pede senhas por link, ela é um GOLPE!
    if (opcaoEscolhida === 'golpe') {
        campoResultado.innerHTML = "🎯 PARABÉNS! Você acertou. Bancos NUNCA enviam links pedindo para você recadastrar senhas. Você está seguro!";
        campoResultado.className = "resultado sucesso"; // Aplica estilo verde
    } else {
        campoResultado.innerHTML = "❌ CUIDADO! Essa mensagem é um golpe. Nunca clique em links que pedem senhas ou dados bancários.";
        campoResultado.className = "resultado erro"; // Aplica estilo vermelho
    }
    
    // Torna a caixa de resultado visível
    campoResultado.classList.remove('hidden');
}
