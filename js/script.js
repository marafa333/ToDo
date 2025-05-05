
let tasks = [];
let current = 1;

// DOM Elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");

// Add new task
const addTask = () => {
    const taskName = taskInput.value.trim();
    if (!taskName) {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: current++, 
        name: taskName,
        done: false
    };

    tasks.push(task);
    taskInput.value = "";
    renderTasks();
};

// Render all tasks in the Tbody
const renderTasks = () => {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.id}</td>
            <td style="text-decoration: ${task.done ? 'line-through solid 3px' : 'none'}">${task.name}</td>
            <td><button onclick="toggleTask(${index})">Toggle</button></td>
            <td><button onclick="deleteTask(${index})">Delete</button></td>
        `;

        taskList.appendChild(row);
    });
};

// Toggle task
const toggleTask = (index) => {
    tasks[index].done = !tasks[index].done;
    renderTasks();
};

// Delete task
const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

// Auto-check if all tasks are done every 10 seconds
setInterval(() => {
    if (tasks.length && tasks.every(task => task.done)) {
        console.log("All tasks done!");
    }
}, 10000);

// Bind form submit
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});
