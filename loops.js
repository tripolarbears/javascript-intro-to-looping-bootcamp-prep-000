function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1) { array.push("I am 1 strange loop.")}
  else {array.push("I am " + `${i}` + " strange loops.")}
}
return array;
}


function whileLoop(n) {
  let countdown = n;
  while (n > 0) {
  console.log(--n);
  }
  return "done"
}

function doWhileLoop(num) {
 
function incrementVariable() {
  num = num + 1;
}
 
do {
  console.log("I run once regardless.");
} while (incrementVariable() < num);
}