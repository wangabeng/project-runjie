function test (a, b) {
  return a + b ;
}
function sum (arr) {
  console.log(test.apply(this, arr));
} 
sum([5, 6]);