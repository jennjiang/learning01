var user = {
  userone: "12",
  usertwo: "2"
};

if (user.userone >= 18 && user.userone <= 40) {
  console.log("adult");
} else {
  console.log("little baby");
}

if (user.usertwo == 18 || user.usertwo <= 18) {
  console.log("baby");
} else {
  console.log("adult");
}

// function Userage(age) {
//   if (age < 18) {
//     console.log("kids");
//   } else if (age >= 18 && age < 45) {
//     console.log("adult");
//   } else {
//     console.log("elder");
//   }
// }
