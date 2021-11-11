let codeInput = document.querySelector(".code-input"),
    codeOutput = document.querySelector(".code-output"),
    darkBtn = document.querySelector(".dark-btn");

if (window.localStorage.dark && window.localStorage.inputValue) {
  codeInput.value = window.localStorage.inputValue;
  codeInput.style.backgroundColor = "black"
  codeInput.style.color = "white"
}else {
  window.localStorage.inputValue = codeInput.value;
  window.localStorage.dark = "white"
}


function darkCHange() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    window.localStorage.dark = "black"
    codeInput.style.backgroundColor = "black"
    codeInput.style.color = "white"
  }
}


function inputChange() {
  codeOutput.innerHTML = codeInput.value;
  window.localStorage.inputValue = codeInput.value; 
}
codeInput.oninput = inputChange;
darkBtn.onclick = darkCHange;