//now i have to make code for this tic tac toe
//first let's add for reset button
let arr= document.querySelectorAll(".a");
let res=document.querySelector("button");
let heading=document.querySelector("h2");
const chance={"O":"Kunal","X":"Manu"};
res.addEventListener("click",()=>{
    arr.forEach(element => {
        element.textContent="";
    });
});
let x="O";
arr.forEach(element=>{
    element.addEventListener("click",()=>{
        if(element.textContent!="") return;
        element.textContent=x;
        if((arr[0].textContent==arr[1].textContent&& arr[1].textContent==arr[2].textContent&& (arr[0].textContent=="O"||arr[0].textContent=="X"))||
    (arr[3].textContent==arr[4].textContent&& arr[4].textContent==arr[5].textContent&& (arr[3].textContent=="O"||arr[3].textContent=="X"))||
(arr[6].textContent==arr[7].textContent&& arr[7].textContent==arr[8].textContent&& (arr[6].textContent=="O"||arr[6].textContent=="X"))||
(arr[0].textContent==arr[3].textContent&& arr[3].textContent==arr[6].textContent&& (arr[0].textContent=="O"||arr[0].textContent=="X"))||
(arr[1].textContent==arr[4].textContent&& arr[4].textContent==arr[7].textContent&& (arr[1].textContent=="O"||arr[1].textContent=="X"))||
(arr[2].textContent==arr[5].textContent&& arr[5].textContent==arr[8].textContent&& (arr[2].textContent=="O"||arr[2].textContent=="X"))||
(arr[0].textContent==arr[4].textContent&& arr[4].textContent==arr[7].textContent&& (arr[0].textContent=="O"||arr[0].textContent=="X"))||
(arr[2].textContent==arr[4].textContent&& arr[4].textContent==arr[6].textContent&& (arr[2].textContent=="O"||arr[2].textContent=="X"))){ 
            alert(`${chance[x]} won the match.`);
            //now just reset it
            arr.forEach(element=>element.textContent="");
        }
        if(x=="O")x="X";
        else x="O";
        heading.textContent=`${chance[x]}'s turn`;
        
})
});
