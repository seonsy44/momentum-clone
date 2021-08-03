const toDoForm = document.querySelector('#todo-form'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('#todo-list');

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = '⊹ ' + newToDo;
    const btn = document.createElement('button');
    btn.innerText = '×';
    btn.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);