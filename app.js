/*Write a function FindLongestWord() that takes an array of words and returns the the longest
one back.*/

function FindLongestWord(){
    let str= document.getElementById('str').value;

    let arr = str.split(",");
    let result= arr[0];
for( let i=0; i< arr.length; i++){
    if(arr[i].length > result.length){
        result=arr[i];
    }
}    
document.getElementById('display').innerHTML=result;
}

