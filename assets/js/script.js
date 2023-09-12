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
        if(inputvazio()){
            mensagem("preencha todos os campos")
            document.getElementById("msg").classList.remove("sucesso");
            document.getElementById("msg").classList.add("erro");
        }else{
            mensagem("enviado com sucesso")
            this.pedidos.push(pedido);
            document.getElementById("msg").classList.remove("erro");
            document.getElementById("msg").classList.add("sucesso");
        }
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
        pedido.mesa = mesa;
        pedido.descricao = descricao;
        return pedido
    }
    deletarPorId(id){
        return (this.pedidos = this.pedidos.filter(
            (pedido) => pedido.id != id
        ));
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
            <button onclick="deletarPedido(${pedido.id})"><i class="fa-sharp fa-solid fa-trash"></i></button>
            <button onclick="atualizarPedido(${pedido.id})"><i class="fa-solid fa-pen"></i></button>
            </div>
        `
    })
    document.getElementById("listaPedido").innerHTML = html;
    document.getElementById("listaPedido").classList.remove("hidden");
}
function inputvazio(){
    let cliente = document.getElementById("cliente").value;
    let mesa = document.getElementById("mesa").value;
    let descricao = document.getElementById("descricao").value;
    if(cliente == "" || mesa == "" || descricao == ""){
        return true
    }else{
        return false
    }
}
function mensagem(msg){
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("msg").classList.remove("hidden");
    setTimeout(function(){
        document.getElementById("msg").classList.add("hidden");
    }, 4000);
}
function deletarPedido(id){
    pedidos.deletarPorId(id);
    mostrarPedido();
    document.getElementById("listaPedido").classList.add("hidden");
}
let aux = null
function editarPedido(id){
    let cliente = document.getElementById("cliente").value;
    let mesa = document.getElementById("mesa").value;
    let descricao = document.getElementById("descricao").value;

  equipeService.atualizarPorId(aux, cliente, mesa, descricao);

  listarEquipes();

  document.getElementById("cadastrar").classList.remove("hidden");
  document.getElementById("Editar").classList.add("hidden");

  document.getElementById("listaPedido").classList.add("hidden");
  limparInputs();

  aux = null;
}