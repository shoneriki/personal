// Age in days (without leap year and current day)

function ageInDays() {
  let birthYear = prompt("What year were you born?");
  let currentYear = new Date();
  let thisYear = currentYear.getFullYear();
  let ageInDays = (thisYear - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(`You are ${ageInDays} days old!`);
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById("flex-box-result").remove();
  window.location.reload();
}
