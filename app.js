// var num = 0
// var interval = setInterval(function () {
//     num += 70
//     console.log(num);

// }, 10000)

// var h2=document.querySelector("#time");
// var num=0;

// var time;
// function startTimer(){
//     time=setInterval(function(){
//         num +=1;
//         h2.innerHTML="num";
//     },100)
// }
// function stopTimer(){
//     clearInterval(time);
// }
// function resetTimer() {
//     num = 0
//     h2.innerHTML = 0
//     clearInterval(timer)
// }
// var head = document.querySelector("#timer");
// var sec = document.querySelector("#sec");
// var min = document.querySelector("#tmin");
// var num = 0
// var minutes = 0
// var hours = 0

// var timer;
// function startTimer() {
//     timer = setInterval(function () {
//         num += 1
//         head.innerHTML = num
//         if (num == 60) {
//             minutes += 1;   // Increment minutes by 1
//             num = 0;        // Reset the seconds to 0
            
//             // Update the HTML with the reset value of num (i.e., 0)
//             sec.innerHTML = num;
//         } else {
//             sec.innerHTML = num;  // Display the current seconds in the element
//         }
//     }, 10)
    
// }
// function setTimer() {
//     clearInterval(timer)
// }
// function resetTimer() {
//     num = 0
//     head.innerHTML = 0
//     clearInterval(timer)
// }


// function add() {
//     if (num == 60) {
//         minutes += 1;   // Increment minutes by 1
//         num = 0;        // Reset the seconds to 0
        
//         // Update the HTML with the reset value of num (i.e., 0)
//         sec.innerHTML = num;
//     } else {
//         sec.innerHTML = num;  // Display the current seconds in the element
//     }
// }



var time=document.querySelector("#time")
var head = document.querySelector("#timer");
var sec = document.querySelector("#sec");
var min = document.querySelector("#min");
var hrs = document.querySelector("#hrs");
var display=document.querySelector("#display");

var num = 0;          
var minutes = 0;      
var hours = 0;       

var timer;
function startTimer() {
    timer = setInterval(function () {
        
        num += 1;   
        

        if (num == 60) {
            minutes += 1;   
            num = 0;        
            min.innerHTML =`:${minutes}`;
        } else {
            sec.innerHTML = num;  
            

        }
        if (minutes == 60) {
            hours += 1;     
            minutes = 0;   

            
            hrs.innerHTML = `:${hours}`;
        }

    }, 1000);  
}

function setTimer() {
    clearInterval(timer);  
    display.innerHTML+=`Time: ${hours} hrs: ${minutes} mins: ${num} sec <br/>`;

}

function resetTimer() {

     num = 0;          
     minutes = 0;      
     hours = 0; 
    
    sec.innerHTML = "00";
    min.innerHTML = ":00";
    hrs.innerHTML = ":00";
    display.innerHTML=""

    clearInterval(timer);  
}
