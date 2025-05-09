/* const printLOL = function(loop) {
    msg = "";
    if (loop > 0) {
        for (let i = 0; i < loop; i++) {
            msg += " lol";
        }
    } else {
        msg = "....";
    }
    console.log(msg);
} */
/* 
printLOL(0);

let x = 10; // global
var z = 30; // also global
if (true) {
let y = 20; // local to block
z = 100;
}


console.log(z); // 10 */
/* 
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
hummus(4);
 */
/* 
const doubleN = (x, n) => {

    if ((x == 0) || (n == 0)){
        return 0;
    }
    else {
        let tempX = x;
        let tempN = n - 1;
        let rs = x;
        for (let cnt = 0; cnt < tempN; cnt ++ ){
            rs = rs * tempX
        }
        return rs;
    }
}
 */
/* 
max = 10;
for(let x = 0; x < max; x++){
    console.log("test doubleN="+ x + " " + doubleN (2,x));
}

function multiplier(factor) {
    return number => number * factor;
    }
    let twice = multiplier(2);
    console.log(twice(5));
    // → 10


function counter1() {
    let cnt = 0;
    return function() {
        cnt += 1;
        return cnt;
    }
}

let c = counter1();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());
 */
/* 
function makeMultiplierTriple(factor = 3){
    return triple => triple * factor;
}

function makeMultipleQuadruple(factor = 4){
    return quadruple => quadruple * factor;
}

let mt = makeMultiplierTriple();
let t1 = "Test mt: ";
console.log(`${t1} ${mt(3)}`);

let mq = makeMultipleQuadruple();
let t2 = "Test mt: ";
console.log(`${t2} ${mq(4)}`);

 */


/* 
    Exercise 1:
    Minimum

    Description:
        The previous chapter introduced the standard function Math.min that returns
        its smallest argument. We can write a function like that ourselves now. Define
        the function min that takes two arguments and returns their minimum.  
*/

function minninum (a, b){
    if (a < b){
        return a;
    } else {
        return b;
    }
}
let a = 10;
let b = 20;
let c = -5;
let d = 0;
console.log(`Test min: compare between ${a} and ${b} => ${minninum(a, b)}`);
console.log(`Test min: compare between ${a} and ${c} => ${minninum(a, c)}`);
console.log(`Test min: compare between ${a} and ${d} => ${minninum(a, d)}`);
console.log(`Test min: compare between ${c} and ${d} => ${minninum(c, d)}`);

/* 
    Exercise 2:
    Recursion

    Description:
        We’ve seen that we can use % (the remainder operator) to test whether a number
        is even or odd by using % 2 to see whether it’s divisible by two. 
        Here’s another way to define whether a positive whole number is even or odd:
        • Zero is even. 
        • One is odd.
        • For any other number N, its evenness is the same as N - 2.
        
        Define a recursive function isEven corresponding to this description. 
        The function should accept a single parameter (a positive, whole number) and return
        a Boolean.
        Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
        way to fix this?

*/

function isEven(n) {
    if (n < 0){
        n = -n;
    }
    //console.log(`Test isEven (inprogress): ${n}`);
    if (n == 0){
        return true;
    } else if (n == 1){
        return false;
    }
    else {
        n -= 2;
        return isEven(n);
    }
}

let case1 = 50;
let case2 = 75;
let case3 = -3;
let case4 = 0;

console.log(`Test isEven even case: ${case1} => ${isEven(case1)}`);
console.log(`Test isEven odd case: ${case2} => ${isEven(case2)}`);
console.log(`Test isEven negative case: ${case3} => ${isEven(case3)}`);
console.log(`Test isEven zero number case: ${case4} => ${isEven(case4)}`);

/* 
    Exercise 3:
    Bean counting

    You can get the Nth character, or letter, from a string by writing [N] after the
    string (for example, string[2]). The resulting value will be a string containing
    only one character (for example, "b"). The first character has position 0, which
    causes the last one to be found at position string.length - 1. In other words,
    a two-character string has length 2, and its characters have positions 0 and 1.

    Write a function called countBs that takes a string as its only argument and
    returns a number that indicates how many uppercase B characters there are in
    the string.

    Next, write a function called countChar that behaves like countBs, except
    it takes a second argument that indicates the character that is to be counted
    (rather than counting only uppercase B characters). Rewrite countBs to make
    use of this new function.

*/

function countBs (str){
    return countChar (str, 'B');
}

function reportB(count){
    if(count == 1){
        return console.log(`${count} of 'B' is founded`);
    } else if (count > 1) {
        return console.log(`${count} of 'B' are founded`);
    } else {
        return console.log(`No 'B' is founded`);
    }
}

function countChar (str, chr){
    str = `${str}`;
    chr = `${chr}`;
    let count = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] == chr){
                count++;
            }
        }
    reportB(count);
}

countBs("Banana");
countBs("BBBanana");
countBs("@#$%^*");
