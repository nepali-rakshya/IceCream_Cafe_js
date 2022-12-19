let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"],
};

// function abc() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(console.log("I am happy"));
//     }, 4000);
//   });
// }

// async function order() {
//   try {
//     await abc();
//   } catch (error) {
//     console.log("This function doesn't exist", error);
//   } finally {
//     console.log("We are done");
//   }
// }

// order();

let timer = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("We will be going on");
      res(console.log("I am first"));
      //   console.log("It's gonna be confusing");
    }, 5000);
  });
};

async function timerFlow(call_timer) {
  console.log("I am first you know");
  await timer();
  console.log("Can I?");
  console.log("Can You?");
  call_timer();
  console.log("Can We?");
}

timerFlow(timer);
