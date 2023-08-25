let string = "";
let buttons = document.querySelectorAll('.butn');
Array.from(buttons).forEach((butn)=>{
    butn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'Clear'){
            string = "";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})