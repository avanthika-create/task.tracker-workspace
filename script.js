let tasks = [];

let currentTime = 0; 
let timerInterval = null;

const taskName = document.getElementById("taskName");
const taskTime = document.getElementById("taskTime");
const addBtn = document.getElementById("addBtn");
const taskList= document.getElementById("taskList");


const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const currentTaskDisplay = document.getElementById("currentTask");
const nextTaskDisplay = document.getElementById("nextTask");

// buttons

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

addBtn.addEventListener("click", () => { 
    console.log("clicked");
});

addBtn.addEventListener("click", addTask);

function addTask () {
    const name = taskName.value.trim(); 
    const time = parseInt(taskTime.value);

    // validation 
    if (!name) return; 
    if (isNaN(time) || time < 0 || time > 59) return;

    // store task 
    tasks.push({ 
        name: name, 
        time: time 
    });

    // update 
    renderTasks(); 

    // update current + next display
    if (tasks.length > 0) {
        currentTaskDisplay.textContent = `Current: ${tasks[0].name}`;
    } else {
        currentTaskDisplay.textContent = "Current: -";
    }

    if (tasks.length > 1) {
        nextTaskDisplay.textContent = `Next: ${tasks[1].name}`;
    } else {
        nextTaskDisplay.textContent = "Next: -";
    }

    // clear inputs
    taskName.value = "";
    taskTime.value = "";

}

function renderTasks(){ 
    taskList.innerHTML = "";

    tasks.forEach((task, index) => { 
        const div = document.createElement("div");
        div.classList.add("task");

        div.textContent = `${task.name} - ${task.time} min`;
        taskList.appendChild(div);
    });
}

function startTimer() {
    if (timerInterval) return;

    if (tasks.length === 0) { 
        alert("Add a task first"); 
            return;
    }

if (currentTime <= 0) { 
    currentTime = tasks[0].time * 60;
}

updateDisplay (); 

timerInterval = setInterval (() => {
    if (currentTime <= 0) { 
        clearInterval(timerInterval);
        timerInterval = null; 
        return;
    }

    currentTime--;

    updateDisplay();
}, 1000);

timerInterval = setInterval(() => { 
    if (currentTime <=0) { 
        clearInterval(timerInterval);
        timerInterval = null;
        return;
    }
    currentTime--;
    updateDisplay();
}, 1000);
}

function pauseTimer(){ 
    clearInterval(timerInterval);
    timerInterval = null; 
}

function resetTimer() { 
    pauseTimer(); 
    currentTime = 0;
    updateDisplay();
}

function updateDisplay() { 
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;; 

    timeDisplay.textContent = 
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}