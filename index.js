//1) takeANumber()
function takeANumber(numArray, name) {
  
  numarray.push(name);
  return `Welcome, ${name}. You are number ${numArray.length} in line.`;
  
}



//2) nowServing()
function nowServing(katzDeliLine) {
  
  if (katzDeliLine[0]) {
    let first = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
  
  return "There is nobody waiting to be served!";
  
}


//9 removeFirstKitten()
function removeFirstKitten() {
  
  return kittens.slice(1, kittens.length);
  
}

//3) currentLine()
function currentLine(numArray) {
  
  var duplicateArray = numArray.slice();
  var string = "The line is currently: ";
  var index = 0;
  
  while ( duplicateArray[0] ) {
    
    string += `${index} ${numArray[index]`};
    string += num
  }
  
  if (numArray[0]) {
    
    var string = JSON.stringify(numArray);
    return "The line is currently " + string;
    
  } 
  
  return "The line is curently empty."
  
  
}