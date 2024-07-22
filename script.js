document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
    const todoTime = document.getElementById('todo-time');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const todoText = todoInput.value;
        const todoDateValue = todoDate.value;
        const todoTimeValue = todoTime.value;
        if (todoText.trim() !== '' && todoDateValue !== '' && todoTimeValue !== '') {
            addTodoItem(todoText, todoDateValue, todoTimeValue);
            todoInput.value = '';
            todoDate.value = '';
            todoTime.value = '';
        }
    });

    function addTodoItem(todoText, todoDate, todoTime) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span>
            <span>${todoDate} ${todoTime}</span>
        `;

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
