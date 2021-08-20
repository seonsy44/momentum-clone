const toDoForm = document.querySelector('#todo-form'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkToDo(event) {
    const checkBtn = event.target;
    const btnText = checkBtn.innerText
    if (btnText == '○'){
        checkBtn.innerText = '●';
    } else {
        checkBtn.innerText = '○'
    }
}

function changeColor(event) {
    const todoText = event.target;
    const todoTextClass = todoText.className;
    if (todoTextClass=='') {
        todoText.className = 'blue';
    } else if (todoTextClass=='blue') {
        todoText.className = 'red';
    } else {
        todoText.className = '';
    }
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    li.id = newToDo.id
    const checkBtn = document.createElement('span');
    checkBtn.innerText = '○';
    checkBtn.addEventListener('click', checkToDo);
    const todoText = document.createElement('span');
    todoText.innerText = newToDo.text;
    todoText.addEventListener('click', changeColor);
    const deleteBtn = document.createElement('span');
    deleteBtn.innerText = '×';
    deleteBtn.addEventListener('click', deleteToDo);
    li.appendChild(checkBtn);
    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    toDos.forEach(paintToDo);
}