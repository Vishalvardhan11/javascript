const score = 400

console.log(score);

const otherNum = new Number(100)
console.log(otherNum);
console.log(otherNum.toString());
console.log(otherNum.toFixed(2));
console.log(otherNum.toPrecision(3));

const comma = 10000000
console.log(comma.toLocaleString());


//+++++++++++++++++++++++++++++++++++++++++++++_Maths_++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(4));
console.log(Math.round(4.3));
console.log(Math.max(4,8,7,5,7,0));
console.log(Math.min(4,8,7,5,7,0));

console.log(Math.random());
console.log((Math.random())* 10);
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min + 1) + min));   // very very imp*****
