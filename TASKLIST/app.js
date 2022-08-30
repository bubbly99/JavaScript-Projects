//Define UI Vars
const form = document.querySelector('#task-form');//First Form
const tasklist = document.querySelector('.collection');//Ul
const clearbtn = document.querySelector('.clear-task');//Clear Task Button
const filter = document.querySelector('#filter');//Filter Task Field
const taskInput = document.querySelector('#task');//Add Task Field

//Load Event Listners
loadAllEventListners();

//Load Event Listners
function loadAllEventListners(){
  form.addEventListener('submit',addTask);

  tasklist.addEventListener('click',clearTasks);

  clearbtn.addEventListener('click',clearAllTasks);

  filter.addEventListener('keyup',filterTask);
}

function addTask(e){
    if(taskInput.value === ''){
      alert('Input Field Is Empty');
    }

    //Create li Element

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    //Create new link Element
    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);
   
     // Append li to ul
  tasklist.appendChild(li);

  // Clear input
  taskInput.value = '';


    e.preventDefault();
}

function clearTasks(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}

function clearAllTasks(e) {

  //tasklist.innerHTML='';

  while(tasklist.firstChild) {
    tasklist.firstChild.remove();

    
  }
}

function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(
    function (task) {
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      }else{
        task.style.display = 'none';
      }
      
    });
}