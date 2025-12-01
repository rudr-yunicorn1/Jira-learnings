
      // script.js
        const taskInput = document.getElementById('task-input');
        const addTaskBtn = document.getElementById('add-task-btn');
        const taskList = document.getElementById('task-list');
        
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        function saveTasks() {
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
        function renderTasks() {
          taskList.innerHTML = '';
          tasks.forEach((task, index) => {
          const li = document.createElement('li');
          if (task.completed) li.classList.add('completed');
        
          li.innerHTML = `
            <span onclick="toggleComplete(${index})">${task.text}</span>
            <div class="task-buttons">
              <button onclick="deleteTask(${index})">❌</button>
            </div>
          `;
          taskList.appendChild(li);
          });
        }
        
        function addTask() {
          const taskText = taskInput.value.trim();
          if (taskText !== '') {
          tasks.push({ text: taskText, completed: false });
          taskInput.value = '';
          saveTasks();
          renderTasks();
          }
        }
        
        function deleteTask(index) {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        }
        
        function toggleComplete(index) {
          tasks[index].completed = !tasks[index].completed;
          saveTasks();
          renderTasks();
        }
        
        addTaskBtn.addEventListener('click', addTask);
        window.addEventListener('load', renderTasks);
    