// the goal of the code is to display messages everytime the user runs the program

// I will try to build the magic 8 ball
const preDefinedResponses = ['Dont focus too much, just do it', 'you are too good to be sad',
'you are the golden nugget today','Its OK to feel this way, the most important is to get up and continue',
'You are going be how you like it one day!'];

console.log(preDefinedResponses[Math.floor(Math.random()*preDefinedResponses.length)]);