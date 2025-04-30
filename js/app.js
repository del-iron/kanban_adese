// Lógica principal de movimentação de tarefas
console.log("App.js carregado");

// Função para adicionar uma nova tarefa ao backlog
function addTaskToBacklog(task) {
    const backlogColumn = document.getElementById('backlog').querySelector('.task-list');
    
    // Cria o elemento da tarefa
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
    `;

    // Adiciona a tarefa ao backlog
    backlogColumn.appendChild(taskElement);
}

// Adiciona evento ao botão "Adicionar Tarefa" no backlog
document.getElementById('add-task-backlog').addEventListener('click', () => {
    // Redireciona para a página de criação de tarefas
    console.log("Botão 'Adicionar Tarefa' clicado!");
    window.location.href = 'create_task.html';
});

// Exemplo de uso (simulando uma inserção de tarefa)
const newTask = {
    title: "Nova Tarefa",
    description: "Descrição da tarefa"
};
addTaskToBacklog(newTask);
