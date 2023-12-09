//Error Message
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", function() {
    const todoInput = document.getElementById("todoInput").value;
    if(todoInput =="") {
        alert("Please Input something")
    }
}
)


document.addEventListener("DOMContentLoaded", function () {
    var todoInput = document.getElementById("todoInput");
    var addTaskButton = document.getElementById("addTask");
    var taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        var taskText = todoInput.value.trim();
        if (taskText !== "") {
            // Create a new list item
            var newTask = document.createElement("li");
            newTask.textContent = taskText;

            // Add a delete button to the task
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                // Remove the task when the delete button is clicked
                newTask.remove();
            });

            // Append the delete button to the task
            newTask.appendChild(deleteButton);

            // Append the task to the task list
            taskList.appendChild(newTask);

            // Clear the input field
            todoInput.value = "";
        }
    });
});







