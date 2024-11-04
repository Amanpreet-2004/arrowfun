let img=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
let a=[];
let b=[];

let n,m;

let sum=0;
let add=0;
function show1(){
    let dicenum1= document.querySelector("#dice1");
    dicenum1.setAttribute("src","dice1.png")
    setTimeout(()=>{
        n=parseInt(Math.random()*6)
        document.images[0].src=img[n]
        let dn=n+1;
        a.push(dn); 
        r1.innerHTML = "Roll 1: " + (a[0] !== undefined ? a[0] : 0);
        r2.innerHTML = "Roll 2: " + (a[1] !== undefined ? a[1] : 0);
        r3.innerHTML = "Roll 3: " + (a[2] !== undefined ? a[2] : 0);
        r4.innerHTML = "Roll 4: " + (a[3] !== undefined ? a[3] : 0);
        r5.innerHTML = "Roll 5: " + (a[4] !== undefined ? a[4] : 0);

        sum=0;
        for(i=0; i<a.length; i++){
            sum = sum+a[i]
        }
        if(a.length == 6){
            a = [];
            winner()
        }
        ply1.innerHTML = "Score of player1 : " +sum;

        if(m!==undefined){
            winner();
        }
    },500);
}
function show2(){
    let dicenum2 = document.querySelector("#dice2");
    dicenum2.setAttribute("src","dice1.png")
    setTimeout(()=>{
    m=parseInt(Math.random()*6);
    document.images[1].src=img[m]
    let dn2=m+1;
    b.push(dn2);
    d1.innerHTML = "Roll 1: " + (b[0] !== undefined ? b[0] : 0);
    d2.innerHTML = "Roll 1: " + (b[1] !== undefined ? b[1] : 0);
    d3.innerHTML = "Roll 1: " + (b[2] !== undefined ? b[2] : 0);
    d4.innerHTML = "Roll 1: " + (b[3] !== undefined ? b[3] : 0);
    d5.innerHTML = "Roll 1: " + (b[4] !== undefined ? b[4] : 0);
    add =0;
    for(i=0;i<b.length;i++){
        add = add+b[i]
    }
    if(b.length==5){
        alert("check ure result");
    }
    if(b.length === 6){
        winner()
    }
    ply2.innerHTML="score of player2 : "+add
    if(n!==undefined){
       winner() 
    }
    },500) 
}

function winner(){
    if(a.length===5){
        if(sum == add){
            result.innerHTML = " draw!";
            setTimeout(()=>{
                alert("play again")
            },500)
        }else if(sum >add){
            result.innerHTML = "player 1 wins";
            setTimeout(()=>{
                alert("congratulations")
            },500)
        }else{
            result.innerHTML = "player 2 wins";
            setTimeout(()=>{
                alert("congra  player 2")
            },500)
        }
    }
}
sum=0;
add=0;