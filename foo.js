var rick = ["We are", "no", "strangers", "to", "love", "You", "know", "the", "rules", "and", "so", "do", "I", "A", "full", "commitments", "what", "Im", "thinking"];

function roll() {
  for (var i = 0; i < (rick.length - 1); i++)
  alert(rick[i]);
}

var youSure = prompt("Are you sure?");
if (youSure.toLowerCase === 'yes', 'y') {
  roll();
}
else {
  alert("Too bad.");
}
