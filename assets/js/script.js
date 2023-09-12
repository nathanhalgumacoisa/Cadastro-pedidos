class Pedido{
    constructor(cliente, mesa, descricao){
        this.cliente = cliente;
        this.mesa = mesa;
        this.descricao = descricao;
        this.id = this.criarId();
    }
    criarId(){
        return Math.floor(Math.random() * 1000);
    }
}
class ListaPedido{
    constructor(){
        this.pedidos = [];
    }
    adicionar(pedido){
        this.pedidos.push(pedido);
    }
    listar(){
        return this.pedidos;
    }
    listarPorId(id){
        return this.pedidos.find((pedido) => pedido.id == id);
    }
    atualizarPorId(id, cliente, mesa, descricao){
        let pedido = this.listarPorId(id);
        pedido.cliente = cliente;
        pedido.mesa = mesa
        pedido.descricao = descricao
    }
    deletarPorId(){

    }
}
const pedidos = new ListaPedido()
function criarPedido(){
    let cliente = document.getElementById("cliente").value;
    let mesa = document.getElementById("mesa").value;
    let descricao = document.getElementById("descricao").value;
    let pedido = new Pedido(cliente, mesa, descricao);
    pedidos.adicionar(pedido);
    //console.log(pedidos)
    limparInputs()
    mostrarPedido()
}
function limparInputs(){
    document.getElementById("cliente").value = ""
    document.getElementById("mesa").value = ""
    document.getElementById("descricao").value = ""
}
function mostrarPedido(){
    const pedidosArray = pedidos.listar();
    let html = ""
    pedidosArray.forEach((pedido)=> {
        html += `
            <div id="oPedido">
                <p>Id: ${pedido.id}</p>
                <p>Cliente: ${pedido.cliente}</p>
                <p>Mesa: ${pedido.mesa}</p>
                <p>Descrição ${pedido.descricao}</p>
            </div>
            <div id="btns">
            <button onclick="deletarPedido"><i class="fa-sharp fa-solid fa-trash"></i></button>
            <button onclick="editarPedido"><i class="fa-solid fa-pen"></i></button>
            </div>
        `
    })
    document.getElementById("listaPedido").innerHTML = html;
}
