let getElementsByTagName = 12;
console.log(getElementsByTagName);
var h1 = document.getElementsByTagName('h1')[0]; //Для примера напишем комменты
var start = document.getElementById('strt');
var stop = document.getElementById('stp'); 
var reset = document.getElementById('rst'); //Для примера напишем комменты
let sec = 0;
let min = 0;
let hrs = 0;
var t; //Для примера напишем комменты 

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
};

function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
};

function timer() {
    t = setTimeout(add, 1000);
};

timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t) 
};

reset.onclick = function() {
    h1.textContent = "00:00:00"
    seconds = 0; minutes = 0; hours = 0;
};

(() => {
    console.log('--');
})();


