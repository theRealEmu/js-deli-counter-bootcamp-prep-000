//1) takeANumber()
function takeANumber(numarray, name) {
  
  numarray.push(name);
  return `Welcome, ${name}. You are number ${numarray.length} in line.`;
  
}



//2) nowServing()
function nowServing(katzDeliLine) {
  
  if (katzDeliLine[0]) {
    return katzDeliLine[0]
  }
  
  return "There is nobody waiting to ba served";
  
}