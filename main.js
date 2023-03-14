var z = setInterval(time,1000)

function time(){

var x = new Date()
var y = x.toLocaleTimeString()
document.getElementById('cal').innerHTML=y
}

var a = setInterval(lap)
function lap(){
var b = new Date()
var c = b.toLocaleDateString()
document.getElementById('date').innerHTML = c;
}