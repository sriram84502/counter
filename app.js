let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const style = e.currentTarget.classList;
        if(style.contains("increase")){
            count++;
        }else if(style.contains("decrease")){
            count--;
        }else{
            count = 0;
        }
        if(count>0){
            value.style.color = "green";
        }else if(count<0){
            value.style.color = "red";
        }else{
            value.style.color = "black";
        }
        value.textContent = count;
    });
});