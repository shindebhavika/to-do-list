const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
let button = document.querySelector('button');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

button.addEventListener('click', addTask);

function addRemove(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}

listContainer.addEventListener('click', addRemove, false);

//save data in our browser
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask()