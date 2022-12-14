const endpoint = 'https://api.binance.com/api/v3/ticker/price';

try {
    fetch(endpoint)
        .then(respuesta => respuesta.json())
        .then(data => mostraData(data));
} catch(error) {
    throw new Error('Erro na requisição');
}

const mostraData = (data) => {
    let body = '';
    for (let i = 0; i < data.length; i++) {
        data.length = 3;
        body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
    }

    document.querySelector('#data').innerHTML = body;
}

const atualizar = document.querySelector('#tabela');

atualizar.addEventListener('click', function () {
    mostraData().load().innerHTML = body;
})

// Usar Finally
