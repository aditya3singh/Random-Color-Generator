let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h4 = document.querySelector("h4");
    let rendomGen=RandomColorGen(); 
    h4.innerText = rendomGen;

    let div = document.querySelector("div");
    div.style.backgroundColor = rendomGen;
    
    console.log("Color Updated");
    
});

function RandomColorGen(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green},${blue})`;

    return color;
}