
  
  var number_html = document.getElementById("countNumber");
  var start_btn = document.getElementById("start");
  var user_input = document.getElementById("input");
  var result = document.getElementById("result");
  
  var runningNumber = 0;
  var interval;
  
  function start() {
    if (user_input.value) {
      interval = setInterval(function () {
        if (runningNumber >= 1000) {
          clearInterval(interval);
          runningNumber = 0;
          number_html.innerText = runningNumber;
          result.innerText = "You are late";
          start_btn.disabled = false;
        } else {
          runningNumber++;
          number_html.innerText = runningNumber;
        }
      }, 10);
      start_btn.disabled = true;
    } else {
      alert("Number to daaldo");
    }
  }
  function stop() {
    console.log(user_input.value);
    console.log(runningNumber);
    clearInterval(interval);
    if (user_input.value == runningNumber) {
      result.innerText = "YOU WIN ";
    } else {
      result.innerText = "YOU LOSE TRY AGAIN";
    }
    runningNumber = 0;
    number_html.innerText = 0;
    start_btn.disabled = false;
  }
  