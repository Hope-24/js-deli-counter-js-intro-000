/*var deliLine = ['Melly', 'Namsu', 'Jiyeon'];
var array = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`;
  }
  else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return `The line is currently empty.`;
} else
var array = [];
for (let i = 0; i < katzDeliLine.length; i++) {
  array.push(`${i+1}. ${line[i]}`);
}
  return "The line is currently:" + array;
}*/

//current line as a string
/*var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
} */

function takeANumber(line, name) {
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}
/* We are making sure by writing line.push(name) that whoever's the
new person in line will for sure be placed at the end of the line array,
so this new person in line, their placement within this code has been
at the end of the line array. Then when we write the return code, the
new new person's name will be called. For ex. If Emily gets in line, she
becomes the last person in line and we show that by .push. The reason
we need to know Emily's or new person's position in line is because when
we use line.length it would work accurately since it would give us the
length of the array aka the last person's place in line.*/


/*function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}*/

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return (`There is nobody waiting to be served!`)
  }
  return (`Currently serving ${katzDeliLine.shift()}.`)
}
/* shift will remove a person from the beginning of the array and return that
first person to you. So this returns the first person from the array of line.
If you then would look at the array of line again, the first person of the
line will be gone as the prompt wanted.*/
function currentLine(array) {
  if (array.length === 0) {
    return (`The line is currently empty.`)
  } else {
    var line = []
    for (let i = 0; i < array.length; i++) {
      line.push(` ${i + 1}. ${array[i]}`);
    }
    return (`The line is currently:${line}`);
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  /* Keep in mind, join() is a a shorthand for looping and building
   * into a String. */
  return `The line is currently: ${numbersAndNames.join(', ')}`
};

/* This last problem, it says that if no one's in the line or that the
length of the array called line is empty then to return a particular statement.
Then after that it creates a for loop with the condition that i will increment
however the condition is that it always stays less than the length of the line.
Then it pushes in the beginning of the new defined array the number in line of
a person and their name from the line array. The reason there's a +1 is because
i starts from 0, and in real life there's no number 0 in line. We would need to
start at one, so therefore +1 would help the line to start at 1. and then
for the second part which is names, it would start from the 0 array index.
*/
