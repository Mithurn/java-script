let input = document.querySelector('.input')
let addButton = document.querySelector('.add-button')
let enterButton = document.querySelector('.enter-button')


addButton.addEventListener('click',function(){
        input.style.display = 'block'; // Show the input field
        enterButton.style.display ='block';
    })














//     // Select elements
// let input = document.querySelector('.input');
// let addButton = document.querySelector('.add-button');
// let enterButton = document.querySelector('.enter-button');
// let taskContainer = document.querySelector('.task-container');

// // Show input and "Add" button when "+" button is clicked
// addButton.addEventListener('click', function () {
//     input.style.display = 'block';
//     enterButton.style.display = 'block';
// });

// // Add task to the container
// enterButton.addEventListener('click', function () {
//     let taskText = input.value.trim(); // Get input value and trim spaces
//     if (taskText === "") {
//         alert("Please enter a task!");
//         return;
//     }

//     // Create a task element
//     let taskDiv = document.createElement('div');
//     taskDiv.classList.add('task');

//     let taskContent = document.createElement('span');
//     taskContent.textContent = taskText; // Set the text

//     let deleteButton = document.createElement('button');
//     deleteButton.textContent = "Delete"; // Delete button
//     deleteButton.style.marginLeft = '10px';

//     // Add delete functionality
//     deleteButton.addEventListener('click', function () {
//         taskDiv.remove(); // Remove the task
//     });

//     // Append elements
//     taskDiv.appendChild(taskContent);
//     taskDiv.appendChild(deleteButton);
//     taskContainer.appendChild(taskDiv);

//     // Clear the input field
//     input.value = "";
// });
