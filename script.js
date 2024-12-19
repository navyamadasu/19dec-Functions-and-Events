
// *****************************Coding Questions**********************************************************

// Given an array of 0's and 1's find out number of 0's


// let arr = [1, 0, 1, 0, 0, 1, 0, 0, 1];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         count++;
//     }
// }

// console.log(`Number of 0's: ${count}`);

// ------------------------------------------------------------------------------------------------------------
// Given an array find out total no. of odd and even nos.

// let arr = [11, 25, 33, 42, 125, 76, 97, 118, 239];
// let oddCount = 0;
// let evenCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// console.log(`Odd numbers: ${oddCount}`);
// console.log(`Even numbers: ${evenCount}`);

// ------------------------------------------------------------------------------------------------------------
// Given a string find out number of vowels 

// function countVowels(str) {
//     let vowels = 'aeiou'; 
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// let result = countVowels("ammu");
// console.log(`Number of vowels: ${result}`);

// ************************Interactive webpage*****************************************

document.addEventListener("DOMContentLoaded", () => {
  const coffeeType = document.getElementById("coffeeType");
  const coffeeSize = document.getElementById("coffeeSize");
  const priceDisplay = document.getElementById("price");
  const orderButton = document.getElementById("orderButton");
  const orderMessage = document.getElementById("orderMessage");

  const prices = {

    Latte: { small: 2.5, medium: 3.5, large: 4.5 },
    Cortado: { small: 2.5, medium: 3.5, large: 4.5 },
    Cappuccino: { small: 2.5, medium: 3.5, large: 4.5 },
    Macchiato: { small: 3, medium: 4, large: 5 },
    Affogato: { small: 3.5, medium: 4.5, large: 5.5 },
  };

  function updatePrice() {
    const type = coffeeType.value;
    const size = coffeeSize.value;


    console.log("Selected coffee type:", type);
    console.log("Selected coffee size:", size);

    if (!prices[type] || !prices[type][size]) {
      console.error("Invalid type or size selected!");
      priceDisplay.textContent = "Error: Invalid selection.";
      return;
    }

    const price = prices[type][size];
    priceDisplay.textContent = `Price: $${price.toFixed(2)}`;
  }

  function placeOrder() {
    const type = coffeeType.options[coffeeType.selectedIndex].text;
    const size = coffeeSize.options[coffeeSize.selectedIndex].text;
    const price = priceDisplay.textContent.replace("Price: ", "");
    orderMessage.textContent = `You ordered a ${size} ${type} for ${price}. Thank you!`;
    orderMessage.style.color = "#6b4e31";
  }

  coffeeType.addEventListener("change", updatePrice);
  coffeeSize.addEventListener("change", updatePrice);
  orderButton.addEventListener("click", placeOrder);


  updatePrice();
});
