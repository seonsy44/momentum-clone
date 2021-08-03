const toDoForm = document.querySelector('#todo-form'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('#todo-list');

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = '⊹ ' + newToDo;
    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);