function afran(){
    var x= document.getElementById('a');
    var y= document.getElementById('b');

    x.classList.toggle('adian');
    y.classList.toggle('adian');
  }
  function reg(){
    var a =document.forms['regform'] ['nam'].value;
    var b =document.forms['regform'] ['loc'].value;
    var c =document.forms['regform'] ['gmail'].value;
    var d =document.forms['regform'] ['phone'].value;
    var pv=d.lenghth;
    if(a===""|| b===""|| c===""||d==="")
    {
        alert('must filled');
        return false;
    }
  if(pv !==11){
    alert('must include 11 number');
        return false;
  }
  if(pv !==0){
   alert('017 must include at first');
   return false;
  }
   
  }
  
  function log(){
    var e =document.forms['logform'] ['pass'].value;
    var f =document.forms['logform'] ['gmail'].value;
    var gv=(f.lenghth);

    if(e===""|| f==="")
    {
        alert('must filled or register');
        return false;

    }
    if(gv!==3){
 alert('must not include abc')
   return false;
    }
    
  }


  function hdn(){
   var x= document.getElementById('k');
   x.classList.toggle('hdn');
   x.scrollIntoView({behavior:'smooth'});
  }

  
  var l = 0;
var txt = 'Hi, I am Baishakhi.Nice to meet you. My interest in web develpoment started back in 2023 when I decided to learn about structural language.';
var speed = 150;

function typeWriter() {

if (l < txt.length) {
document.getElementById("boy").innerHTML += txt.charAt(l);
l++;
document.querySelector('#boy').style.color="blue";
setTimeout(typeWriter, speed);
}
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.display === "block") {
content.style.display = "none";
} else {
content.style.display = "block";
}
});
}
