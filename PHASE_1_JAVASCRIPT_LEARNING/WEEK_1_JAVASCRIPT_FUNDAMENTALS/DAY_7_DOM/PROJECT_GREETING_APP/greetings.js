function greetUser() {
  const name = document.getElementById("UserName").value.trim();
  const messageElement = document.getElementById("Message");

  if (name !== "") {
    const now = new Date();
    const hours = now.getHours();
    const time = now.toLocaleTimeString();
    const date = now.toDateString();

    let greeting;

    if (hours < 12) {
      greeting = "Good Morning";
    } else if (hours < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    messageElement.innerText = `${greeting}, ${name}!\nCurrent Time : ${time}\nDate : ${date}`;
    messageElement.style.color = "green";
  } else {
    messageElement.innerText = "Please enter your name.";
    messageElement.style.color = "red";
  }
}
