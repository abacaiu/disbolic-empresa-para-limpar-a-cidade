// script.js
document.getElementById('report-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar recarregar a página
    
    const problemType = document.getElementById('problem-type').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    // Simular o envio de dados
    console.log(`Relato Enviado:\nTipo: ${problemType}\nLocalização: ${location}\nDescrição: ${description}`);
    
    // Mostrar uma mensagem de sucesso
    alert('Obrigado! Seu relato foi enviado com sucesso.');
    
    // Limpar o formulário após o envio
    document.getElementById('report-form').reset();
});
