(function(app) {
    'use strict';
    const pageItems = {

    };

    app.todoStartup = function(){
        // get the form and its elements
        const frm = document.getElementById('taskForm');
        pageItems.taskList = document.getElementById('taskList');
        pageItems.taskInput = frm.getElementById('taskInput');
        pageItems.submit = frm.getElementById('submit');
       
        pageItems.submit.addEventListener('click', addTask);
    };

    // function event will call 
    function addTask(e) {
        e.preventDefault();
        // take the value from the input field
        const li = document.createElement('li');
        li.textContent = pageItems.taskInput.value;
        li.innerText = pageItems.taskInput.value;
        // append the li to the taskList
        pageItems.taskList.appendChild(li);
        // clear the input field
        pageItems.taskList.value = '';

    }
})(window.app = window.app || {}); // IIFE
