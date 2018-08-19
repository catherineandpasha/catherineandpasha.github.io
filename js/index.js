/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json');

  /*** Countdown Timer */
  $("#days")
  .countdown(1535308800000, function (event) {
      $(this).html(event.strftime('%D <em>days</em>'))
  });

  $("#hours")
  .countdown(1535308800000, function (event) {
      $(this).html(event.strftime('%H <em>hours</em>'))
  });

  $("#minutes")
  .countdown(1535308800000, function (event) {
      $(this).html(event.strftime('%M <em>minutes</em>'))
  });

  $("#seconds")
  .countdown(1535308800000, function (event) {
      $(this).html(event.strftime('%S <em>seconds</em>'))
  });

