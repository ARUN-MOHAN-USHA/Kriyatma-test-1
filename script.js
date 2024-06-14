// 1) Eliminate duplicates in an Array.
// a) Suppose you have an Array [3,4,9,3,8,0,4,9].
// b) Write a function which will receive an array as param , that will remove all
// duplicates and return an array with unique items.
// c) Here, the output should be [3,4,9,8,0].

// Ans

let arr1 = [3,4,9,3,8,0,4,9];

function removeDuplicate(arr1){
    let uniqueItems = [];
    for (let item of arr1){
        if(!uniqueItems.includes(item)){;
        uniqueItems.push(item);
    }
    
}
return uniqueItems;
}
 let result1 = removeDuplicate(arr1);
 console.log(result1);


 //
//  2) Find the largest and smallest number in an unsorted integer array
// a) Suppose you have an Array [3,4,9,3,8,0,4,9].
// b) Write a function which will receive an array as param , that will return the highest and
// smallest number as an array.
// c) Here, the output should be [9, 0].

// Ans


function findmin(arr){
    let smallest = arr[0];
    let largest = arr[0];

    for(let i = 1; i<arr.length; i++){
        if(arr[i]> largest){
            largest=arr[i];
        }
    }
    return[largest,smallest];
}
 let arr = [3,4,9,3,8,0,4,9];
 let result= findmin(arr);
 console.log(result);

 //

//  3) A given string be reversed using recursion
// a) Suppose you have a string “KRIYATMA”
// b) Write a function that will receive a string as param, that will reverse the string and
// return it.

// Ans

const originalString = "KRIYATMA";

function reverseString(s){
    if(s.length <=1){
        return s;
    }else{
        return reverseString(s.substring(1))+ s.charAt(0);
    }
}

const reversedString = reverseString(originalString);
console.log("original string", originalString);
console.log("reversed string", reversedString);

//

// 4) Write a function that finds the longest word in a sentence.
// a) Suppose you have a string ‘The quick brown fox jumps over the lazy
// dog’.
// b) Write a function that will return the longest word .

//Ans


const sentence = "The quick brown fox jumps over the lazy dog";

function findlongestword(sentence){
    const words = sentence.split(" ");
    let longestword = "";
    let maxlength = 0;
    for(let i = 0; i< words.length; i++){
        const word = words[i].replace(/[^\w\s]/gi,"")
        if (word.length >maxlength){
            longestword = word;
            maxlength = word.length
        }
    }
    return longestword;
}
const longestword = findlongestword(sentence);
console.log("longest word:", longestword);


//

// 5) Suggest any improvements in an application that you are using daily.


// Ans

// integrate chatgpt in react



