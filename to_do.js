let add=document.querySelector("#add");
add.addEventListener("click",()=>{
    //first we create li and then appendAChgild to ul.
    //also clear the search
    let task=document.querySelector("input").value;
    document.querySelector("input").value="";
    if(task=="") return;
    let li=document.createElement("li");
    li.textContent=task;
    let but=document.createElement("button");
    but.textContent="X";
    but.className="del";
    li.appendChild(but);
    document.querySelector("ul").appendChild(li);
});
let ul=document.querySelector("ul");
ul.addEventListener("click",(e)=>{
    if(e.target.className=="del"){
        e.target.parentElement.remove();
    }
});

document.querySelector("#del_all").addEventListener("click",()=>{
    document.querySelector("ul").innerHTML="";
});