// Formulário de Lavagem
document.getElementById("lavagem-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Captura dos valores preenchidos
  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("numero").value;
  const tipoLavagem = document.getElementById("tipo-lavagem").value;

  // Verificação simples
  if (nome && numero && tipoLavagem) {
    // Exibição do alerta de confirmação
    alert(
      `Agendamento Confirmado!\n\nNome: ${nome}\nTelefone: ${numero}\nTipo de Lavagem: ${tipoLavagem === "simples" ? "Simples" : "Completa"}`
    );
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
});
