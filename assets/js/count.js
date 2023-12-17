(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Specify the date and time for the event (e.g., birthday)
  const eventDate = new Date("2023-11-03T13:00:00"); // Use ISO 8601 format (YYYY-MM-DDTHH:MM:SS)

  const x = setInterval(function () {
    const now = new Date().getTime(),
      distance = eventDate - now;

    if (distance < 0) {
      document.getElementById("headline").innerText = "The event has started!";
      document.getElementById("countdown").style.display = "none";
    } else {
      document.getElementById("days").innerText = Math.floor(distance / day);
      document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      );
    }
  }, 1000); // Update every 1 second
})();
