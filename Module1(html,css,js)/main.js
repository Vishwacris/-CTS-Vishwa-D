
console.log("Welcome to the Community Portal");


window.onload = () => {
  alert("Page fully loaded. Enjoy browsing upcoming community events!");
};


function videoReady() {
  const msgDiv = document.getElementById('videoMessage');
  msgDiv.textContent = "Video ready to play";
}


window.onbeforeunload = function (e) {
  const form = document.getElementById('registrationForm');

  if (
    form.name.value.trim() !== '' ||
    form.email.value.trim() !== '' ||
    form.eventSelect.value.trim() !== '' ||
    form.message.value.trim() !== ''
  ) {
    const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
    e.returnValue = confirmationMessage; 
    return confirmationMessage;          
  }
};


document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const output = document.getElementById('formOutput');
  output.textContent = `Thank you, ${this.name.value}! Your registration for "${this.eventSelect.value}" is received.`;
  this.reset(); 
});
