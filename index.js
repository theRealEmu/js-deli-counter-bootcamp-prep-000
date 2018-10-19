//1) takeANumber()
function takeANumber(numarray, name) {
  
  numarray.push(name);
  return `Welcome, ${name}. You are number ${numarray.length} in line.`;
  
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
function currentLine() {
  
}