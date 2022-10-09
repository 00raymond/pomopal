var startSesh = 0;
var numPom = 2;
document.getElementById("numCycle").innerHTML = numPom;
btnUp.addEventListener('click', () => {
    console.log("incremented");
    numPom++;
    document.getElementById("numCycle").innerHTML = numPom;
    console.log(numPom);
});
btnDown.addEventListener('click', () => {
    console.log("decremented");
  if (numPom != 1)
    numPom--;
    document.getElementById("numCycle").innerHTML = numPom;
    console.log(numPom);
});
function increment(){
    console.log("incremented");
    numPom++;
    document.getElementById("numCycle").innerHTML = numPom;
    console.log(numPom);
}
function decrement(){
    console.log("decremented");
  if (numPom != 1)
    numPom--;
    document.getElementById("numCycle").innerHTML = numPom;
    console.log(numPom);
}

let start = document.querySelector('#start');
let reset = document.querySelector('#reset');

reset.style.display = 'none';

var minutesSt = 25;
var secondsSt = 0;
var minutesBr = 5;
var secondsBr = 0;
let TimerStudy = null;

reset.addEventListener('click', () => {
  location.reload();
});

start.addEventListener('click', () => {
  start.style.display = 'none';
  btnUp.style.display = 'none';
  btnDown.style.display = 'none';
  reset.style.display='block';
});

start.addEventListener('click', function() {
    TimerStudy = setInterval(function() {
        document.getElementById("msgStudy").innerHTML = "Study Time";
        if (!(minutesSt == 0 && secondsSt == 0)) {
          secondsSt = secondsSt - 1;
          if (secondsSt == -1) {
            minutesSt = minutesSt - 1;
            secondsSt = 59;
          }
          document.getElementById("minsStudy").innerHTML = minutesSt + "m "
          document.getElementById("secsStudy").innerHTML = secondsSt + "s "
          minsStudy.style.display='block';
          secsStudy.style.display='block';
          msgStudy.style.display='block';

          minsBreak.style.display='none';
          secsBreak.style.display='none';
          msgBreak.style.display='none';
        }
        else if (minutesSt == 0 && secondsSt == 0) {
          secondsBr--;
            if (secondsBr == -1) {
              minutesBr--;
              secondsBr = 59;
            }
          document.getElementById("minsBreak").innerHTML = minutesBr + "m ";
          document.getElementById("secsBreak").innerHTML = secondsBr + "s ";
          document.getElementById("msgBreak").innerHTML = "Break Time";

          minsStudy.style.display='none';
          secsStudy.style.display='none';
          msgStudy.style.display='none';

          minsBreak.style.display='block';
          secsBreak.style.display='block';
          msgBreak.style.display='block';
            if (minutesBr == 0 && secondsBr == 0) {
              if (numPom >= 2) {
              minutesBr = 5;
              secondsBr = 0;
              minutesSt = 25;
              secondsSt = 0;
              numPom--;
              document.getElementById("numCycle").innerHTML = numPom;
              }
              else {
                numPom--;
                document.getElementById("numCycle").innerHTML = numPom;
                clearInterval(TimerStudy);
                minsBreak.style.display='none';
                secsBreak.style.display='none';
                msgBreak.style.display='none';
                document.getElementById("seshEnd").innerHTML = "Session Finished!";
              }
            }
        }
      }, 1000)
    });