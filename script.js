document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const tasksList = document.getElementById('tasksList');

    // Обработчик отправки формы
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const titleInput = document.getElementById('taskTitle');
        const descriptionInput = document.getElementById('taskDescription');

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        if (!title) {
            alert('Пожалуйста, введите название задачи.');
            return;
        }

        // Создаем карточку задачи
        const taskCard = createTaskCard(title, description);

        // Добавляем карточку в список
        tasksList.appendChild(taskCard);

        // Очищаем форму
        titleInput.value = '';
        descriptionInput.value = '';

        // Фокус на поле названия
        titleInput.focus();
    });

    // Функция создания карточки задачи
    function createTaskCard(title, description) {
        const card = document.createElement('div');
        card.className = 'task-card';

        const titleElement = document.createElement('div');
        titleElement.className = 'task-title';
        titleElement.textContent = title;

        const descriptionElement = document.createElement('div');
        descriptionElement.className = 'task-description';
        descriptionElement.textContent = description || 'Нет описания';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', function() {
            card.remove();
        });

        card.appendChild(titleElement);
        card.appendChild(descriptionElement);
        card.appendChild(deleteButton);

        return card;
    }
});