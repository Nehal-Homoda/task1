
function changeColor()
{
let text=document.querySelector(".text");
let red=document.querySelector(".red").value;
let green=document.querySelector(".green").value;
let blue=document.querySelector(".blue").value;
let color='rgb('+red+','+green+','+blue+')';
text.style.color=color;
}
document.querySelector('.red').addEventListener('input',changeColor);
document.querySelector('.green').addEventListener('input',changeColor);
document.querySelector('.blue').addEventListener('input',changeColor);
