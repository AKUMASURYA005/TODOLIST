let todo =[];
let req = prompt("enter add to add a task,delete to delte a task,list to show items,quit to qiut the todo ");


while(true){
    if(req == "quit"){
        console.log("you quit");
        break;
    }

    if(req=="list"){
        console.log("--------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("--------------------");
    }
    if(req == "delete"){
        let idx =prompt("enter the index number you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    
    else if(req == "add"){
        let task = prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else{
        console.log("wrong request");
    }
     req = prompt("enter add to add a task,delete to delte a task,list to show items,quit to qiut the todo ");

}