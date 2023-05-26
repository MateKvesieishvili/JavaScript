// Problem 1
function space(){
    console.log("======================================")
}
let num = 15

function OddorEven(){
    if (num % 2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

OddorEven();

// Problem 2
space()
function getUserName(){
    let userName = prompt("შეიყვანეთ მომხმარებლის სახელი");
    return userName
}

let resultProblem2 = getUserName();
console.log(resultProblem2);

// Problem 3
space()
function chooseNumber(){
    const yourNumber = Number(prompt("შეიყვანეთ რიცხვი")); //? აქ მაქვს ასეთი შეკითხვა: როდესაც const ის ნაცვლად გამოვიყენე let კოდმა არიმუშავა და რო განვიხილოთ ეს თემა შეიძლება?
    
    if (yourNumber % 2 === 0){
        console.log("თქვენს მიერ არჩეული რიცხვი ლუწია");
    } else {
        console.log("თქვენს მიერ არჩეული რიცხვი კენტია");
    }
}

chooseNumber()

// Problem 4
space()
function evensFrom0to100(){
    for (let i=1; i <= 100; i++){
        if (i % 2 === 0 ){
            console.log(i);
        }
    }
}
evensFrom0to100()

// Problem 5
space()
function chooseNegativeNumber(){
    for(;;){
        let chooseNumberV2 = Number(prompt("აირჩიეთ უარყოფითი რიცხვი"));
        if (chooseNumberV2 > 0){
            console.log("თქვენს მიერ არჩეული რიცხვი უარყოფითი არარის")
        } else if (chooseNumberV2 < 0 )       
        break;
    }
}
chooseNegativeNumber()

// Problem 6
space()
let numbersMasive = [10,12,42,55,100,90,32,55];
let result=[];

for (const numberKey of numbersMasive) {
    if (numberKey % 5 === 0){
        console.log(numberKey)
    }
}

// !ამ პრობლემის გადაჭრა ვერ შევძელი

// Problem 7
space()
let names = ["Gio", "Luka", "Nika", "Ani", "Eka", "Nini", "Sopo"];

for (let name of names) {
  if (name !== "Nika") {
    console.log(name);
  }
}


// Problem 8
space()

// !ამ პრობლემის გადაჭრა ვერ შევძელი

// Problem 9
space()
function isAdminUser(user) {
    return user.isAdmin === true;
  }

// Problem 10

function findLargestNumber(numbers) {
    let largestNumber = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
  
    return largestNumber;
}
// Problem 11
function findSmallestNumber(numbers) {
    let smallestNumber = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i];
      }
    }
  
    return smallestNumber;
}