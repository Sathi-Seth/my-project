let inp = document.querySelector("#input");
let addBtn = document.querySelector("#AddTask");
let taskList = document.querySelector("#taskList");

addBtn.addEventListener('click' , () => {
    let task = inp.value.trim() ; // Read the input value
    
    if(!task){ //If empty → do nothing
        return ;
    }

    let li = document.createElement('li') ; //Create a new <li>
    li.innerText = task ;

    let finishBtn = document.createElement('button') ;
    finishBtn.classList = "finishBtn" ;
    finishBtn.innerText = 'completed' ;
    li.appendChild(finishBtn) ;

    let delBtn = document.createElement('button') ; //Add text + delete button
    delBtn.innerText = 'delete' ;
    delBtn.classList = "delBtn" ;
    li.appendChild(delBtn) ;
    
    taskList.appendChild(li) ;
    inp.value = "" ;

}) ;

taskList.addEventListener('click' , (el) => {
    if (el.target.classList.contains("delBtn"))
        el.target.parentElement.remove() ;
}) ;

taskList.addEventListener('click' , (el) => {
    if(el.target.classList.contains("finishBtn")){
        el.target.classList.toggle("done");
    }
}) ;

taskList.addEventListener('click', (el) => {
    if(el.target.classList.contains("finishBtn")){
        let li = el.target.parentElement ;
        li.style.color = "green";       
    }
});



