function isCatFed(cat) {
  if (cat.isFed == true) {
    return true;
  }
}

var cat = {
  isFed: true
};

console.log(isCatFed(cat));
