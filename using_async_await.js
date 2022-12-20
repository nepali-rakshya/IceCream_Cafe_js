let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"],
};

let is_shop_open = true;

function shop(time) {
  return new Promise((res, rej) => {
    if (is_shop_open) {
      setTimeout(res, time);
    } else {
      // rej(console.log("We are closed sir"));
      rej();
    }
  });
}

async function kitchen() {
  try {
    await shop(0000);
    console.log("Hello Welcome to our Ice-Cream Cafe");
    await shop(2000);
    console.log(`${stocks.fruits[0]} was selected`);
    await shop(0000);
    console.log("Let's start the production");
    await shop(2000);
    console.log(`Cut the fruit.`);
    await shop(1000);
    console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
    await shop(1000);
    console.log(`Start the machine`);
    await shop(2000);
    console.log(`Selecting ${stocks.holder[0]} `);
    await shop(3000);
    console.log(`Selecting ${stocks.toppings[0]} as a topping`);
    await shop(2000);
    console.log(`Please enjoy your ice-cream`);
  } catch (e) {
    console.log("We are closed." + e);
  } finally {
    console.log("It was a great day everyone!");
  }
}

kitchen();
