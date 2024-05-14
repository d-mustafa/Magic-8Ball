// Magic 8 Ball

let eightBall = document.getElementById("8-ball");
let inputEl = document.getElementById("user-question");

eightBall.addEventListener("click", giveResponse);

function giveResponse() {
  // Input
  let inputValue = inputEl.value;
  inputValue = inputValue.toLowerCase();

  // Process
  let resposeEl = document.getElementById("output");
  let rand = Math.floor(Math.random() * 5 + 1);

  if (inputValue == `is this legitimate?` || inputValue == `is this legit?`) {
    resposeEl.innerHTML = "You dare question the accuracy of thy EIGHT BALL";
  } else if (inputValue == `my computer is broken`) {
    resposeEl.innerHTML = "Have you tried turning it off and back on again?";
  } else if (inputValue == `do you ever feel like a plastic bag?`) {
    resposeEl.innerHTML = "drifting through the wind, wanting to try again";
  } else if (inputValue == `whats one plus one` || inputValue == `whats 1 + 1`) {
    resposeEl.innerHTML = "I dunno. This is an 8-ball, not a calculator!";
  } else if (inputValue == ``) {
    resposeEl.innerHTML = "Please ask a question...";
  } else if (rand == 1) {
    resposeEl.innerHTML = "Without a doubt!";
  } else if (rand == 2) {
    resposeEl.innerHTML = "Im not too sure about that...";
  } else if (rand == 3) {
    resposeEl.innerHTML = "Don't ask me! Why would I know?";
  } else if (rand == 4) {
    resposeEl.innerHTML =
      "Yes! I mean no! Wait... uhh, im not sure... go ask an 8-ball or something.";
  } else if (rand == 5) {
    resposeEl.innerHTML = "The answer you seek is behind you.";
  }

  // Output
}
