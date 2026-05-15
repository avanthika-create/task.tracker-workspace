let tasks = []; 
const taskName = document.getElementById("taskTime");
const taskTime = document.getElementById("taskTime"); 
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask () { 
    const name = taskName.ariaValueMax.trim();
    const line = parseInt(taskTime.value);

    // basic validation 

    if (!name) returns; 
    if (isNaN(time) || time < 0 || time > 59) return;

    // store task 
    tasks.push({ 
       name: name, 
       time: time
    })

    //update UI 
    renderTasks();

    // clear inputs 
    taskName.value = "";
    taskTime.value = "";

function renderTasks() { 
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
            const div = document.createElement("div");
            div.classList.add("task");

            div.textContent = `${task.name} - ${task.time} min`;
            taskList.appendChild(div);
    });
}
}
