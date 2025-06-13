(function(app) {
    'use strict';
    const pageItems = {

    };

app.promisesStartup = function() {
    pageItems.loadData = document.getElementById('loadData');
    pageItems.waitIndicator = document.getElementById('wait-indicator');

    pageItems.loadData.addEventListener('click', loadAsyncData);
}

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

    function loadSimplePromiseData(e) {
        pageItems.waitIndicator.style.display = 'block';

        // Create a promise that does some work and either resolves or rejects 
        const promise = new Promise(function(resolve, reject) {
            setTimeout(() => reject('Rejected the promise'), 3000);
        });

        // Listen for the promise to resolve or reject
        promise.then (
            result =>  console.log(result),
            reason => console.error(reason)
        )
        // optional to perform clean up work
        .finally(() => {
            console.log('This is now complete');
            pageItems.waitIndicator.style.display = 'none';
            
        });

    
    }

    function loadChainedPromiseData(e) {
        pageItems.waitIndicator.style.display = 'block';
        const promise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve('Promise #1'), 3000);
        })

        promise.then(result => {
            console.log('Promise #1 succeeded');
            return new Promise(function(resolve, reject) {
                setTimeout(() => reject('Promise #2'), 2000);
            });
        })
        .then(result => {
            console.log('Promise #2 succeeded');

            
        })
        .catch(reason => {
            console.error(`We had a promise failure at ${reason}`);
            
        })
        //      .then(result => {
        //     console.log('Promise after the catch succeeded');

            
        // })
        .finally(() => { 
            console.log('Complete all promises');
             pageItems.waitIndicator.style.display = 'none';
            
        })
    }

    function loadPromiseSetsData(e) {
        const promise1 = new Promise(function(resolve, reject) 
        {
            setTimeout(() => reject('Promise #1'), 4000);
        });
             const promise2 = new Promise(function(resolve, reject) 
        {
            setTimeout(() => reject('Promise #2'), 1000);
        });
             const promise3 = new Promise(function(resolve, reject) 
        {
            setTimeout(() => reject('Promise #3'), 1500);
        });

        // reject if any fail
        // Promise.all([promise1, promise2, promise3])
        // .then(results => console.log(results))
        // .catch(reason => console.error(reason));

        // All of them to be run
        //  Promise.allSettled([promise1, promise2, promise3])
        //  .then(results => console.log(results));
         

        // First to finish 
        // Promise.race([promise1, promise2, promise3])
        // .then(results => console.log(results))
        // .catch(reason => console.error(reason));
        

        // First fulfilled (success) or all errors
        Promise.any([promise1, promise2, promise3])
        .then(results => console.log(results))
        .catch(reason => console.error(reason.errors));
    }

    async function loadAsyncData(e){
        try {
                const results = await timingDemo('Promise #1'); 
                console.log(results);

                const results2 = await timingDemo('Promise #2'); 
                console.log(results2);
        } catch(err) 
        {
            console.error(`There was an error in ${err}`);
            
        }

        console.log('We are all done');
        
    }

    function timingDemo(message) {
        return new Promise((resolve, reject) => { 
            setTimeout(() => reject(message), 2000);
        });
    }

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
