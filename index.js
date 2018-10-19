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
  var index = 1;
  
  //If theres something in the array
  if (numArray[0]) {
    
    //gehe solange in die Schleife wie der erste Eintrag besetzt ist
    while ( duplicateArray[0] ) {
      
      string += `${index}. ${numArray[index-1]}`;
      
      //Falls es noch einen nächsten Eintrag gibt, häng ein komma und Leerzeichen an
      if (numArray[index]) {
        
        string += ", ";
        
      }
      
      //Jetzt lösche den ersten Eintrag
      duplicateArray.shift();
      index += 1;
      
    }
    
    return string;
  }
  
  //If teh array doesn't exist...
  return "The line is curently empty."
  
}