// THIS IS DONE USING CALLBACK AND NOW YOU CAN EASILY SEE THE
// CALLBACK HELL

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "sprinkles"],
};

let order = function (call_Production) {
  alert(
    "Welcome to our Ice-Cream Cafe : \nPlease select the fruits you want in your ice-cream from below : "
  );
  console.log("The available fruits are: \n");
  let ice_fruits = stocks.fruits;
  console.log(ice_fruits.toString());
  console.log(" ");

  let selectFruit = parseInt(
    prompt("Which fruit do you want, write it's number: ")
  );
  let selectFruit_order = stocks.fruits[selectFruit - 1];

  setTimeout(() => {
    console.log(selectFruit_order + " was selected");
    console.log("");
    call_Production();
  }, 2000);
};

let production = function () {
  setTimeout(() => {
    // First
    console.log("Proudction has started");

    setTimeout(() => {
      // Second
      console.log("The fruit has been choped");

      setTimeout(() => {
        // Third
        console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}`);

        setTimeout(() => {
          // Fourth
          console.log("Start the machine");
          console.log("");
          let holder_arr = stocks.holder;
          console.log(`The holders are ${holder_arr.toString()}`);

          setTimeout(() => {
            // Fifth
            let holder = parseInt(
              prompt("Please select the holder, in number from below: ")
            );
            let select_holder = stocks.holder[holder - 1];
            console.log(`You have selected ${select_holder} `);
            console.log("");
            let toppings_arr = stocks.toppings;
            console.log(`The toppings are ${toppings_arr.toString()}`);

            setTimeout(() => {
              // Sixth
              let toppings = parseInt(
                prompt("Please select the toppings, in number from below: ")
              );
              let select_toppings = stocks.toppings[toppings - 1];
              console.log(`You have selected ${select_toppings} `);
              console.log("");

              setTimeout(() => {
                // Seventh
                alert("Thank you for visiting our cafe! ;P ");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(production);
