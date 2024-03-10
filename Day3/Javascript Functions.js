// print odd numberss in an array
console.log ("IIFE for odd numbers"); 
(function oddnumbers (arr){
    for(let i in arr)
    {
        if(arr[i]%2!=0)
        console.log(arr[i]);
    }
})([1,2,3,4,5,6,7,8,9]);
// print odd numberss in an array
console.log (" Anonymous Function for odd numbers");
let odd = function (arr){
    for(let i in arr)
    {
        if(arr[i]%2!=0)
        console.log(arr[i]);
    }
};
odd([1,2,3,4,5,6,7,8,9]);
// print odd numberss in an array
console.log (" Arrow Function for odd numbers");
let oddnumber = (arr) => {
    for(let i in arr)
    {
        if(arr[i]%2!=0)
        console.log(arr[i]);
    }
}; oddnumber([1,2,3,4,5,6,7,8,9])

//Convert all the strings to title caps in a string array//
console.log ("IIFE to Convert all the strings to title caps"); 
(function alpha (arr){
    for(let i in arr)
    {
        arr[i]=arr[i].toUpperCase();
        console.log(arr[i]);
    }
})(["vichu","viswa"]);
console.log ("Anonymous Function for strings to title caps");
let caps = function (arr){
    for(let i in arr)
    {
        arr[i]=arr[i].toUpperCase();
        console.log(arr[i]);
    }
};
caps(["viswa","prasath"]);
console.log (" Arrow Function for strings to title caps");
let Cap = (arr) => {
    for(let i in arr)
    {
        arr[i]=arr[i].toUpperCase();
        console.log(arr[i]);
    }
}; Cap(["viswa","vichu","prasath"]);

//Sum of all numbers in an array
console.log ("IIFE Sum of all numbers in an array"); 
(function add (arr){
    let sum=0;
    for(let i in arr)
    {
        sum=sum+arr[i];
    }
    console.log (sum);
})([1,2,3,4,5,6,7,8,9]);
console.log ("Anonymous Function Sum of all numbers in an array");
let adding = function (arr){
    let sum=0;
    for(let i in arr)
    {
        sum=sum+arr[i]; 
    }
    console.log (sum);
};
adding([1,2,3,4,5,6,7,8,9]);
console.log (" Arrow Function for Sum of all numbers in an array");
let adds = (arr) => {
    let sum=0;
    for(let i in arr)
    {
        sum=sum+arr[i];
    }
    console.log (sum);
}; adds([1,2,3,4,5,6,7,8,9]);
//Return all the prime numbers in an array
console.log ("IIFE for prime numbers in an array"); 
(function(arr) {
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log (" Anonymous Function for prime numbers in an array");
let primenum =function(arr){
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
};
primenum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log (" Arrow Function for prime numbers in an array");
let prime =(arr)=>{
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
};
prime([1,2,3,4,5,6,7,8,9,10]);
// return all the palindroms in an array
console.log ("IIFE for  all the palindroms in an array");
let palindromes = (function(arr) {
    function isPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    return arr.filter(item => isPalindrome(item));
})(["mam","sir","malayalam"]);

console.log("Palindromes:", palindromes);
console.log ("anonymous function for all the palindroms in an array");
let palindrom =function(arr){
    function isPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    return arr.filter(item => isPalindrome(item));
};

console.log("Palindromes:", palindromes);
;
palindrom(["mam","sir","malayalam"]);
console.log ("arrow function for all the palindroms in an array");
let palin =(arr)=>{
    function isPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    return arr.filter(item => isPalindrome(item));
};

console.log("Palindromes:", palin(["level","other","dad","mom"]));
// return medium of two sorted arrays of the same size
console.log ("Anonymous function for medium of two sorted arrays of the same size");
(function(a,b) {
    function median (){
    let c = [...a, ...b].sort((a, b) => a - b);

    let length = c.length;
    let middle = Math.floor(length / 2);

    if (length % 2 === 0)
    {
        console.log((c[middle - 1] + c[middle]) / 2);
    } 
    else 
    {
        console.log([middle]);
    }
}
median();
    })([2,3,4],[5,6,7])
    console.log ("Arrow function for medium of two sorted arrays of the same size");
let med =(a,b) => {
    let c = [...a, ...b].sort((a, b) => a - b);

    let length = c.length;
    let middle = Math.floor(length / 2);

    if (length % 2 === 0)
    {
        console.log((c[middle - 1] + c[middle]) / 2);
    } 
    else 
    {
        console.log([middle]);
    }
} 
med([2,3,4],[5,6,7]);
console.log("IIFE for for removing duplicates in an array");
(function (arr){
    let a=[...new Set(arr)];
    console.log(a);
})([1,2,3,4,4,5,6]);

console.log("anonymous functions for removing duplicates in an array");
let dup = function (arr){
    let a=[...new Set(arr)];
    console.log(a);

};
dup([1,2,3,4,4,5,6]);
// rotate an array by k times
console.log ("anonymous functions to rotate an array by k times");
(function (arr,k){{
    let rotate =[...arr.slice(k), ...arr.slice(0,k)];
    console.log(rotate);
};
})([1,2,3,4,5],2);
console.log ("anonymous functions to rotate an array by k times");
let rotater=function(arr,k){
    let rotate =[...arr.slice(k), ...arr.slice(0,k)];
    console.log(rotate);
};
rotater([1,2,3,4,5],3);