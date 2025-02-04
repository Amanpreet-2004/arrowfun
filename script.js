
// const btnsEle = document.querySelectorAll("button");
const inputEle = document.getElementById("result");


function clearResult() {
    inputEle.value = "";
}

function backResult() {
    inputEle.value = inputEle.value.slice(0, -1);
}

function calculateResult(){
    let x=document.getElementById("result").value;
    if(x.includes("^")){
        x=x.replace("^","**")
        inputEle.value=eval(x)
    }else if(x.includes("%")){
        x=x.replace("%","")
        let c=x*1/100
        inputEle.value=c
    }else if(x.includes("√")){ 
        x=x.replace("√","");
        let s= Math.sqrt(x)
        inputEle.value=s

    }
    else{
        inputEle.value= eval(x)
    }
}

function value(btn){
    inputEle.value += btn;
}
