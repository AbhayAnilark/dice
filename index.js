function rolldice(){
    const x=document.getElementById("sel1").value;
    const dice=[]
    const image=[]
    for(let i=0;i<x;i++){
        const y=  Math.floor(Math.random()*6) +1;
        dice.push(y); 
        image.push(`<img src="${y}.png">`);
    
    }
    console.log(dice);
    console.log(image);
    
    document.getElementById("num").textContent = `dice: ${ dice.join(',') }`;
    document.getElementById("images").innerHTML = image.join('');

}
