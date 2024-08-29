let newTask = document.getElementById("newtask");
let buttonAdd = document.getElementById("buttonAdd");
let listTasks = document.getElementsByClassName('listTasks')[0];
let buttonClear = document.getElementById("buttonClear");
const tasks = [];
const lines = [];
let checked = false;

buttonAdd.addEventListener('click', function(){
    if ((newTask.value != 'new task')&& (newTask.value !='')){
        addTask();
    }
    else{
        alert('Write down the task')
    }
});

function addTask(e){
    //create a container
    let addedTask = document.createElement('div');
    addedTask.setAttribute('class','addedTaskBox')
    //create a checkbox
    let addedTaskCheckbox = document.createElement('input');
    addedTaskCheckbox.setAttribute('type', 'checkbox');
    addedTaskCheckbox.setAttribute('class', 'checkbox');
    addedTask.append(addedTaskCheckbox);
    addedTaskCheckbox.addEventListener('click', function(){
        if (checked == false){       
            addedTaskText.style.color = 'red';
            addedTaskText.style.textDecoration = 'line-through';
            checked = true;
        }
        else {
            addedTaskText.style.color = 'gray';
            addedTaskText.style.textDecoration = 'none';
            checked = false;
        }
    });
    //create a text field
    let addedTaskText = document.createElement('p');
    addedTaskText.setAttribute('class','addedTaskText');
    addedTaskText.innerText = newTask.value;
    newTask.value = 'new task';
    addedTask.append(addedTaskText)
    tasks.push(addedTask);
    console.log(tasks);
    //create a cancel button
    let buttonCancel = document.createElement('input');
    buttonCancel.setAttribute('type', 'button');
    buttonCancel.setAttribute('class', 'buttonCancel');
    buttonCancel.value = 'x';
    addedTask.append(buttonCancel);
    listTasks.append(addedTask);
    buttonCancel.addEventListener('click', function(){
        addedTask.style.display = 'none';
        line.style.display = 'none';
    })
    //create a line
    let line = document.createElement('hr');
    line.setAttribute('class', 'line');
    listTasks.append(line);
    lines.push(line);
}


buttonClear.addEventListener('click', function(){
    for (i = 0; i < tasks.length; i++){
        listTasks.removeChild(tasks[i]);
        listTasks.removeChild(lines[i]);
    }
})