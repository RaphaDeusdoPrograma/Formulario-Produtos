document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe a mensagem de sucesso
    var successMessage = document.getElementById("successMessage");
    successMessage.classList.add("show");

    // Oculta a mensagem após 3 segundos
    setTimeout(function() {
        successMessage.classList.remove("show");
    }, 3000);

    
});
