

const fecharPopupButton = document.getElementById('fecharPopupButton');

// Adicionando um ouvinte de evento de clique ao botão
fecharPopupButton.
fecharPopu
addEventListener('click', function() {
    
    closeEditPopu
closeEditPopup(); // Chamando a função closeEditPopup() quando o botão for clicado
});



import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD26pWZ9AMYoisXfrtm7038K2SuuXuWkr8",
  authDomain: "glor-ae49f.firebaseapp.com",
  databaseURL: "https://glor-ae49f-default-rtdb.firebaseio.com",
  projectId: "glor-ae49f",
  storageBucket: "glor-ae49f.appspot.com",
  messagingSenderId: "677710403853",
  appId: "1:677710403853:web:f67284b068399eebb97844"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();

<script>
    // Função para gerar o PDF
    function generatePDF() {
        const doc = new jsPDF();
        const table = document.getElementById('tab12');
        const headers = Array.from(table.querySelectorAll('th')).map(header => header.textContent.trim());
        const selectedRows = Array.from(table.querySelectorAll('tbody tr')).filter(row => {
            const checkbox = row.querySelector('input[type="checkbox"]');
            return checkbox.checked;
        }).map(row => Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim()));

        doc.text("Dados da Tabela", 10, 10);
        doc.autoTable({
            startY: 20,
            head: [headers],
            body: selectedRows
        });

        doc.save('tabela.pdf');
    }

    // Função para alternar entre selecionar todos e desmarcar todos
    function toggleSelectAll() {
        const selectAllButton = document.getElementById('selectAllButton');
        const checkboxes = document.querySelectorAll('#tab12 tbody input[type="checkbox"]');

        // Verifica se pelo menos uma caixa de seleção não está marcada
        const uncheckedBoxesExist = [...checkboxes].some(checkbox => !checkbox.checked);

        // Define o estado de todas as caixas de seleção com base na existência de caixas de seleção não marcadas
        checkboxes.forEach(checkbox => {
            checkbox.checked = uncheckedBoxesExist;
        });

        // Atualiza o texto do botão "Selecionar Todos"
        selectAllButton.textContent = uncheckedBoxesExist ? "Desmarcar Todos" : "Selecionar Todos";
    }
</script>



function addItemToTable({ key, cpf, email, instituicao, nome, senha, cidade, documento }) {
    const tbody = document.getElementById('tbody1');
    const row = document.createElement("tr");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);

    const cellContents = [cpf, email, instituicao, nome, senha, cidade, documento];
    cellContents.forEach(content => {
        const cell = document.createElement("td");
        cell.textContent = content || "";
        row.appendChild(cell);
    });

    const actionsCell = document.createElement("td");

    // Botão para abrir a imagem
    const openImageButton = createButton("Abrir Imagem", "open-image-button", () => {
        if (documento) {
            const storageRef = storage.ref();
            storageRef.child(documento).getDownloadURL().then(url => {
                window.open(url, '_blank');
            }).catch(error => {
                console.error("Erro ao obter o URL da imagem: ", error);
            });
        } else {
            console.error("Documento não encontrado para o usuário:", key);
        }
    });

    // Botões de Excluir e Alterar
    const deleteButton = createButton("Excluir", "delete-button", () => deleteUser(key));
    const editButton = createButton("Alterar", "edit-button", () => openEditPopup({ key, cpf, email, instituicao, nome, senha, cidade, documento }));

    // Adicionando os botões à célula de ações
    [deleteButton, editButton, openImageButton].forEach(button => actionsCell.appendChild(button));

    // Adicionando a célula de ações à linha
    row.appendChild(actionsCell);
   

    const registerCell = document.createElement("td");
    const registerButton = createButton("Registrar", "register-button", () => registerUser(email, senha));
    registerCell.appendChild(registerButton);
    row.appendChild(registerCell);
    // Adicionando a linha à tabela
    tbody.appendChild(row);
}























function registerUsers() {
  // Referência para a planilha no Realtime Database
  const sheetRef = database.ref('usuarios');
  
  sheetRef.once('value').then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const userData = childSnapshot.val();
      const email = userData.email;
      const password = userData.password;

      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Usuário criado com sucesso
          console.log('Usuário criado:', userCredential.user);
        })
        .catch((error) => {
          console.error('Erro ao criar usuário:', error);
        });
    });
  });
}
      

anterio
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database-compat.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/polyfills.umd.js"></script>
    <script>
        console.log("jsPDF foi carregado:", typeof jsPDF !== 'undefined');
    </script>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item1">
            <img class="logoh" src="https://i.im.ge/2024/04/04/WEcTRc.logo-sem-fundo.png" alt="">
            <div class="user-photo-container">
                <img src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1715817600&semt=sph" alt="User photo" class="user-photo">
                <div class="cinfo"><p class="pinfo">caixa de informação</p></div>
            </div>
            <nav class="menu">    
                <ul class="menu">
                    <li class="btnmenu"><a class="a2" href="ger-hor.html">HORÁRIOS</a></li>
                    <li class="btnmenu"><a class="a2" href="ger-user.html">USUÁRIOS</a></li>
                    <li class="btnmenu"><a class="a2" href="ger-rot.html">ROTAS</a></li>              
                    <li class="btnmenu"><a class="a2" href="index.html">SAIR</a></li>
                </ul>   
            </nav>            
        </div>
        <div class="grid-item2">
            <h1 class="arger">Área de Gerenciamento de Usuários</h1>
            <div class="boxtab">
                <div class="cabetab">
                    <p class="pcabe">
                        <button id="selectAllButton" onclick="toggleSelectAll()">Selecionar Todos</button>
                        <button id="gePdf" onclick="generatePDF()">Gerar PDF</button>
                        <input type="text" name="pesquisa_por_nome" id="pesNome" placeholder="Pesquisa por nome">
                        <button id="btnPesNome"><i class="fas fa-search"></i> Pesquisa</button>
                    </p>
                    <p class="pcabe">
                        <input type="text" name="pesquisa_por_cpf" id="pesCpf" placeholder="Pesquisa por CPF">
                        <button id="btnPesCpf"><i class="fas fa-search"></i> Pesquisa</button>
                    </p>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

                <table id="tab12" class="table table-dark">
                    <thead>
                        <tr>
                            <th>Seleção</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Instituição</th>
                            <th>Nome</th>
                            <th>Senha</th>
                            <th>Cidade Cadastrada</th>
                            <th>Ações</th>
                            <th>Registrar</th>
                        </tr>
                    </thead>
                    <tbody id="tbody1"></tbody>
                </table>
                <button class="btnfun"><i class="fa-solid fa-plus"></i> <a class="a2" href="cadastrouser.html">Adicionar</a></button>
            </div>
            <!-- Popup para edição -->
            <div id="editPopup" class="popup">
                <div class="popup-content">
                    <img class="logohpop" src="https://i.im.ge/2024/04/04/WEcTRc.logo-sem-fundo.png" alt="">
                    <input type="hidden" id="editKey">
                    <input type="text" class="editpop" id="editCpf" placeholder="Novo CPF">
                    <input type="text" class="editpop" id="editEmail" placeholder="Novo Email">
                    <input type="text" class="editpop" id="editInstituicao" placeholder="Nova Instituição">
                    <input type="text" class="editpop" id="editNome" placeholder="Novo Nome">
                    <input type="text" class="editpop" id="editSenha" placeholder="Nova Senha">
                    <input type="text" class="editpop" id="editTelefone" placeholder="Novo Telefone">
                    <button id="saveButton" onclick="saveChanges()">Salvar</button>
                    <button id="cancelButton" onclick="closeEditPopup()">Cancelar</button>
                </div>
            </div>
        </div>

    <script type="module">
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
        const auth = firebase.auth();
        const db = firebase.database();

        document.getElementById('btnPesNome').addEventListener('click', () => {
            const pesquisaNome = document.getElementById('pesNome').value.trim();
            if (pesquisaNome !== '') {
                searchByField('nome', pesquisaNome);
            }
        });

        document.getElementById('btnPesCpf').addEventListener('click', () => {
            const pesquisaCpf = document.getElementById('pesCpf').value.trim();
            if (pesquisaCpf !== '') {
                searchByField('cpf', pesquisaCpf);
            }
        });

        document.getElementById('pesNome').addEventListener('input', () => {
            if (document.getElementById('pesNome').value.trim() === '') {
                getAllDataOnce();
            }
        });

        document.getElementById('pesCpf').addEventListener('input', () => {
            if (document.getElementById('pesCpf').value.trim() === '') {
                getAllDataOnce();
            }
        });

        function searchByField(field, value) {
            db.ref("usuarios").orderByChild(field).equalTo(value).once("value")
                .then(snapshot => {
                    const users = [];
                    snapshot.forEach(childSnapshot => {
                        const user = childSnapshot.val();
                        user.key = childSnapshot.key;
                        users.push(user);
                    });
                    addAllItemsToTable(users);
                })
                .catch(error => {
                    console.error("Erro ao obter os dados: ", error);
                });
        }

        function getAllDataOnce() {
            db.ref("usuarios").once("value")
                .then(snapshot => {
                    const users = [];
                    snapshot.forEach(childSnapshot => {
                        const user = childSnapshot.val();
                        user.key = childSnapshot.key;
                        users.push(user);
                    });
                    addAllItemsToTable(users);
                })
                .catch(error => {
                    console.error("Erro ao obter os dados: ", error);
                });
        }

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
            db.ref("usuarios/" + key).update(user)
                .then(() => {
                    console.log("Usuário atualizado com sucesso.");
                    closeEditPopup();
                    getAllDataOnce();
                })
                .catch(error => {
                    console.error("Erro ao atualizar o usuário:", error.message);
                });
        }

        let stdNo = 0;
        const tbody = document.getElementById('tbody1');

        function addItemToTable({ selecao, key, cpf, email, instituicao, nome, senha, telefone }) {
            if (!email) {
                console.error("Email não está definido.");
                return;
            }

            const row = document.createElement("tr");

            // Adicionando a caixa de seleção na primeira célula
            const checkboxCell = document.createElement("td");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkboxCell.appendChild(checkbox);
            row.appendChild(checkboxCell);

            // Adicionando outras células com os dados do usuário
            const cellContents = [cpf, email, instituicao, nome, senha, telefone];
            cellContents.forEach(content => {
                const cell = document.createElement("td");
                cell.textContent = content || "";
                row.appendChild(cell);
            });

            const actionsCell = document.createElement("td");

            const deleteButton = createButton("Excluir", "delete-button", () => deleteUser(key));
            const editButton = createButton("Alterar", "edit-button", () => openEditPopup({ key, cpf, email, instituicao, nome, senha, telefone }));
            const validateButton = createButton("Validar", "validar-button", () => validateUser(email, senha));

            [deleteButton, editButton, validateButton].forEach(button => actionsCell.appendChild(button));

            // Adicionando a célula de ações
            row.appendChild(actionsCell);

            // Adicionando a célula de registro
            const registerCell = document.createElement("td");
            const registerButton = createButton("Registrar", "register-button", () => registerUser(email, senha));
            registerCell.appendChild(registerButton);
            row.appendChild(registerCell);

            tbody.appendChild(row);
        }

        function addAllItemsToTable(users) {
            stdNo = 0;
            tbody.innerHTML = "";
            users.forEach(user => addItemToTable(user));
        }

        function createButton(label, className, onClick) {
            const button = document.createElement("button");
            button.className = className;
            button.textContent = label;
            button.onclick = onClick;
            return button;
        }

        function openEditPopup(user) {
            document.getElementById('editKey').value = user.key || "";
            document.getElementById('editCpf').value = user.cpf || "";
            document.getElementById('editEmail').value = user.email || "";
            document.getElementById('editInstituicao').value = user.instituicao || "";
            document.getElementById('editNome').value = user.nome || "";
            document.getElementById('editSenha').value = user.senha || "";
            document.getElementById('editTelefone').value = user.telefone || "";
            document.getElementById('editPopup').style.display = 'block';
        }

        function closeEditPopup() {
            document.getElementById('editPopup').style.display = 'none';
        }

        function deleteUser(key) {
            db.ref("usuarios/" + key).remove()
                .then(() => {
                    console.log("Usuário removido com sucesso.");
                    getAllDataOnce();
                })
                .catch(error => {
                    console.error("Erro ao remover usuário:", error.message);
                });
        }

        function registerUser(email, senha) {
            auth.createUserWithEmailAndPassword(email, senha)
                .then(() => {
                    console.log(`Usuário ${email} registrado com sucesso.`);
                })
                .catch(error => {
                    console.error(`Erro ao registrar usuário ${email}:`, error.message);
                });
        }

        window.onload = getAllDataOnce;

        // Função para gerar o PDF
        function generatePDF() {
            const doc = new jsPDF();
            const table = document.getElementById('tab12');
            const headers = Array.from(table.querySelectorAll('th')).map(header => header.textContent.trim());
            const selectedRows = Array.from(table.querySelectorAll('tbody tr')).filter(row => {
                const checkbox = row.querySelector('input[type="checkbox"]');
                return checkbox.checked;
            }).map(row => Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim()));

            doc.text("Dados da Tabela", 10, 10);
            doc.autoTable({
                startY: 20,
                head: [headers],
                body: selectedRows
            });

            doc.save('tabela.pdf');
        }

        // Função para alternar entre selecionar todos e desmarcar todos
        function toggleSelectAll() {
            const selectAllButton = document.getElementById('selectAllButton');
            const checkboxes = document.querySelectorAll('#tab12 tbody input[type="checkbox"]');

            // Verifica se pelo menos uma caixa de seleção não está marcada
            const uncheckedBoxesExist = [...checkboxes].some(checkbox => !checkbox.checked);

            // Define o estado de todas as caixas de seleção com base na existência de caixas de seleção não marcadas
            checkboxes.forEach(checkbox => {
                checkbox.checked = uncheckedBoxesExist;
            });

            // Atualiza o texto do botão "Selecionar Todos"
            selectAllButton.textContent = uncheckedBoxesExist ? "Desmarcar Todos" : "Selecionar Todos";
        }
    </script>

    <script src="js/salvar.js"></script>
    <script src="js/abrirpopup.js"></script>
</body>
</html>





novo funcionando o registrado


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database-compat.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/polyfills.umd.js"></script>
    <script>
        console.log("jsPDF foi carregado:", typeof jsPDF !== 'undefined');
    </script>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item1">
            <img class="logoh" src="https://i.im.ge/2024/04/04/WEcTRc.logo-sem-fundo.png" alt="">
            <div class="user-photo-container">
                <img src="https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1715817600&semt=sph" alt="User photo" class="user-photo">
                <div class="cinfo"><p class="pinfo">caixa de informação</p></div>
            </div>
            <nav class="menu">    
                <ul class="menu">
                    <li class="btnmenu"><a class="a2" href="ger-hor.html">HORÁRIOS</a></li>
                    <li class="btnmenu"><a class="a2" href="ger-user.html">USUÁRIOS</a></li>
                    <li class="btnmenu"><a class="a2" href="ger-rot.html">ROTAS</a></li>              
                    <li class="btnmenu"><a class="a2" href="index.html">SAIR</a></li>
                </ul>   
            </nav>            
        </div>
        <div class="grid-item2">
            <h1 class="arger">Área de Gerenciamento de Usuários</h1>
            <div class="boxtab">
                <div class="cabetab">
                    <p class="pcabe">
                        <button id="selectAllButton" onclick="toggleSelectAll()">Selecionar Todos</button>
                        <button id="gePdf" onclick="generatePDF()">Gerar PDF</button>
                        <input type="text" name="pesquisa_por_nome" id="pesNome" placeholder="Pesquisa por nome">
                        <button id="btnPesNome"><i class="fas fa-search"></i> Pesquisa</button>
                    </p>
                    <p class="pcabe">
                        <input type="text" name="pesquisa_por_cpf" id="pesCpf" placeholder="Pesquisa por CPF">
                        <button id="btnPesCpf"><i class="fas fa-search"></i> Pesquisa</button>
                    </p>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

                <table id="tab12" class="table table-dark">
                    <thead>
                        <tr>
                            <th>Seleção</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Instituição</th>
                            <th>Nome</th>
                            <th>Senha</th>
                            <th>Cidade Cadastrada</th>
                            <th>Ações</th>
                            <th>Registrar</th>
                        </tr>
                    </thead>
                    <tbody id="tbody1"></tbody>
                </table>
                <button class="btnfun"><i class="fa-solid fa-plus"></i> <a class="a2" href="cadastrouser.html">Adicionar</a></button>
            </div>
            <!-- Popup para edição -->
            <div id="editPopup" class="popup">
                <div class="popup-content">
                    <img class="logohpop" src="https://i.im.ge/2024/04/04/WEcTRc.logo-sem-fundo.png" alt="">
                    <input type="hidden" id="editKey">
                    <input type="text" class="editpop" id="editCpf" placeholder="Novo CPF">
                    <input type="text" class="editpop" id="editEmail" placeholder="Novo Email">
                    <input type="text" class="editpop" id="editInstituicao" placeholder="Nova Instituição">
                    <input type="text" class="editpop" id="editNome" placeholder="Novo Nome">
                    <input type="text" class="editpop" id="editSenha" placeholder="Nova Senha">
                    <input type="text" class="editpop" id="editTelefone" placeholder="Novo Telefone">
                    <button id="saveButton" onclick="saveChanges()">Salvar</button>
                    <button id="cancelButton" onclick="closeEditPopup()">Cancelar</button>
                </div>
            </div>
        </div>

    <script type="module">
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
        const auth = firebase.auth();
        const db = firebase.database();

        document.getElementById('btnPesNome').addEventListener('click', () => {
            const pesquisaNome = document.getElementById('pesNome').value.trim();
            if (pesquisaNome !== '') {
                searchByField('nome', pesquisaNome);
            }
        });

        document.getElementById('btnPesCpf').addEventListener('click', () => {
            const pesquisaCpf = document.getElementById('pesCpf').value.trim();
            if (pesquisaCpf !== '') {
                searchByField('cpf', pesquisaCpf);
            }
        });

        document.getElementById('pesNome').addEventListener('input', () => {
            if (document.getElementById('pesNome').value.trim() === '') {
                getAllDataOnce();
            }
        });

        document.getElementById('pesCpf').addEventListener('input', () => {
            if (document.getElementById('pesCpf').value.trim() === '') {
                getAllDataOnce();
            }
        });

        function searchByField(field, value) {
            db.ref("usuarios").orderByChild(field).equalTo(value).once("value")
                .then(snapshot => {
                    const users = [];
                    snapshot.forEach(childSnapshot => {
                        const user = childSnapshot.val();
                        user.key = childSnapshot.key;
                        users.push(user);
                    });
                    addAllItemsToTable(users);
                })
                .catch(error => {
                    console.error("Erro ao obter os dados: ", error);
                });
        }

        function getAllDataOnce() {
            db.ref("usuarios").once("value")
                .then(snapshot => {
                    const users = [];
                    snapshot.forEach(childSnapshot => {
                        const user = childSnapshot.val();
                        user.key = childSnapshot.key;
                        users.push(user);
                    });
                    addAllItemsToTable(users);
                })
                .catch(error => {
                    console.error("Erro ao obter os dados: ", error);
                });
        }

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
            db.ref("usuarios/" + key).update(user)
                .then(() => {
                    console.log("Usuário atualizado com sucesso.");
                    closeEditPopup();
                    getAllDataOnce();
                })
                .catch(error => {
                    console.error("Erro ao atualizar o usuário:", error.message);
                });
        }

        let stdNo = 0;
        const tbody = document.getElementById('tbody1');

        function addItemToTable({ selecao, key, cpf, email, instituicao, nome, senha, telefone }) {
            if (!email) {
                console.error("Email não está definido.");
                return;
            }

            const row = document.createElement("tr");

            // Adicionando a caixa de seleção na primeira célula
            const checkboxCell = document.createElement("td");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkboxCell.appendChild(checkbox);
            row.appendChild(checkboxCell);

            // Adicionando outras células com os dados do usuário
            const cellContents = [cpf, email, instituicao, nome, senha, telefone];
            cellContents.forEach(content => {
                const cell = document.createElement("td");
                cell.textContent = content || "";
                row.appendChild(cell);
            });

            const actionsCell = document.createElement("td");

            const deleteButton = createButton("Excluir", "delete-button", () => deleteUser(key));
            const editButton = createButton("Alterar", "edit-button", () => openEditPopup({ key, cpf, email, instituicao, nome, senha, telefone }));
            const validateButton = createButton("Validar", "validar-button", () => validateUser(email, senha));

            [deleteButton, editButton, validateButton].forEach(button => actionsCell.appendChild(button));

            // Adicionando a célula de ações
            row.appendChild(actionsCell);

            // Adicionando a célula de registro
            const registerCell = document.createElement("td");
            const registerButton = createButton("Registrar", "register-button", () => registerUser(email, senha));
            registerCell.appendChild(registerButton);
            row.appendChild(registerCell);

            tbody.appendChild(row);
        }

        function addAllItemsToTable(users) {
            stdNo = 0;
            tbody.innerHTML = "";
            users.forEach(user => addItemToTable(user));
        }

        function createButton(label, className, onClick) {
            const button = document.createElement("button");
            button.className = className;
            button.textContent = label;
            button.onclick = onClick;
            return button;
        }

        function openEditPopup(user) {
            document.getElementById('editKey').value = user.key || "";
            document.getElementById('editCpf').value = user.cpf || "";
            document.getElementById('editEmail').value = user.email || "";
            document.getElementById('editInstituicao').value = user.instituicao || "";
            document.getElementById('editNome').value = user.nome || "";
            document.getElementById('editSenha').value = user.senha || "";
            document.getElementById('editTelefone').value = user.telefone || "";
            document.getElementById('editPopup').style.display = 'block';
        }

        function closeEditPopup() {
            document.getElementById('editPopup').style.display = 'none';
        }

        function deleteUser(key) {
            db.ref("usuarios/" + key).remove()
                .then(() => {
                    console.log("Usuário removido com sucesso.");
                    getAllDataOnce();
                })
                .catch(error => {
                    console.error("Erro ao remover usuário:", error.message);
                });
        }

        function registerUser(email, senha) {
            // Verificar se o usuário já está cadastrado
            auth.fetchSignInMethodsForEmail(email)
                .then(providers => {
                    if (providers.length === 0) {
                        // Se o usuário não estiver cadastrado, registrar
                        auth.createUserWithEmailAndPassword(email, senha)
                            .then(() => {
                                console.log(`Usuário ${email} registrado com sucesso.`);
                                alert(`Usuário ${email} registrado com sucesso.`);
                            })
                            .catch(error => {
                                console.error(`Erro ao registrar usuário ${email}:`, error.message);
                                alert(`Erro ao registrar usuário ${email}`);
                            });
                    } else {
                        // Se o usuário já estiver cadastrado, exibir alerta
                        alert(`Usuário ${email} já está cadastrado.`);
                    }
                })
                .catch(error => {
                    console.error(`Erro ao verificar usuário ${email}:`, error.message);
                    alert(`Erro ao verificar usuário ${email} `);
                });
        }

        window.onload = getAllDataOnce;

        // Função para gerar o PDF
        function generatePDF() {
            const doc = new jsPDF();
            const table = document.getElementById('tab12');
            const headers = Array.from(table.querySelectorAll('th')).map(header => header.textContent.trim());
            const selectedRows = Array.from(table.querySelectorAll('tbody tr')).filter(row => {
                const checkbox = row.querySelector('input[type="checkbox"]');
                return checkbox.checked;
            }).map(row => Array.from(row.querySelectorAll('td')).map(cell => cell.textContent.trim()));

            doc.text("Dados da Tabela", 10, 10);
            doc.autoTable({
                startY: 20,
                head: [headers],
                body: selectedRows
            });

            doc.save('tabela.pdf');
        }

       
    function toggleSelectAll() {
        const selectAllButton = document.getElementById('selectAllButton');
        const checkboxes = document.querySelectorAll('#tab12 tbody input[type="checkbox"]');

        // Verifica se pelo menos uma caixa de seleção não está marcada
        const uncheckedBoxesExist = [...checkboxes].some(checkbox => !checkbox.checked);

        // Define o estado de todas as caixas de seleção com base na existência de caixas de seleção não marcadas
        checkboxes.forEach(checkbox => {
            checkbox.checked = uncheckedBoxesExist;
        });

        // Atualiza o texto do botão "Selecionar Todos"
        selectAllButton.textContent = uncheckedBoxesExist ? "Desmarcar Todos" : "Selecionar Todos";
    }
    </script>

    <script src="js/salvar.js"></script>
    <script src="js/abrirpopup.js"></script>
</body>
</html>
