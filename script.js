// Code is written by CHIRAG RAJ
let btn1 = document.getElementById("start");
let btn2 = document.getElementById("pause");
let btn3 = document.getElementById("reset");
let timer_text = document.getElementById("stopwatch");

//add event listener to all buttons
btn1.addEventListener("click" , Start);
btn2.addEventListener("click" , Stop);
btn3.addEventListener("click" , Reset);

let check = false;
let check_for_start = false;
//Define Start function
let seconds = 0;
let minutes = 0;
let hours = 0;
let event_value;
let s , m , h;

function Start() {
    if(check_for_start === true) return;

    check = true;
    check_for_start = true;
    event_value = setInterval(function(){
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        if(hours === 24) {
            Reset();
        }

        //-> change to string <-

        // for seconds
        if(seconds < 10) {
            s = "0" + seconds;
        }
        else {
            s = seconds;
        }

        // for minutes
        if(minutes < 10) {
            m = "0" + minutes;
        }
        else {
            m = minutes;
        }

        // for hours
        if(hours < 10) {
            h = "0" + hours;
        }
        else {
            h = hours;
        }

        timer_text.innerHTML = h + " : " + m + " : " + s;
    }, 1000) // Change the interval to 1000 milliseconds (1 second)
}

//Define Stop function
function Stop() {
    if(check === false) return;
    clearInterval(event_value);
    start_btn.innerText = "RESUME";
    check_for_start = false;
}

//Define Reset function
function Reset() {
    check = false;
    check_for_start = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer_text.innerHTML = "00 : 00 : 00";
    clearInterval(event_value);
    start_btn.innerText = "START";   
}
