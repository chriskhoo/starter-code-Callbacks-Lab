// version 1

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');
var timer = document.getElementById('timer');
var seconds = 0;
var timerId = 0;

start.addEventListener('click', clickStart);
pause.addEventListener('click', clickPause);
reset.addEventListener('click', clickReset);

function updateTime(){
  seconds++;
  timer.innerHTML = "Timer elapsed: " + seconds;
}

function clickStart(){
  timerId = setInterval(updateTime,1000);
  timer.innerHTML = "Timer elapsed: " + seconds;
}

function clickPause(){
  clearInterval(timerId);
}

function clickReset(){
  clearInterval(timerId);
  seconds = 0;
  timer.innerHTML = "Stop Watch";
}


// version 2

// var stopwatch = {
//   start: document.getElementById('start'),
//   reset: document.getElementById('reset'),
//   pause: document.getElementById('pause'),
//   timer: document.getElementById('timer'),
//
//   seconds: 0,
//   timerId: 0,
//
//
//   updateTime: function() {
//     this.seconds++;
//     this.timer.innerHTML = "Timer elapsed: " + this.seconds;
//   },
//
//   clickStart: function() {
//     this.start.addEventListener('click',function(){
//       this.timer.innerHTML = "Timer elapsed: " + this.seconds;
//       this.timerId = setInterval(this.updateTime.bind(this),1000);
//     }.bind(this)
//     // this now refers to the document object
//     // this should refer to stopwatch
//   );
//   },
//
//   clickPause: function(){
//     this.pause.addEventListener('click',function(){
//       clearInterval(this.timerId);
//     }.bind(this)
//     // this now refers to the document object
//     // this should refer to stopwatch
//   );
//   },
//
//   clickReset: function() {
//     this.reset.addEventListener('click',function(){
//       clearInterval(this.timerId);
//       this.seconds=0;
//       this.timer.innerHTML = "Stop Watch";
//     }.bind(this)
//     // this now refers to the document object
//     // this should refer to stopwatch
//   );
//   },
//
//   init: function(){
//     console.log('init timer');
//     this.clickStart();
//     this.clickPause();
//     this.clickReset();
//   }
//
// };
//
// stopwatch.init();
