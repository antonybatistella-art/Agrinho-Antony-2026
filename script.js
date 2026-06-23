// ==========================================
// 1. ACESSIBILIDADE: FONTE E ALTO CONTRASTE
// ==========================================
document.getElementById('btn-fonte').addEventListener('click', () => {
    document.body.classList.toggle('fonte-grande');
});

document.getElementById('btn-contraste').addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// ==========================================
// 2. LEITURA EM VOZ ALTA (TEXTO PARA FALA)
// ==========================================
function lerTextoPrincipal() {
    // Cancela qualquer leitura que já esteja acontecendo para não encavalar
    window.speechSynthesis.cancel();

    // Captura o texto que queremos ler (vamos ler o resumo da introdução e os direitos)
    const textoHero = document.getElementById('texto-intro').innerText;
    const textoDireitos = document.getElementById('direitos').innerText;
    
    const textoCompleto = `${textoHero}. Vamos ler a próxima seção. ${textoDireitos}`;

    // Cria o comando de voz
    const comandoVoz = new SpeechSynthesisUtterance(textoCompleto);
    comandoVoz.lang = 'pt-BR'; // Define o idioma para português brasileiro
    comandoVoz.rate = 1.0;     // Velocidade normal da voz

    // Executa a leitura
    window.speechSynthesis.speak(comandoVoz);
}

// ==========================================
// 3. SIMULADOR COM MÚLTIPLAS MENSAGENS
// ==========================================
const bancoMensagens = [
    {
        texto: '"URGENTE: Banco Informa: Sua conta foi bloqueada. Clique no link para recadastrar sua senha agora: www.bancofalso123.com"',
        respostaCorreta: 'golpe',
        explicacaoSucesso: "🎯 Perfeito! Bancos nunca mandam links por mensagem pedindo senhas.",
        explicacaoErro: "❌ Cuidado! Bancos nunca mandam links de atualização de senha por SMS."
    },
    {
        texto: '"Oi vó, mudei de número temporariamente porque o meu celular quebrou. Preciso pagar uma conta urgente hoje, consegue me mandar um Pix de R$ 500?"',
        respostaCorreta: 'golpe',
        explicacaoSucesso: "🎯 Excelente! Esse é o golpe do Falso Filho. Sempre ligue para o número antigo para confirmar.",
        explicacaoErro: "❌ Atenção! Criminosos criam perfis falsos com fotos de parentes para pedir dinheiro por Pix."
    }
];

let mensagemAtualIndex = 0;

function verificarResposta(opcaoEscolhida) {
    const campoResultado = document.getElementById('resultado-simulador');
    const dadosMensagem = bancoMensagens[mensagemAtualIndex];
    
    if (opcaoEscolhida === dadosMensagem.respostaCorreta) {
        campoResultado.innerHTML = dadosMensagem.explicacaoSucesso;
        campoResultado.className = "resultado sucesso";
    } else {
        campoResultado.innerHTML = dadosMensagem.explicacaoErro;
        campoResultado.className = "resultado erro";
    }
    
    campoResultado.classList.remove('hidden');
    document.getElementById('btn-proximo').classList.remove('hidden');
}

function proximaMensagem() {
    mensagemAtualIndex++;
    if (mensagemAtualIndex >= bancoMensagens.length) {
        mensagemAtualIndex = 0; // Reinicia o jogo
    }
    
    document.getElementById('texto-mensagem').innerText = bancoMensagens[mensagemAtualIndex].texto;
    document.getElementById('resultado-simulador').classList.add('hidden');
    document.getElementById('btn-proximo').classList.add('hidden');
}

// ==========================================
// 4. SIMULADOR DE LIGAÇÃO
// ==========================================
function simularLigacao(numero) {
    alert(`Simulando chamada telefônica de emergência para o número: ${numero}. Em um dispositivo celular real, o aplicativo abriria o discador do telefone agora.`);
}
