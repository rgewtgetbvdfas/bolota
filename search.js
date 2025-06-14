
const produtos = [
  { nome: "Clássico Especial Combo", arquivo: "produtos/classico_especial.html" },
  { nome: "Cheddar Bacon Duplo Combo", arquivo: "produtos/cheddar_bacon_duplo.html" },
  { nome: "Duplo Cream Combo", arquivo: "produtos/duplo_cream.html" },
  { nome: "Água", arquivo: "produtos/agua.html" },
  { nome: "Coca 1L Lata", arquivo: "produtos/bebida_coca.html" }
  // Adicione mais produtos conforme necessário
];

function toggleSearch() {
  const container = document.getElementById("search-container");
  container.style.display = container.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase();
    results.innerHTML = "";

    const encontrados = produtos.filter(p => p.nome.toLowerCase().includes(query));
    encontrados.forEach(produto => {
      const li = document.createElement("li");
      li.textContent = produto.nome;
      li.style.cursor = "pointer";
      li.style.padding = "5px 0";
      li.addEventListener("click", () => {
        window.location.href = produto.arquivo;
      });
      results.appendChild(li);
    });
  });
});
