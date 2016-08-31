var youSure = prompt("Are you sure?");
if ('yes', 'y') {
  roll();
}
else {
  alert("Too bad.");
}

var rickA = ["We're", "no", "strangers", "to", "love", "You", "know", "the", "rules", "and", "so", "do", "I"];
var rickB = ["A", "full", "commitment's", "what", "I'm", "thinking", "of", "You", "wouldn't", "get", "this", "from", "any", "other", "guy"];
var rickC = ["I", "just", "want", "to", "tell", "you", "how", "I'm", "feeling", "Gotta", "make", "you", "understand"];
var rickD = ["Never", "gonna", "give", "you", "up", "never", "gonna", "let", "you", "down", "Never", "gonna", "run", "around", "and", "desert", "you"];
var rickE = ["Never", "gonna", "make", "you", "cry", "never", "gonna", "say", "goodbye", "Never", "gonna", "tell", "a", "lie", "and", "hurt", "you"];
var rickF = ["We've", "known", "each", "other", "for", "so", "long", "Your", "heart's", "been", "aching", "but", "you're", "too", "shy", "to", "say", "it"];
var rickG = ["Inside", "we", "both", "know", "what's", "been", "going", "on", "We", "know", "the", "game", "and", "we're", "gonna", "play", "it"];
var rickH = ["And", "if", "you", "ask", "me", "how", "I'm", "feeling", "Don't", "tell", "me", "you're", "too", "blind", "to", "see"];

function rick() {
  return rickA + rickB + rickC + rickD + rickE + rickF + rickG + rickH + rickD + rickE + rickD + rickE + rickF + rickG + rickC + rickD + rickE;
}

function roll() {
  for (var i = 0; i < (rick.length - 1); i++)
  alert(rick[i]);
}
