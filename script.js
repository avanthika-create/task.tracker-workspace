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

    //clear 
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

if (currentTime <= 0 && task.length > 0) { 
    currentTime = tasks[0].time * 60;
}

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