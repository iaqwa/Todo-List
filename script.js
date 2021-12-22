const todoInput=document.getElementsByClassName("todo-input")[0];
const todoButton=document.getElementsByClassName("todo-button")[0];
const todoList=document.getElementsByClassName("todo-list")[0];
const filtered=document.getElementsByClassName("filter")[0];

let todos = [];
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filtered.addEventListener("click",filterTodo);

function addTodo(e){

    e.preventDefault();

const todoDiv=document.createElement("div");
todoDiv.classList.add("todo");

const todoLi=document.createElement("li");
todoLi.innerText=todoInput.value;
todos.push(todoInput.value);
todoLi.classList.add("todo-item");
todoDiv.appendChild(todoLi);


completeButton=document.createElement("button");
completeButton.classList.add("completed-btn");
completeButton.innerHTML='<i class="fas fa-check"></i>';
todoDiv.appendChild(completeButton);

trashButton=document.createElement("button");
trashButton.classList.add("trash-btn");
trashButton.innerHTML='<i class="fas fa-trash"></i>';
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);
todoInput.value="";
}

function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]==="completed-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
    if(item.classList[0]==="trash-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener(transitionend,function(){
            todo.remove();
        });
        todo.remove();
    }
}

function filterTodo(e){

    const todos=todoList.childNodes;
    todos.forEach(function(todo){
    switch(filterOption.value){
        case "all" :todo.style.display="flex";
        break;
        case "complete": 
            if(todo.classList.contains("completed")){
                todo.style.display="flex";}
            else {todo.style.display="none";}
        break;
        case "notcomplete":
            if(!todo.classList.contains("completed")){
                todo.style.display="flex";}
            else {todo.style.display="none";}
    
    }
});
}



