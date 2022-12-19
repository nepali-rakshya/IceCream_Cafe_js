let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"],
};

let is_shop_open = true;

let shop = (time, work) => {
  return new Promise((res, rej) => {
    if (is_shop_open === true) {
      setTimeout(() => {
        res(work());
      }, time);
    } else {
      rej("Sorry sir");
    }
  });
};

shop(4000, () => console.log(`${stocks.fruits[0]} was selected`));
