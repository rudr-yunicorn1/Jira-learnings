// let string="";
// let buttons =document.querySelectorAll('.button');//here query selector will select all the buttons which class is button 
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click',(e)=>{  // here e is defining event that is this happen do this
//         console.log(e.target)
//         string= string + e.target.innerHTML;
//         document.querySelector('input').value = string ;
//     })
// })
let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML == 'C'){
            string="";
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML == 'D'){
            string=string.slice(0,-1);
            document.querySelector('input').value=string;
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    });
});
