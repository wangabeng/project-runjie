function addP (str) {
  var arr = str.split('\n');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = `<p>${arr[i]}</p>`;
  }
  return arr.join('');
}

var sum = addP('sdfsfsd\nsdfsdds\b');
console.log(sum);