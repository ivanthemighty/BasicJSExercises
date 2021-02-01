// EXERCISE #1
// let array = [0,2,5,4,6,8];

// function MapToEvenNumbersWithDash(array){
//     let string = '';    
//     // for(let number of array) {
//     //     if(number%2===0) {
//     //         // string += '-' + number;
//     //         // string = string + '-'+ number ;
//     //     }else {
//     //         string+= number;
//     //     }
//     // }
//     for(let i = 0; i<array.length; i++) {
//         if(array[i]%2===0 && array[i+1] % 2 === 0) {
//             // string = string + '-'+ i ;
//             // string += array[i] + '-';
//             string += array[i] + "-";
//             // console.log(array[i]);
//             // console.log(array[i+1]);
//         }else {
//             string += array[i];
//         }
//     }
//     console.log(string);
//     //return string;
// }   

// MapToEvenNumbersWithDash(array);

// EXERCISE #2

// function getNumbers(num) {
//     let array = [];
//     for(let i = 1; i < num; i++) {
//         if(i%3===0 && i%7===0) {
//             array.push(i);
//         }else {
//             // console.log('NOTHING');
//         }
//     }
//     console.log(array);
//     // return array;
// }
// let number = 500;
// getNumbers(number);

// EXERCISE #3
// COINS 50 20 10 5 1 

// let input = parseInt(prompt('Insert Coin'));
// let input = 376;

// function changeCalculator(amount) {
//     let array = [];
//     let newTotal = 0;
//     if(amount%50 !=0) {
//         let reminder = 0;
//         reminder = parseInt(amount/50);
//         // console.log(reminder);
//         newTotal = amount - (reminder*50);
//         // console.log(newTotal);
//         array.push(reminder + "x50 Coins");
//     }
//     if(newTotal%20 !=0) {
//         let reminder = 0;
//         reminder = parseInt(newTotal/20);
//         // console.log(reminder);
//         newTotal = newTotal - (reminder*20);
//         // console.log(newTotal);
//         array.push(reminder + "x20 Coins")
//     }
//     if(newTotal%20 !=0) {
//         let reminder = 0;
//         reminder = parseInt(newTotal/10);
//         // console.log(reminder);
//         newTotal = newTotal - (reminder*10);
//         // console.log(newTotal);
//         array.push(reminder + "x10 Coins")
//     }
//     if(newTotal%20 !=0) {
//         let reminder = 0;
//         reminder = parseInt(newTotal/5);
//         // console.log(reminder);
//         newTotal = newTotal - (reminder*5);
//         // console.log(newTotal);
//         array.push(reminder + "x5 Coins")
//     }
//     if(newTotal%20 !=0) {
//         let reminder = 0;
//         reminder = parseInt(newTotal/1);
//         // console.log(reminder);
//         newTotal = newTotal - (reminder*1);
//         // console.log(newTotal);
//         array.push(reminder + "x1 Coins")
//     }
//     console.log(array);
// }

// changeCalculator(input);