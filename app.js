var scores = [];
var runs = [];
var floorRun = [];
var Wickets = [];
function bat() {
  run = Math.random();
  var uptosixRun = run * 7;
  floorRun = Math.floor(uptosixRun);
  var runHtml = (document.getElementById("run").innerHTML = floorRun);
  scores.push(floorRun);
  // sum of runs through array
  var sum = 0;
  for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
    document.getElementById("score").innerHTML = sum;
  }
  // counts of balls

  for (var i = 1; i <= scores.length; i++) {
    document.getElementById("Balls").innerHTML = i;
  }
  if (scores.length > 120) {
    alert("not exced than 120 balls");
    return;
  }
  // counts of wickets
  if (floorRun === 0) {
    Wickets++;
    document.getElementById("Wicket").innerHTML = Wickets;
    if (Wickets === 10) {
    alert("All out!");
    }
    return;
  }
}
