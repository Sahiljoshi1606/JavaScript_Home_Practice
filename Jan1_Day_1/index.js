// Q1 Reverse a String
// Input: "hello"
// Output: "olleh"

let input = "hello"
let Reverse = ""
for(let i = input.length - 1; i >= 0  ; i-- ){
Reverse += input[i]
}
console.log(Reverse);

//Q2 Find the Largest Number in an Array

let arr = [3, 7, 2, 9, 4];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

//Q3 Check Palindrome
let str = "madam";
let isPalidrome = true ;
for (let i = 0  ; i < str.length/2 ; i++){
    if(str[i]!=str[str.length - 1-i]){
        isPalidrome = false;
        break;
    }
}
console.log(isPalidrome)

// Q4 Count Vowels in a String

let str = "javascript";
let count = 0;
let vowel = "aeiou";
for (i = 0; i < str.length; i++) {
  for (j = 0; j < vowel.length; j++) {
    if (str[i] === vowel[j]) {
      count++;
    }
  }
}
console.log(count);

// Q5 Find Second Largest Number (No Sort)


let arr = [10, 5, 20, 8];
let FirstHighest  = 0 ;
let SecoundHighest = 0 ;
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]>FirstHighest){
        SecoundHighest =  FirstHighest
        FirstHighest = arr[i]
    }
}
console.log(SecoundHighest)