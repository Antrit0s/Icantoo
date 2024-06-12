
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
document.addEventListener('DOMContentLoaded', function() {
  const sendEmailButton = document.getElementById('sendEmailButton');
  const passwordContainer = document.querySelector('.password-container');

  sendEmailButton.addEventListener('click', function() {
      // Toggle the visibility of the password container
      if (passwordContainer.style.display === 'none' || passwordContainer.style.display === '') {
          passwordContainer.style.display = 'block';
      } else {
          passwordContainer.style.display = 'none';
      }
  });
});
