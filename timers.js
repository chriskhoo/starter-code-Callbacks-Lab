// var timer = {
// // your code here:
// // Create Javascript selectors that target each of the timer buttons.
// var seconds = 0;
// var timerId = 0;
//
// var resetButton = document.getElementById('reset');
// var startButton = document.getElementById('start');
// var pauseButton = document.getElementById('pause');
// var timerText = document.getElementById('timer');
//
//
//
// // Create click handlers (empty, for now) for each of the timer buttons.
// resetButton.addEventListener('click', resetTime);
// startButton.addEventListener('click', startTime);
// pauseButton.addEventListener('click', stopTime);
//
//
// // Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
//
//
// // Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
// // function updateTime(){
// //   timerText.innerHTML = timer.seconds;
// // }
//
// // Inside your click handler for the start button...
// // Replace "Stop Watch" in the HTML with the content of the seconds variable. (See event handler)
//
//
// // Use setInterval() to increment the timer by 1 every second.
// function myTimer() {
//   seconds ++;
//   timerText.innerHTML = seconds;
//   // console.log(seconds);
// }
//
//
// function startTime() {
//   timerId = setInterval(myTimer, 1000);
// }
//
// // Inside your click handler for the pause button...
// // Stop -- but do not reset! -- the timer using clearInterval(). (See event handler)
// function stopTime() {
//   clearInterval(timerId);
// }
//
// // Once again, inside your click handler for the start button...
// // Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
//
// // Inside your click handler for the reset button...
// // Stop the timer using clearInterval().
// // Reset the timer.
// // Replace the time in your HTML with the original "Stop Watch" text.
// function resetTime() {
//   clearInterval(timerId);
//   seconds = 0;
//   timerText.innerHTML = "Stop Watch";
// }
// }

//version 2

var stopwatch = {
  start: document.getElementById('start'),
  reset: document.getElementById('reset'),
  pause: document.getElementById('pause'),
  timer: document.getElementById('timer'),

  seconds: 0,
  timerId: 0,


  updateTime: function() {
    this.seconds++;
    this.timer.innerHTML = "Timer elapsed: " + this.seconds;
  },

  clickStart: function() {
    this.start.addEventListener('click',function(){
      this.timer.innerHTML = "Timer elapsed: " + this.seconds;
      this.timerId = setInterval(this.updateTime.bind(this),1000);
    }.bind(this)
    // this now refers to the document object
    // this should refer to stopwatch
  );
  },

  clickPause: function(){
    this.pause.addEventListener('click',function(){
      clearInterval(this.timerId);
    }.bind(this)
    // this now refers to the document object
    // this should refer to stopwatch
  );
  },

  clickReset: function() {
    this.reset.addEventListener('click',function(){
      clearInterval(this.timerId);
      this.seconds=0;
      this.timer.innerHTML = "Stop Watch";
    }.bind(this)
    // this now refers to the document object
    // this should refer to stopwatch
  );
  },

  init: function(){
    console.log('init timer');
    this.clickStart();
    this.clickPause();
    this.clickReset();
  }

};

stopwatch.init();
