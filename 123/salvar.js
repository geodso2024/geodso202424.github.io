
const firebaseConfig = {
    apiKey: "AIzaSyChwMJS0p4pwi9fL-edQEkOhiSupHURjL4",
    authDomain: "gloriamobi-5a5bf.firebaseapp.com",
    databaseURL: "https://gloriamobi-5a5bf-default-rtdb.firebaseio.com",
    projectId: "gloriamobi-5a5bf",
    storageBucket: "gloriamobi-5a5bf.appspot.com",
    messagingSenderId: "94268964690",
    appId: "1:94268964690:web:d7809308d1a73b555a848b",
    measurementId: "G-Y7M27KHFLD"
    };

    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.database();


function saveChanges() {
    const key = document.getElementById('editKey').value;
    const user = {
        cpf: document.getElementById('editCpf').value,
        email: document.getElementById('editEmail').value,
        instituicao: document.getElementById('editInstituicao').value,
        nome: document.getElementById('editNome').value,
        senha: document.getElementById('editSenha').value,
        telefone: document.getElementById('editTelefone').value
    };
    db.ref("users/" + key).update(user)
        .then(() => {
            console.log("Usuário atualizado com sucesso.");
            closeEditPopup();
            getAllDataOnce();
        })
        .catch(error => {
            console.error("Erro ao atualizar o usuário:", error.message);
        });
}