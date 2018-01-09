var html, body, scrollToTopButton;
window.onload = function() {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("scrollToTop");
};

function scrollToTop(totalTime, easingPower) {
  var timeInterval = 1; //in ms
  var scrollTop = Math.round(body.scrollTop || html.scrollTop);
  var timeLeft = totalTime;
  var scrollByPixel = setInterval(function() {
    var percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      var newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower));
      body.scrollTop = newScrollTop;
      html.scrollTop = newScrollTop;
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
    }
  }, timeInterval);
}

function easeInOut(t, power) {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}