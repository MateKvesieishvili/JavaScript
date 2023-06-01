 // *Problem 1

 var number = 10;

 if (number % 2 === 0) {
    console.log("რიცხვი ლუწია");
 } else if (number % 2 === 1) {
    console.log("რიცხვი კენტია");
 }

 // *Problem 2

 var name = prompt("Type your name");
 console.log("Name:", name);

// *Problem 3

var numberPrompt = prompt("Type Number");

if(numberPrompt % 2 === 0){
   console.log("Number you chose is EVEN");
} else if( numberPrompt % 2 === 1 ){
   console.log("Number you chose is ODD");
}

// *Problem 4

var userPreference = prompt("შეიყვანეთ თქვენი ხილი:"); // მომხმარებელიდან ხილის შესაყვანი

switch (userPreference) {
  case "ვაშლი":
    console.log("ვაშლი კარგი არჩევანია !");
    break;
  case "მსხლი":
    console.log("მსხალი სჯობს !");
    break;
  case "ყურძენი":
    console.log("ყურძენი საუკეთესოა !");
    break;
  default:
    console.log("მოცემული მნიშვნელობა არ არის ჩვენს სიაში.");
    break;
}

// *Problem 5

for (var i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
     console.log(i);
   }
}
// ? ამის გაკეთებაზე მეგობარი დამეხმარა და while ის გამოყენებით ვცადე გაკეთება, რომ განვიხილოთ შეიძლება?

