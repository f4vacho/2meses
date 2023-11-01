const heart = document.getElementById('heart');
const hiddenMessage = document.getElementById('hidden-message');

heart.addEventListener('click', () => {
    heart.style.display = 'none';
    hiddenMessage.style.display = 'block';
});

// Função para mostrar mensagem oculta correspondente ao botão
function showHiddenMessage(buttonId, hiddenMessageId) {
    const button = document.getElementById(buttonId);
    const message = document.getElementById(hiddenMessageId);

    button.addEventListener('click', () => {
        button.style.display = 'none';
        message.style.display = 'block';
    });
}

// Chamar a função para o "btn1"
showHiddenMessage('btn1', 'hidden-message-1');
// Chamar a função para outros botões, se necessário
