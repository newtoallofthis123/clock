var x
x = document.getElementById("clock")
var y
y = document.getElementById("date")

function time(){
	let currentDate = new Date();
	let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
	x.textContent = time
}

function date(){
	let _Date = new Date();
	let Day = _Date.getDate();
	let Month = _Date.getMonth() + 1;
	let Year = _Date.getFullYear();
	y.textContent = Day + "/" + Month + "/" + Year
}

date()
setInterval(time, 1000);