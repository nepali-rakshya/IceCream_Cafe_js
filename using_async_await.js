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
      rej(console.log("We are closed sir"));
    }
  });
}

shop(2000);
