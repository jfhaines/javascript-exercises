const ftoc = function(f) {
  let c = ((f - 32) * 5/9);
  if (c === Math.floor(c)) return c;
  else return parseFloat(c.toFixed(1));
};

const ctof = function(c) {
  let f = ((c * 9/5) + 32);
  if (f === Math.floor(f)) return f;
  else return parseFloat(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


/*

create celcius variable and set it to equal the conversion formula with input number, round to 1 decimal place

*/