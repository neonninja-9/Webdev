let taskInput = document.getElementById("task-input");
let taskList = document.getElementById("task-list");
let taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload
    let taskText = taskInput.value.trim();

    if (taskText) {
        let listItem = document.createElement("li");

        // Create text span (so it's separate from button)
        let taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✕"; // cross symbol
        deleteBtn.classList.add("delete-btn");

        // Handle delete
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });

        // Toggle complete on text click
        taskSpan.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });

        // Append span + button to li
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);

        // Add li to task list
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = "";
    }
});
