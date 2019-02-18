// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class for materialize
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add classes for materialize
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Confirm delete?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear tasks
function clearTasks() {
    // Method 1: innerHTML
    // taskList.innerHTML = '';

    // Method 2 (faster): removeChild
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        // if item contains text, show task
        if (item.toLowerCase().includes(text)) {
            task.style.display = 'block';
        // else hide it
        } else {
            task.style.display = 'none';
        }
    });
}