// const btnsEle = document.querySelectorAll("button")

// const inputEle = document.getElementById("result")

// for(let i=0; i<btnsEle.length; i++){
//    btnsEle[i].addEventListener("click", ()=>{
   
//     const btnValue = btnsEle[i].textContent
//     if(btnValue === "CE"){
//         clearResult()
//     }else if (btnValue === 'back') {
//        backResult()
//     }
//     else if(btnValue === "="){
//         calculateResult()
//     }else if(btnValue === "square")
//         squareResult()

//     else{
//         appendValue(btnValue)
//     }
//    }) 
// }

// function clearResult(){
//     inputEle.value = ""
// }
// function backResult(){
//     inputEle.value = inputEle.value.slice(0, -1);
// }
// function squareResult() {
//     try {
//         const value = eval(inputEle.value);
//         inputEle.value = Math.pow(value, 2);
//     } catch {
//         inputEle.value = "Error";
//     }
// }

// function calculateResult(){
//     inputEle.value = eval(inputEle.value)
// }

// function appendValue(btnValue){
//     inputEle.value += btnValue
// }


const btnsEle = document.querySelectorAll("button");
const inputEle = document.getElementById("result");

for (let i = 0; i < btnsEle.length; i++) {
    btnsEle[i].addEventListener("click", (function(value) {
        return () => {
            if (value === "CE") {
                clearResult();
            } else if (value === '#') {
                backResult();
            } else if (value === "=") {
                calculateResult();
            } else if (value === "square") {
                squareResult();
            } else {
                appendValue(value);
            }
        };
    })(btnsEle[i].textContent)); 
}

function clearResult() {
    inputEle.value = "";
}

function backResult() {
    inputEle.value = inputEle.value.slice(0, -1);
}

function squareResult() {
    try {
        const value = eval(inputEle.value);
        inputEle.value = Math.pow(value, 2);
    } catch {
        inputEle.value = "Error";
    }
}



function calculateResult() {
    try {
        inputEle.value = eval(inputEle.value);
    } catch {
        inputEle.value = "Error";
    }
}

function appendValue(btnValue) {
    inputEle.value += btnValue;
}
