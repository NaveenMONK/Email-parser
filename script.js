const inputStrings = document.getElementById("input");
const clickBtn = document.getElementById("button");
const outputEmails = document.getElementById("output");
const mailCount = document.getElementById("number-of-mail");
const resetBtn = document.getElementById("reset");

inputStrings.addEventListener("input", () => {
  inputStrings.placeholder = "";
});

const emailParser = () => {
  if (inputStrings.value.length === 0) {
    inputStrings.placeholder = "Please enter a string";
  } else {
    const inputVal = inputStrings.value;
    const regex = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/gi;
    let validEmail = inputVal.match(regex);

    let emailArray = [];

    for (let i = 0; i < validEmail.length; i++) {
      if (emailArray.indexOf(validEmail[i] == -1)) {
        emailArray.push(validEmail[i]);
      }
    }
    let finalEmail = emailArray.join(" ,");
    mailCount.innerHTML = `Emails in the text is ${emailArray.length}`;
    outputEmails.textContent = finalEmail;
  }
};
clickBtn.addEventListener("click", emailParser);
reset.addEventListener("click", ()=>{
    window.location.reload();
})
