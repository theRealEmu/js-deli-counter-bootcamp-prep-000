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



//3) currentLine()
function currentLine(numArray) {
  
  var duplicateArray = numArray.slice();
  var string = "The line is currently: ";
  var index = 0;
  
  if (numArray[0]) {
    while ( duplicateArray[0] ) {
      
      string += `${index}. ${numArray[index]}, `;
      duplicateArray.shift();
      index += 1;
      
    }
    
    return string;
  }
  
  return "The line is curently empty."
  
}