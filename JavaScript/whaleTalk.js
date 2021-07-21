const input = 'Hi, Human';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let letter = 0; letter < input.length; letter ++){
  for (let vowel = 0; vowel < vowels.length; vowel++){
    if (input[letter] === vowels[vowel]){
      if(input[letter] === 'e'){
        resultArray.push('ee')
      }
      else if (input[letter] === 'u'){
        resultArray.push('uu')
      }
      else {
        resultArray.push(input[letter]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());