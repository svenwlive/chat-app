console.info("Hiya! Your JavaScript is working!");
console.info("^^");

const username = sessionStorage.getItem("username")

if (username != null) {
  console.info("username from storage: " + username);
  console.info("username set to " + username);
} else {
  let user = prompt("Enter your username");
  sessionStorage.setItem("username", user);
  console.info("saved username to session");
  const username = sessionStorage.getItem("username");
  console.info("username set to " + username);
}

async function getMessages() {
    const url = 'https://svenwlive.github.io/api-chat/db';
    const response = await fetch(url);
    const json = await response.json();
    const element = document.querySelector('.messages');

    element.innerHTML = "";
    for (const item of json) {
      const message = item.message;
      const name = item.name;
      element.innerHTML += "<p>" + name + ": " + message + "</p>";
      window.scrollTo(0,document.body.scrollHeight);
    }
  }
  getMessages()

setInterval(getMessages, 100)
const messagebox = document.getElementById("messagebox")
const textbox = document.querySelector(".messagebox");
textbox.addEventListener("keydown", function (event) {
  // console.log(`Key pressed: ${event.key}`);
  // console.log(`User input: ${event.target.value}`);
  if (event.key === "Enter") {
    // console.info("sending message")
    fetch('https://svenwlive.github.io/api-chat/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"message":event.target.value, "name":username}),
  })
  messagebox.value = ""
  }
});
