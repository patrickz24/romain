// const convertToRomanNumber = (romanNumber) => {
//   let value = null;
//   let modulo =
//   switch (romanNumber) {
//     case "I":
//       value = 1;
//       break;
//     case "V":
//       value = 5;
//       break;
//     case "X":
//       value = 10;
//   }
//   return value;
// };

const convertToRomanNumber = (value) => {
  let romanNumber = [];
  if (value >= 10) {
    for (i = 0; i < value / 10; i++) {
      romanNumber.push("X");
    }
  } else {
    
    for (i = 0; i < value; i++) {
      romanNumber.push("I");
    }
  }

  return romanNumber.join("").toString();
};

module.exports = convertToRomanNumber;
