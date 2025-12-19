document.addEventListener('DOMContentLoaded', function(){
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
    function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});
//Select Elements
    const addButton = document.getElementById('add-task-btn'); 
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //Define addTask function
    function addTask (){
        const taskText = taskInput.value.trim();

        if (taskText === "")
            alert("Enter a task");
        return;
        } 

     const li = document.createElement("li");
    li.textContent = taskText;
        
    
    //Create Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    //When clicked remove this task
    removeBtn.onclick = function () {
        taskList.removeChild(li);
         };

    //attach button to li then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    //clear input
    taskInput.value = "";


    //add event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress' , function(event) {
        if(event.key === "Enter")
        {
            addTask();
        }
    });
   addTask();
});
});