const todoInput   = document.querySelector('.todo-input');
const todoButton  = document.querySelector('.todo-button');
const todoList    = document.querySelector('.todo-list');
let alert1        = document.querySelector('.alert-active');
const filterOption= document.querySelector('.filter-todo');

// !========================================================
                    //*add todo function
//! ========================================================
const addTodo=(e)=>{
  e.preventDefault();
  if(todoInput.value!==''){
    if(alert1){alert1.remove()}
  //*create todoDiv
  const todoDiv     = document.createElement('div');
  todoDiv.classList.add('todo');
    
  //*create LI
  const newTodo     =document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  
  //*completed button
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  
    //*delete button
  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);

  //*append to list
  todoList.appendChild(todoDiv)
  const deleteBtn   = document.querySelector('.delete-btn')
  //*clear input
  todoInput.value=''
  }
      else{
        alert1= document.createElement('div')
        alert1.innerText ="no text to added"
        alert1.classList.add('alert-active')
        todoList.appendChild(alert1)
    }
}

// !========================================================
                    //*filter function
//! ========================================================

const filterTodo=(e)=>{
  
  const todos = todoList.childNodes;
  // console.log(e.target.value)
  todos.forEach((todo)=>{
      e.target.value==='all'?todo.style.display='flex':false;
      e.target.value==='completed'?todo.classList.contains('completed')?todo.style.display='flex':todo.style.display='none':false
      e.target.value==='uncompleted'?!todo.classList.contains('completed')?todo.style.display='flex':todo.style.display='none':false
  })

}
// !========================================================
                    //*check and delete buttons
//! ========================================================
const deleteCheck=(e)=>{
  e.preventDefault();
  const item=e.target;
  //! Delete todo item
  if(item.classList[0]==='delete-btn'){
    const todo = item.parentElement; //!select the parent element
    todo.classList.add('fall')
    const deleteTodo=()=>todo.remove();
    setTimeout(deleteTodo,500)
  //! check mark
  }
  if(item.classList[0]==='complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed')
  }

}


// !========================================================
                    //*listeners
//! ========================================================

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)
// function addTodo(event){ 
//   event.preventDefault()

//     //*create t odoDiv
//     const todoDiv   = document.createElement('div');
//     todoDiv.classList.add('todo');
//     //*create LI
//     const newTodo   =document.createElement('li');
//     newTodo.innerText= 'something';
//     newTodo.classList.add('todo-item');
//     todoDiv.appendChild(newTodo);
    
//     //*completed button
//     const completedButton = document.createElement('button')
//     completedButton.innerHTML = '<i class="fas fa-check"></i>';
//     completedButton.classList.add('complete-btn');
//     todoDiv.appendChild(completedButton);
    
//       //*delete button
//     const deleteButton = document.createElement('button')
//     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//     deleteButton.classList.add('delete-btn');
//     todoDiv.appendChild(deleteButton);
  
//     //*append to list
//     todoList.appendChild(todoDiv);
    
// }
