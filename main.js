// khai bao ham tao 2 so ngau nhien
const num1 = Math.ceil(Math.random()*9);
const num2 = Math.ceil(Math.random()*9);
// tao bien socres = 0
let scores = parseInt(localStorage.getItem("scores"));
// truong hop socres khong la so
if (!scores) {
    scores = 0;
}
// DOM El
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const clearBtnEl = document.getElementById("btn-clear");
const number1El = document.getElementById("number1");
const number2El = document.getElementById("number2");

//truyen cau hoi ngau nhien vao question
number1El.innerHTML = `${num1}`;
number2El.innerHTML = `${num2}`;




// khai bao bien dap an dung
const correctAns = num1 * num2;

//event 

formEl.addEventListener('submit',() => {
    const userAns = +inputEl.value;
    if(correctAns === userAns) {
       
        scores++;
        console.log(scores);
        updateLocalStorage();
       

        
        
    } else {
        scores--;
        updateLocalStorage();

    }
   
} );
// tao ham luu tru score vao localStorage
const updateLocalStorage = () => {
    localStorage.setItem('scores', scores.toString() );
}
// truyen score vao scoreEL
scoreEl.innerHTML = `score: ${scores}`;

// reset scores = 0 
clearBtnEl.onclick = () => {
    localStorage.clear();
    refreshPage(); 
}
function refreshPage(){
    window.location.reload();
} 







