console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('1.a: count from 0 to 5');
//I needed to change the condition: i <= 5.
for(let i = 0; i <= 5; i++){
  console.log(i);
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('1.b: count from 3 to 5');
//I Need to change the initialization value of i to: i = 3
//and the condition to i <= 5.
for(let i = 3; i <= 5; i++){
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('1.c: count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
//Changing initialization to 2; condition to: i<=10; and iterator to i += 2;
//I could have used an if statement to check if the iterator was even
//but i felt this was a bit cleaner
for(let i = 2; i <= 10; i += 2){
  console.log(i);
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('1.d: STRETCH: countdown from 5 to 0');
for(let i = 5; i >= 0; i--){
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('2.a: Some stars:');
for(star of stars){
  console.log(star);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('3.a: Some stars using while:');
let i = 0; //initialize iterator
while(i < stars.length){
  console.log(stars[i]);
  i++;
}
// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
i = 0; //reset iterator
console.log('3.b: count from 0 to 5');
while(i <= 5){
  console.log(i);
  i++;
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('3.c: count backwards from 10 to 5');
i = 10; // set iterator where we want to start counting
while(i >= 5){
  console.log(i);
  i--;
}
