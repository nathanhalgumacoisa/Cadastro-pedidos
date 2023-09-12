class Pedido{
    constructor(cliente, mesa, descricao){
        this.cliente = cliente;
        this.mesa = mesa;
        this.descricao = descricao;
        this.id = this.criarId();
    }
    criarId(){
        return Math.floor(Math.random() * 3000);
    }
}
class ListaPedido{
    constructor(){
        this.pedidos = [];
    }
    adicionar(pedido){
        this.pedido.push(pedido);
    }
    listar(){
        return this.pedidos;
    }
    listarPorId(id){
        return this.pedidos.find((pedido) => pedido.id == id);
    }
    atualizarPorId(){

    }
}
const pedidos = new ListaPedido()
function criarPedido(){
    
}