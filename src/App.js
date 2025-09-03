import React from 'react';

function NumbersList() {
  let n = 153;
  let o = n;
  let c = String(n).length
  let d=0

  for (let  i = 0; i < c; i++) {
    let a = n % 10;
    d += a**c;
    n = Math.floor(n / 10);

  }

  if (d == o) {
    return "Armstrong Number";
  }
  else {
    return "Not an Armstrong Number";
  }

 
}

export default NumbersList;