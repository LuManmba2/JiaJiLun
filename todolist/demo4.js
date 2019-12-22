const input = document.getElementById('title');
const todoUl = document.getElementById('todolist');
const doneUl = document.getElementById('donelist');
const todoCount = document.getElementById('todocont');
const doneCount = document.getElementById('donecont');
const form = document.getElementById("form");
const storage = window.localStorage;


function addTodo(what) {
    const newInput = document.createElement('input');
    newInput.type = "text"; newInput.classList.add("new");
    const li = document.createElement('li');
    const button = document.createElement('button');
    const todoInput = document.createElement('input');
    todoInput.type = 'checkbox';
    li.classList.add("li");
    button.classList.add("deletbut");
    li.textContent = what;
    li.prepend(todoInput);
    li.append(button);
    todoUl.appendChild(li);
    todoInput.onclick = function () {
        addDone(what);
        li.remove();
        todoCount.innerText = todoUl.childElementCount;
        doneCount.innerText = doneUl.childElementCount;
    }
    button.onclick = function () {
        li.remove();
        todoCount.innerText = todoUl.childElementCount;
        doneCount.innerText = doneUl.childElementCount;
    }
    li.onclick = function () {
        li.parentNode.replaceChild(newInput, li);
        newInput.onkeydown = function (ev) {
            if (ev.keyCode == 13) {
                li.innerText = newInput.value;
                what = newInput.value;
                li.prepend(todoInput);
                li.append(button);
                newInput.value = null;
                newInput.parentNode.replaceChild(li, newInput);
                todoCount.innerText = todoUl.childElementCount;
                doneCount.innerText = doneUl.childElementCount;
            }
        }
    }
    todoCount.innerText = todoUl.childElementCount;
    doneCount.innerText = doneUl.childElementCount;
}
function addDone(what) {
    const newInput = document.createElement('input');
    newInput.type = "text"; newInput.classList.add("new");
    const li = document.createElement('li');
    const button = document.createElement('button');
    const doneInput = document.createElement('input');
    doneInput.type = 'checkbox'; doneInput.checked = 'checked';
    li.classList.add("li");
    button.classList.add("deletbut");
    li.textContent = what;
    li.prepend(doneInput);
    li.append(button);
    doneUl.appendChild(li);
    doneInput.onclick = function () {
        addTodo(what);
        li.remove();
        todoCount.innerText = todoUl.childElementCount;
        doneCount.innerText = doneUl.childElementCount;
    }
    button.onclick = function () {
        li.remove();
        todoCount.innerText = todoUl.childElementCount;
        doneCount.innerText = doneUl.childElementCount;
    }
    li.onclick = function () {
        li.parentNode.replaceChild(newInput, li);
        newInput.onkeydown = function (ev) {
            if (ev.keyCode == 13) {
                li.innerText = newInput.value;
                what = newInput.value;
                li.prepend(doneInput);
                li.append(button);
                newInput.value = null;
                newInput.parentNode.replaceChild(li, newInput);
                todoCount.innerText = todoUl.childElementCount;
                doneCount.innerText = doneUl.childElementCount;
            }
        }
    }
    todoCount.innerText = todoUl.childElementCount;
    doneCount.innerText = doneUl.childElementCount;
}
//从local storage中向列表添加标签
const tarr = JSON.parse(storage.getItem('todo'));
const darr = JSON.parse(storage.getItem('done'));
// 添加todolist
if (Array.isArray(tarr))
    for (let i of tarr)
        addTodo(i);

//添加donelist
if (Array.isArray(darr))
    for (let i of darr)
        addDone(i);

todoCount.innerText = todoUl.childElementCount;
doneCount.innerText = doneUl.childElementCount;
// 键入的时候添加列表
input.onkeydown = function (ev) {
    const value = input.value;
    if (!window.localStorage)
        alert("不浏览器支持localstorage");
    if (value.length > 40)
        alert("请输入三十字以内");
    else if (ev.keyCode == 13) {
        addTodo(value);
    }
    input.value = null;
}
function clearAll1() {
    const temp = todoUl.getElementsByTagName("li");
    for (let it = 0; it < temp.length;) {
        temp[it].remove();
        console.log(it);
    }
    todoCount.innerText = todoUl.childElementCount;
    doneCount.innerText = doneUl.childElementCount;
}
function clearAll2() {
    const temp = doneUl.getElementsByTagName("li");
    for (let it = 0; it < temp.length;) {
        temp[it].remove();
        console.log(it);
    }
    doneUl.remove();
    todoCount.innerText = todoUl.childElementCount;
    doneCount.innerText = doneUl.childElementCount;
}
onunload = function () {
    const todoArr = [];
    for (let it of todoUl.children) {
        todoArr.push(it.textContent);
    }
    const doneArr = [];
    for (let it of doneUl.children) {
        doneArr.push(it.textContent);
    }
    storage.setItem("todo", JSON.stringify(todoArr));
    storage.setItem("done", JSON.stringify(doneArr));
}

// input.onblur = function () {
//     input.value = null;
// }
