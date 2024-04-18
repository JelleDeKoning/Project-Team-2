const Checkbox = document.getElementById("Checkbox");
const test = document.getElementById("test");

function askNotificationPermission() {
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
    return;
  }
  Notification.requestPermission().then((permission) => {
    notificationBtn.style.display = permission === "granted" ? "none" : "block";
  });
}
let interval = null;

function timer() {
  let count = 15 * 60;
  console.log("Timer started!");
  interval = setInterval(() => {
    count--;
    console.log(`Countdown: ${count} seconds`);
  
    if (count <= 0) {
      clearInterval(interval);
      StuurMelding();
    }
  }, 1000);
  
}

function StuurMelding() {
  new Notification("Vergeet niet om je water te drinken!");
  console.log("Notification sent!");
}

test.addEventListener("click", StuurMelding);


function check() {
  if (Checkbox.checked == true) {
    timer();
  } else if (Checkbox.checked == false) {
    clearInterval(interval);
  }

}

Checkbox.addEventListener("click", check);
if (Checkbox.checked == true) {
  timer();
} else if (Checkbox.checked == false) {
  clearInterval(interval);
}
