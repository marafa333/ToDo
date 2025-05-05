var data = [];
var counter = 1;
// Add Task
function addTask() {
    var a = document.getElementById("taskInput");
    var task = a.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }
    data[counter] = {
        id: counter,
        name: task,
        done: false
    };
    counter++;
    a.value = "";
    renderTasks();
}

// Add Task in Tbody
function renderTasks() {
    var tbody = document.getElementById("taskList");
    tbody.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] !== "undefined") {
            let row = document.createElement("tr");

            // ID Cell
            let tdId = document.createElement("td");
            tdId.textContent = data[i].id;
            row.appendChild(tdId);

            // Task Name Cell
            let tdName = document.createElement("td");
            tdName.textContent = data[i].name;
            if (data[i].done) {
                tdName.style.textDecoration = "line-through solid 3px";
            }
            row.appendChild(tdName);

            // Toggle Button Cell
            let tdToggle = document.createElement("td");
            let toggleBtn = document.createElement("button");
            toggleBtn.textContent = "Toggle";
            toggleBtn.onclick = function () {
                toggle(i);
            };
            tdToggle.appendChild(toggleBtn);
            row.appendChild(tdToggle);

            // Delete Button Cell
            let tdDelete = document.createElement("td");
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = function () {
                deleteTask(i);
            };
            tdDelete.appendChild(deleteBtn);
            row.appendChild(tdDelete);

            tbody.appendChild(row);
        }
    }
}

// Toggle Task
function toggle(index) {
    if (data[index]) {
        data[index].done = !data[index].done;
        renderTasks();
    }
}

// Delete Task
function deleteTask(index) {
    data.splice(index, 1);
    renderTasks();
}

// All Tasks Done Check
setInterval(() => {
    if (data.length === 0) return;

    const allDone = data.every(task => task && task.done);
    if (allDone) {
        console.log("All tasks done!");
    }
}, 10000);
