
const firebaseConfig = {
        apiKey: "AIzaSyD26pWZ9AMYoisXfrtm7038K2SuuXuWkr8",
        authDomain: "glor-ae49f.firebaseapp.com",
        databaseURL: "https://glor-ae49f-default-rtdb.firebaseio.com",
        projectId: "glor-ae49f",
        storageBucket: "glor-ae49f.appspot.com",
        messagingSenderId: "677710403853",
        appId: "1:677710403853:web:f67284b068399eebb97844"
    };

    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.database();


    function saveChanges() {
        const key = document.getElementById('editKey').value;
        const user = {
            Horario: document.getElementById('editHorarios').value,
            Veiculo: document.getElementById('editVeiculos').value,
            Saidas: document.getElementById('editSaidas').value,
            Destinos: document.getElementById('editDestinos').value,
        };

        const dbRef = ref(db, "horarios/" + key);
        update(dbRef, user)
            .then(() => {
                console.log("Horário atualizado com sucesso.");
                closeEditPopup();
                getAllDataOnce();
            })
            .catch(error => {
                console.error("Erro ao atualizar o horário:", error.message);
            });
    }