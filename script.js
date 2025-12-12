document.addEventListener('DOMContentLoaded', function(){

//Select Elements
    const addButton = document.getElementById('addButton'); 
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //Define addTask function
    function addTask (){
        const taskText = taskInput.value.trim();

        if (taskText === "")
            alert("Enter a task");
        return;
        }
    //Create <li>
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