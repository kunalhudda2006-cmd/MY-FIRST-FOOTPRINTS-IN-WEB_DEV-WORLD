let arr=document.querySelectorAll(".c");
let answer=document.querySelector("#answer");
let operand = ["0","1","2","3","4","5","6","7","8","9","(",")"];

let ans="";
let flag=false;
arr.forEach(val=>{
    val.addEventListener("click",()=>{
        val.classList.add("active");
        setTimeout(() => {
        val.classList.remove("active");
        },100);
        let s=val.textContent;
        if(flag==true){
            if(operand.includes(s)==true){
                answer.textContent="";
                ans="";
            }
            flag=false;
        }
        if(s=="C"){
            answer.textContent="";
            ans="";
        }
        else if(s=="="){
            //evaluate
            ans=ans.replaceAll("X","*");
            result=eval(ans);
            answer.textContent=result;
            flag=true;
        }
        else if(s=="DEL"){
            let str=answer.textContent;
            str = str.slice(0, -1);
            answer.textContent=str;
            if(ans.length>=1)ans=ans.slice(0,-1);
        }
        else{
            if(ans.length==0 && operand.includes(s)==false) return;
            else if(operand.includes(ans[ans.length-1])==false && operand.includes(s)==false) return;
            answer.textContent+=s;
            ans+=s;
        }
    })
})