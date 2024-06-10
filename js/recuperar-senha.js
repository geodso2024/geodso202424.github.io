import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

document.getElementById('form-recuperar-senha').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const email = document.getElementById('email').value;

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

    // Inicialize o Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Envie o email de redefinição de senha
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Exibe uma mensagem de sucesso para o usuário
            alert(`Email de redefinição de senha enviado com sucesso para: ${email}`);
        })
        .catch((error) => {
            // Exibe uma mensagem de erro para o usuário
            console.error('Erro ao enviar email de redefinição de senha:', error.message);
            alert(`Erro ao enviar email de redefinição de senha: ${error.message}`);
        });
});
