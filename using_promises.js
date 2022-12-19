let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"],
};

let is_shop_open = true;

let shop = (time, work) => {
  return new Promise((res, rej) => {
    if (is_shop_open !== true) {
      setTimeout(() => {
        res(work());
      }, time);
    } else {
      rej("Sorry sir");
    }
  });
};

shop(4000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return shop(0000, () => console.log("Let's start the production"));
  })
  .then(() => {
    return shop(2000, () => console.log(`Cut the fruit.`));
  })
  .then(() => {
    return shop(1000, () =>
      console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]}`)
    );
  })
  .then(() => {
    return shop(1000, () => console.log(`Start the machine`));
  })
  .then(() => {
    return shop(2000, () => console.log(`Selecting ${stocks.holder[0]} `));
  })
  .then(() => {
    return shop(3000, () =>
      console.log(`Selecting ${stocks.toppings[0]} as a topping`)
    );
  })

  .then(() => {
    return shop(2000, () => console.log(`Please enjoy your ice-cream`));
  })
  .catch((value) => {
    console.log(value + ", We are closed.");
  })
  .finally(() => {
    console.log("It was a great day everyone!");
  });
