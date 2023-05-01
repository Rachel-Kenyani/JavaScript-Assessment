//Write a function that takes in a string and returns it when reversed
function reverseStr(str) {
    return str.split("").reverse().join("")
}
let food = "eating";
console.log(reverseStr(food))

//Write a function that takes in the following array and consoles the target if it is found else null
let num = [2,8,0,23,5,45,76];

function merge(num){
    let middle=Math.floor(num.length/2)
    if(num.length<2){
        return num
    }
    let left=merge(num.slice(0,middle));
    let right=merge(num.slice(middle));
    return(mergeSort(left,right));
}

function mergeSort(left,right){
    let newNum=[];
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            newNum.push(left.shift());
        }
        else{
            newNum.push(right.shift()) 
        }
    }
    return[...newNum,...left,...right];
}
function search(num,target){
    let leftIndex=0;
    let rightIndex=num.length-1;
    let mid=Math.floor((leftIndex+rightIndex)/2);
    while(leftIndex<=rightIndex){
        if(target==num[mid]){
            return target 
        }
        else if(target>=num[mid]){
            leftIndex=mid+1
        }
        else{
            rightIndex=mid-1 
        }
    }
    return null; 
}
let target = 23;
console.log(search(num,target));


//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for(let i=2000;i<=2023;i++){
    if(i%4==0 && i%100!=0){
        console.log(`${i} is a leap year`);
    }
    else{
        console.log(`${i} is not a leap year`);
    }
}

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for(let i=0;i<=100;i++){
    
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [1,2,3,4,5];
function multiply(arr){
    let newArray=[]
    for(let i=0;i<=arr.length-1;i++){
       newArray.push(arr[i]*4);
       return newArray;
}
}
multiply(numArray);

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
let nums = ["10","24","45","56","67"];
function numbers(nums){
    let newNums=[]
    for(let i=0;i<=nums.length-1;i++){
            newNums.push(nums[i]*1);
            return newNums;                
}
}
numbers(nums);

// function a(bb){
    let x=[1,2,3]
    let y=
    x.forEach(function(b){
         b*4
        console.log(num)
    })
    
   
// }

// console.log(a(x));