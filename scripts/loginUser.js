const btnEntrar = document.querySelector('#enter');
const form = document.querySelector('form');


btnEntrar.addEventListener('click', e => {
    e.preventDefault();
    const inputLogin = document.querySelector('#loginEntrada');
    const passwordEntrada = document.querySelector('#passwordEntrada');

    const usuario = {
        "username": inputLogin.value.trim(),
        "password": passwordEntrada.value.trim(),
    };

    fetch(`${window.location.origin}/login`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},  // Informando que o conteúdo é JSON
        body: JSON.stringify(usuario) // Convertendo o objeto para string
      })
        .then(response => response.status)  // Caso a resposta seja bem-sucedida, é feita o login
            .then(statusCode => {
            if (statusCode == '200') {
                window.location.href = './pages/library.html';
            }else if ((statusCode == "401") || (statusCode == "500")) { // Caso não, 
                alert('Usuário não encontrado!');
                passwordEntrada.value = '';
                inputLogin.focus();
            }
        });
});


form.addEventListener('submit', e => {
    e.preventDefault();
    const inputLogin = document.querySelector('#loginEntrada');
    const passwordEntrada = document.querySelector('#passwordEntrada');

    const usuario = {
        "username": inputLogin.value.trim(),
        "password": passwordEntrada.value.trim(),
    };

    fetch(`${window.location.origin}/login`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},  // Informando que o conteúdo é JSON
        body: JSON.stringify(usuario) // Convertendo o objeto para string
      })
        .then(response => response.status)  // Caso a resposta seja bem-sucedida, é feita o login
            .then(statusCode => {
            if (statusCode == '200') {
                window.location.href = './pages/library.html';
            }else if ((statusCode == "401") || (statusCode == "500")) { // Caso não, 
                alert('Usuário não encontrado!');
                passwordEntrada.value = '';
                inputLogin.focus();
            }
        });
});


export default (btnEntrar, form)
