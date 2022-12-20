// function order(name, number) {
//   return new Promise((res, rej) => {
//     if (true) {
//       res(console.log(`My name is ${name} and number is ${number}`));
//     } else {
//       rej(`We are done ${name}`);
//     }
//   });
// }

// let order = new Promise((res, rej) => {
//   if (true) {
//     res(console.log(`My name is  and number is `));
//   } else {
//     rej(`We are done`);
//   }
// });

// let order = function name(call) {
//   return new Promise((res, rej) => {
//     if (true) {
//       res(console.log(`My name is  and number is ${call}`));
//     } else {
//       rej(`We are done`);
//     }
//   });
// };

// order("Rakshya", 5).catch((error) => {
//   console.log(new Error(`It's over. ${error}`));
// });

async function object(work, time) {
  return new Promise((res) => {
    setTimeout(res(work()), time);
  });
}

async function orderAgain() {
  try {
    await object(() => console.log("Alright"), 5000);
  } catch (e) {
    console.log("We have caught it,", e);
  } finally {
    console.log("Not again");
  }
}
orderAgain("nepali");
