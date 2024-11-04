

// function rangoli(value) {
// var colors = value.split(',');

//   document.getElementById('d1').style.backgroundColor = colors[0]; 
//   document.getElementById('d2').style.backgroundColor = colors[1]; 
//   document.getElementById('d3').style.backgroundColor = colors[2]; 
//   document.getElementById('d4').style.backgroundColor = colors[3];
//   document.getElementById('d5').style.backgroundColor = colors[4];
//   document.getElementById('d6').style.backgroundColor = colors[5];
//   document.getElementById('d7').style.backgroundColor = colors[6];
//   document.getElementById('d8').style.backgroundColor = colors[7];
//   document.getElementById('d9').style.backgroundColor = colors[8];
//   document.getElementById('d10').style.backgroundColor = colors[9];
//  document.getElementById('d11').style.backgroundColor = colors[10];
//  document.getElementById('d12').style.backgroundColor = colors[11];

// }

 


let colors=["red","black","brown","pink","orange","green","cyan","lightgreen","teal","plum","salmon","coral","deeppink","darkcyan","aqua","aquamarine","gray","darkred","lightblue","darkblue"]
let rang = ""
for(let x of colors){
    rang+="<option>" +x+ "</option>"
}
document.getElementById("colsel").innerHTML=rang;
// document.getElementById("colsel1").innerHTML=rang;

let divs=["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12"]

function rangoli(value){
    let n=parseInt(Math.random()*12)
    let div=document.getElementById(divs[n])
    div.style.backgroundColor=value;
}
// function rangoli1(value){
//     let n=parseInt(Math.random()*12)
//     let div=document.getElementById(divs[n])
//     div.style.backgroundColor=value;
// }





