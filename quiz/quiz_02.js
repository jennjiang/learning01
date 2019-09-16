function farenheitToCelsius(faren) {
  return (((faren - 32) * 5) / 9).toFixed(1);
}

function printCurrent(temp, degree) {
  var deg = degree || "C";
  console.log(`${temp} º${deg}`);
}

printCurrent(farenheitToCelsius(61), "C");
// should print out 16.1 ºC
printCurrent(farenheitToCelsius(104));
// should print out 40.0 ºC
