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
    atualizarPorId(){

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
}
function limparInputs(){
    document.getElementById("cliente").value = ""
    document.getElementById("mesa").value = ""
    document.getElementById("descricao").value = ""
}