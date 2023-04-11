//Write a function that takes in a string and returns it when reversed


function ReverseString(str) {
    return str.split("").reverse().join("")
}

let food = "eating";
console.log(ReverseString(food))
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
            return true
        }
        else if(target>=num[mid]){
            leftIndex=mid+1
        }
        else{
            rightIndex=mid-1 
        }
    }
    return false
}
let target = 23


//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

let years=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]
for(let i=0;i<=years.length-1;){
    i++
    if(num[i]%4==0){
        console.log('$num[i] is a leap year');
    }
    else{
        console.log('$num[i] is not a leap year');
    }

}
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.


//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73];
function multiply(numArray){
    let newArray=[]
    for(let i=0;i<=numArray.length;){
        i++
       newArray.push(numArray[i]*4);
       console.log(newArray);
}
}
multiply(numArray);

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
let nums = ["10","24","45","56","67"];
function numbers(nums){
    let newNums=[]
    for(let i=0;i<=numArray.length;){
            i++
            newNums.push(numArray[i]*1);
            console.log(newNums);          
        
}
}
numbers(nums);
