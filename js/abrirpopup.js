// Função para abrir o popup de edição
function openEditPopup(cpf, email, instituicao, nome, senha, telefone) {
    document.getElementById('editCpf').value = cpf;
    document.getElementById('editEmail').value = email;
    document.getElementById('editInstituicao').value = instituicao;
    document.getElementById('editNome').value = nome;
    document.getElementById('editSenha').value = senha;
    document.getElementById('editTelefone').value = telefone;

    document.getElementById('editPopup').style.display = 'block';
}     

// Função para fechar o popup de edição
function closeEditPopup() {
    document.getElementById('editPopup').style.display = 'none';
}
