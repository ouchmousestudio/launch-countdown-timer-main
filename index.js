var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

var count = setInterval(function() {

  var currentDate = new Date().getTime();

  var distance = countDownDate - currentDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dayCount").innerHTML = days;
  document.getElementById("hourCount").innerHTML = hours;
  document.getElementById("minCount").innerHTML = minutes;
  document.getElementById("secCount").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(count);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
