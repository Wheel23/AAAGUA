//Criar um array para armazenar os produtos.
//Implementar uma função para adicionar novos produtos ao array.
//Validar os dados antes de cadastrar um produto 
//(certifique-se de que todos os campos estão preenchidos e que 
//o preço e a quantidade em estoque são maiores que 0).
//Implementar uma função para listar todos os produtos cadastrados.
//Implementar uma função para calcular e exibir o valor total dos produtos em estoque 
//(preço * quantidade).

const produto =  ["Tv"]

function carrinho(preço, quantidade){
    produto.push(preço = 50, quantidade = 2)
    if(preço <= 0){
        console.log("Preço e produto invalido!")
    }if(quantidade <= 0){
        console.log("Quantidade inválida!")
    }
}

carrinho()

function listar(){
    console.log(produto)
}
listar()

function preçototal(preço, quantidade){
    preço = 50
    quantidade = 2
    console.log(preço*quantidade + " real(s) é o Preço total!")
}

preçototal()


let tarefas = [];


function adicionarTarefa(descricao) {
    const tarefa = {
        descricao: descricao,
        concluida: false
    };
    tarefas.push(tarefa);
    console.log(`Tarefa "${descricao}" adicionada com sucesso!`);
}


function listarTarefas() {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa, indice) => {
        const status = tarefa.concluida ? "Concluída" : "Pendente";
        console.log(`${indice + 1}. ${tarefa.descricao} - ${status}`);
    });
}

function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        const tarefaRemovida = tarefas.splice(indice, 1);
        console.log(`Tarefa "${tarefaRemovida[0].descricao}" removida com sucesso!`);
    } else {
        console.log("Índice inválido. Tarefa não encontrada.");
    }
}


function concluirTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice].concluida = true;
        console.log(`Tarefa "${tarefas[indice].descricao}" marcada como concluída!`);
    } else {
        console.log("Índice inválido. Tarefa não encontrada.");
    }
}

adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");
listarTarefas();
concluirTarefa(0);
listarTarefas();
removerTarefa(1);
listarTarefas();
