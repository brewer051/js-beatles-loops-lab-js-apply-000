function theBeatlesPlay(musicians, instruments) {
  var newArr = []; 
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(arr) {
var result= []; 
var i = 0; 
while(i < arr.length) {
result.push(arr[i] + '!!!')
i++; 
  }
  return result; 
}
const facts = [
  "He was the last Beatle to learn to drive"
  ]