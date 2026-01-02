// Q1 Find Missing Number

let arr = [3, 0, 1 , 5 , 2];
let n = arr.length;
let sum = (n * (n + 1)) / 2;
let arrSum = 0;
for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i]
}
console.log( sum - arrSum )

// q2 Count Even Numbers in an Array (Easy)

let arr = [1, 2, 3, 4, 6, 7];
let count = 0 ;
for (let  i = 0 ; i < arr.length ;i++ ){
    if(arr[i] % 2 == 0){
        count++
    }
}
console.log(count)

// Q3Find First Non-Repeating Character

let str = "aabbcdde";
let repeated = null;
for (let i = 0; i < str.length; i++) {
  let count = 0;
  for (j = 0; j < str.length; j++) {
    if (str[i] == str[j]) {
      count++;
    }
  }
  if (count == 1) {
    repeated = str[i];
    break;
  }
}
console.log(repeated);

// Q 4  Rotate Array by K Steps

let arr = [ 1, 2, 3, 4, 5];
let k = 2 ;

for ( let  i = 0 ; i < k ; i++){
    let last = arr[arr.length - 1];

    for(let j = arr.length-1 ; j > 0 ; j--){
        console.log(j)
        arr[j]= arr[j-1]
        // console.log(arr[j])

    }
     arr[0]=last
}
console.log(arr)

// Q5 Check Anagram

let s1 = "listen";
let s2 = "silent";
if(s1.length !== s2.length){
 console.log(false)
}
else{
    let arr1 = s1.split("").sort().join();
    let arr2 = s2.split("").sort().join();
    console.log(arr1 === arr2);
}

