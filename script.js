document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const todoText = todoInput.value;
        if (todoText.trim() !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            li.classList.add('removing');
            li.addEventListener('transitionend', function() {
                li.remove();
            });
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);

        // Animação de entrada
        requestAnimationFrame(() => {
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';
        });
    }
});
