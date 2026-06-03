const inputNome = document.getElementById('nome');
const inputAutor = document.getElementById('autor');
const inputEditora = document.getElementById('editora');
const inputOpn = document.getElementById('opn');
const inputNota = document.getElementById('nota');
const botaoSalvar = document.getElementById('botaoSalvar');
const resultado = document.getElementById('resultado');

function salvarFormulario() {
    const nome = inputNome.value;
    const autor = inputAutor.value;
    const editora = inputEditora.value;
    const opn = inputOpn.value;
    const nota = inputNota.value;

    if (!nome || !autor || !editora || !opn || !nota) {
        resultado.innerText = 'Todos os campos são obrigatórios!';
        return;
    }

    resultado.innerText = `Dados salvos! Livro: ${nome}, Nota: ${nota}`;
}

botaoSalvar.addEventListener('click', salvarFormulario);