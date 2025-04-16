let interval;      // Global variable to store interval ID

document.getElementById("startBtn").addEventListener("click", startTimer);   // Button click pe function call

function startTimer() {
  clearInterval(interval);   // Pehle se koi timer chal raha ho toh usko stop karo

  const input = document.getElementById("timeInput").value;   // User input le rahe hain
  let timeLeft = parseInt(input);                             // String ko number mein convert kiya

  const display = document.getElementById("timerDisplay");

  interval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(interval);                 // Jab time khatam ho jaye toh timer band karo
      display.textContent = "Time's up!";
    } else {
      display.textContent = `Time left: ${timeLeft}s`;   // Time show karte jao
      timeLeft--;                                        // Har second mein 1 kam
    }
  }, 1000);   // Har 1000ms = 1 second mein chalega
}
