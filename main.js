let square = document.getElementById("square");

let length = square.getTotalLength();


square.style.strokeDasharray = length;

square.style.strokeDashoffset = length;

window.addEventListener("scroll", myFunction);

function myFunction() {
  let scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);


  let draw = length * scrollPercent;

  square.style.strokeDashoffset = length - draw;
}