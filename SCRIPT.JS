// Selecting DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  // Create task item
  const li = document.createElement('li');
  li.className = 'task-item';

  // Task text
  const span = document.createElement('span');
  span.textContent = taskText;

  // Action buttons container
  const actions = document.createElement('div');
  actions.className = 'task-actions';

  // Complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.classList.add('complete');
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  // Append buttons to action container
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  // Append elements to task item
  li.appendChild(span);
  li.appendChild(actions);

  // Add to the task list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}

// Event listener for Add Task button
addTaskBtn.addEventListener('click', addTask);

// Allow "Enter" key to add task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
