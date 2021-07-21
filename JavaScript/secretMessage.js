let secretMessage = ['Learning', 'is', 'not', 'about', 
'what', 'you', 'get', 'easily', 'the', 'first', 
'time,', 'it', 'is', 'about', 'what', 'you', 'can', 
'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length); //prints 24
secretMessage.pop(); //remove last item
console.log(secretMessage.length); //prints 23

secretMessage.push('to', 'Program');
// console.log(secretMessage);

console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right'; // replace index of 7 with word str(RIGHT)
// console.log(secretMessage); print current result
console.log(secretMessage.shift()); //shows the removed str(LEARNING)
secretMessage.unshift('Programming');

console.log(secretMessage.indexOf('get'));
console.log(secretMessage.indexOf('time,'));
secretMessage.splice(6, 5, 'know,')
console.log(secretMessage.join(' ')) //show current result

