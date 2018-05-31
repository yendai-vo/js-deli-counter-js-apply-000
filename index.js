var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var i;
    var lineString = "The line is currently: ";
    for (i=0; i < katzDeliLine.length; i++) {
      lineString = `${lineString}${(i+1)}. ${katzDeliLine[i]}, `;
    }
<<<<<<< HEAD
    lineString = lineString.substring(0, lineString.length -2);
=======
    lineString = lineString.slice(0, lineString.length -2);
>>>>>>> e863fb5b0bcb24261e9702f6da3d26b4ea04a2bd
    return lineString;
  }
}