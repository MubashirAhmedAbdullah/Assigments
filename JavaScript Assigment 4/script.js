var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");

var count = 10;
var win = 0;
var loss = 0;

function tryMyLuck(userNumber) {
  // alert(userNumber);
  var randomNumber = Math.random() * 6;
  var ceil = Math.ceil(randomNumber);
  console.log(ceil);
  user_number.innerText = userNumber;
  random_number.innerText = ceil;

  // total count mein se aik minus krdo
  total.innerText = --count;
  
  if (ceil === userNumber) {
    console.log("user wins");
    result.innerText = "You won";
    info_box_result.style.backgroundColor = "Green";
    result.style.color = "White";
    // total count mein se aik minus krdo
    win_html.innerText = ++win;
  } else {
    result.innerText = "You Loss";
    info_box_result.style.backgroundColor = "red";
    result.style.color = "White";
    loss_html.innerText = ++loss;
  }

  checkResult();
}

function checkResult() {
  if (count == 0) {
    if (win >= 3) {
      msg.innerText = "Congrats! You won";
    } else {
      msg.innerText = "Sorry! You loss try again";
    }
    count = 10;
    win = 0;
    loss = 0;
    total.innerText = count;
    win_html.innerText = loss;
    loss_html.innerText = win;
  }
}





