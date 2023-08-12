const url_produtos =
    "https://products-api-68b966d43678.herokuapp.com/api/v1/produtos";

requestProducts();

async function requestProducts() {
    const request = await fetch(url_produtos);
    let resp = await request.json();
    showList(resp);
}

const tbl = document.getElementById("myTable");
const tblBody = document.createElement("tbody");

function showList(list) {
    const products = list.forEach((product) => {
        // Criação de uma nova linha
        const row = document.createElement("tr");
        row.className = "lines";

        // Preenchimendo do ID
        const cell_id = document.createElement("td");
        cell_id.className = "item";
        cell_id.appendChild(document.createTextNode(product.id));
        row.appendChild(cell_id);

        // Preenchimendo do nome
        const cell_nome = document.createElement("td");
        cell_nome.className = "item";
        cell_nome.appendChild(document.createTextNode(product.nome));
        row.appendChild(cell_nome);

        // Preenchimendo da marca
        const cell_marca = document.createElement("td");
        cell_marca.className = "item";
        cell_marca.appendChild(document.createTextNode(product.marca));
        row.appendChild(cell_marca);

        // Preenchimendo do preço
        const cell_preco = document.createElement("td");
        cell_preco.className = "item";
        cell_preco.appendChild(document.createTextNode('R$ ' + product.preco));
        row.appendChild(cell_preco);

        // Preenchimendo do nome do mercado
        const cell_mercado = document.createElement("td");
        cell_mercado.className = "item";
        switch (product.idLoja) {
            case "4726":
                nome_mercado = "São Judas Tadeu (Loja 2)";
                break;
            case "11650":
                nome_mercado = "La Villa";
                break;
            case "24768":
                nome_mercado = "Mercado Ouro Verde";
                break;
            case "25224":
                nome_mercado = "Maitan (Loja 2)";
                break;
            case "1023":
                nome_mercado = "Amigão";
                break;
        }
        cell_mercado.appendChild(document.createTextNode(nome_mercado));
        row.appendChild(cell_mercado);

        // Preenchimendo da data de atualização
        const cell_atualizado = document.createElement("td");
        cell_atualizado.className = "item";
        const data = new Date(product.ultData);
        const day = data.getDate(); 
        const month = data.getMonth() + 1; 
        const year = data.getFullYear();
        const data_formatada = `${day.toString().padStart(2, "0")}-${month
            .toString()
            .padStart(2, "0")}-${year}`;
        cell_atualizado.appendChild(document.createTextNode(data_formatada));
        row.appendChild(cell_atualizado);
        
        // Inclusão da linha toda no corpo da tabela
        tblBody.appendChild(row);
    });
    tbl.appendChild(tblBody);
}

const myFunction = () => {
    const trs = document.querySelectorAll("#myTable tr:not(.header)");
    const filter = document.querySelector("#myInput").value;
    const regex = new RegExp(filter, "i");
    const isFoundInTds = (td) => regex.test(td.innerHTML);
    const isFound = (childrenArr) => childrenArr.some(isFoundInTds);
    const setTrStyleDisplay = ({ style, children }) => {
        style.display = isFound([
            ...children, // <-- All columns
        ])
            ? ""
            : "none";
    };

    trs.forEach(setTrStyleDisplay);
};
