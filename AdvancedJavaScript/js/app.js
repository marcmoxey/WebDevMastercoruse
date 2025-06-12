(function(app) {
    'use strict';
    const pageItems = {

    };

    app.todoStartup = function(){
        // get the form and its elements
        const frm = document.getElementById('taskForm');
        pageItems.taskList = document.getElementById('taskList');
        pageItems.taskInput = frm.querySelector('#taskInput');
        pageItems.submit = frm.querySelector('#submit');
        pageItems.removeBtn = frm.querySelector('#remove');
    
        
        pageItems.submit.addEventListener('click', addTask);
        pageItems.taskList.addEventListener('click', completeTask);
        pageItems.removeBtn.addEventListener('click',removeCompletedTask);

        loadFromStorage();
        //localStorage.clear(); // Clear localStorage for testing purposes
        //localStorage.removeItem('taskList'); // Remove specific item from localStorage
    };

    function loadFromStorage() {

        const itemsString = localStorage.getItem('taskList');

        if(itemsString != null) {
            const items = JSON.parse(itemsString); 
            items.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item.task;
                if(item.isComplete) {
                    li.classList.add('completed-task');
                }
                pageItems.taskList.appendChild(li);
            });
        }
    }

    function saveToStorage()
    {
        const items = Array.from(pageItems.taskList.children);
        const itemsToSave = items.map(item => {
            return {
                task: item.innerText, 
                isComplete: item.classList.contains('completed-task')
            };
        });

        localStorage.setItem('taskList', JSON.stringify(itemsToSave)); 

     
        
    }


    function removeCompletedTask(e){
        e.preventDefault();
        const items = pageItems.taskList.querySelectorAll('li');
        const itemArray = Array.from(items);
        itemArray.forEach( el => {
            if(el.classList.contains('completed-task')) {
                pageItems.taskList.removeChild(el);
            }
        });
        saveToStorage();
    }

    function completeTask(e)
    {
        if(e.target.classList.contains('completed-task')) {
            e.target.classList.remove('completed-task');
        } else {
            e.target.classList.add('completed-task');
        }
        saveToStorage();
    }


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
            saveToStorage();

                // Sort the task list
        const tasks = Array.from(pageItems.taskList.querySelectorAll('li'))
        .map(li => li.textContent)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    // Clear the current list and re-add sorted items
    pageItems.taskList.innerHTML = '';
    tasks.forEach(task => {
        const sortedLi = document.createElement('li');
        sortedLi.textContent = task;
        pageItems.taskList.appendChild(sortedLi);
    });
}

    
})(window.app = window.app || {}); // IIFE
