let myArray = [1, 2, 3, 4, 5];
myArray.push(6, 7, 8, 9, 10, 11);
console.log("length: " + myArray.length)
console.log(myArray)
myArray.pop();
console.log(myArray)

let myOpj = {
    name: "Mart",
    age: 31,
    job: "Engineer"
};

console.log(myOpj.age + myOpj.job + myOpj.name)
console.log(Object.keys({x: 0, y: 0, z: 2}));
console.log(Object.keys(myOpj));
Object.assign(myOpj, {sex: "male", lv: "senior", online: true });
console.log(Object.keys(myOpj));
console.log(myOpj);

let mart = [];

function addEventOfMart (event, sick) {
    mart.push({event, sick});
}

addEventOfMart(["work", "touched tree", "pizza", "running", "television"], false);
addEventOfMart(["work", "ice cream", "cauliflower", "lasagna", 
"touched tree", "brushed teeth"], false);
addEventOfMart(["weekend", "cycling", "break", "peanuts", "beer"], true);
addEventOfMart(["weekend", "cycling", "break", "peanuts", "beer"], true);
console.log(mart);
mart.push({event: ["code","coffee","badminton"],sick: false});
mart.push({event: ["Last", "obj"], sick: false, happy: true});

console.log(mart[(mart.length - 1)]);

var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL));

for (let entry of JOURNAL) {
    console.log(`${entry.squirrel} events.`);
}
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));

function logRS (){
    let rs = [];
    let phiRs = 0;
    for (let event of journalEvents(JOURNAL)) {
        phiRs = phi(tableFor(event, JOURNAL));
        console.log(event + ":", phi(tableFor(event, JOURNAL)));
        rs.push({event: event, phiRs: phiRs});
    }
    return rs;
}

function phiMax(logOfPhi){
    let eventOfMaxPhi = logOfPhi[0].event;
    let maxOfPhi = logOfPhi[0].phiRs;
    //console.log("init phi event : "+eventOfMaxPhi);
    //console.log("init phi value: "+maxOfPhi);

    for (let index = 0; index < logOfPhi.length; index++){
        if((index + 1) < logOfPhi.length){
            if(maxOfPhi < logOfPhi[index+1].phiRs){
                maxOfPhi = logOfPhi[index+1].phiRs;
                eventOfMaxPhi = logOfPhi[index+1].event;
            }
            //console.log("max phi event : "+eventOfMaxPhi);
            //console.log("max phi value: "+maxOfPhi);
        }
    }
    //console.log("return event : "+eventOfMaxPhi);
    //console.log("return max phi value: "+maxOfPhi);
    let rs = [eventOfMaxPhi, maxOfPhi]
    return rs;
}

function phiMin(){
    let eventOfMinPhi = logOfPhi[0].event;
    let minOfPhi = logOfPhi[0].phiRs;
    //console.log("init phi event : " + eventOfMinPhi);
    //console.log("init phi value: " + minOfPhi);

    for (let index = 0; index < logOfPhi.length; index++){
        if((index + 1) < logOfPhi.length){
            if(minOfPhi > logOfPhi[index+1].phiRs){
                minOfPhi = logOfPhi[index+1].phiRs;
                eventOfMinPhi = logOfPhi[index+1].event;
            }
            //console.log("min phi event : " + eventOfMinPhi);
            //console.log("min phi value: " + minOfPhi);
        }
    }
    //console.log("return event : " + eventOfMinPhi);
    //console.log("return min phi value: "+minOfPhi);
    let rs = [eventOfMinPhi, minOfPhi]
    return rs;

}

logOfPhi = logRS();
//console.log(logOfPhi);
//console.log(phiMax(logOfPhi));
phiMax(logOfPhi);

console.log("max is: "+phiMax(logOfPhi));
console.log("min is: "+phiMin(logOfPhi));

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

/* 
    Exercises 1.1:

    The sum of a range

    Write a range function that takes two arguments, start and end, and returns
    an array containing all the numbers from start up to and including end.
*/
function range(start, end){
    let rc = [];
    if(start <= end){
        for (let i = start; i <= end; i++){
            rc.push(i);
        }
    } else {
        for (let i = start; i >= end; i--){
            rc.push(i);
        }
    }
    return rc;
}

/* console.log(range(1, 1));
console.log(range(0, 12));
console.log(range(-3, 12));
console.log(range(5, 1)); */

/* 
    Exercises 1.2:

    write a sum function that takes an array of numbers and returns the
    sum of these numbers. Run the example program and see whether it does
    indeed return 55.
*/
function sum(...arrayOfNumber){
    let rc = 0;
    console.log(arrayOfNumber);
    for (rc of arrayOfNumber) {
        rc += rc;
    }
    return rc;
}
//console.log(sum(0,1,2,3));

/* 
    Exercises 1.3:

    As a bonus assignment, modify your range function to take an optional third
    argument that indicates the “step” value used when building the array. If no
    step is given, the elements should go up by increments of one, corresponding
    to the old behavior. The function call range(1, 10, 2) should return [1,
    3, 5, 7, 9]. Make sure this also works with negative step values so that
    range(5, 2, -1) produces [5, 4, 3, 2].
*/
function rangeV2(start, end, step){
    let rc = [];
    step = Math.abs(step);

    if(step == 0){
        return 0;
    } else if (start > end) {
        for (let i = start; i >= end; i -= step){
            rc.push(i);
        }
    } else if (start <= end){
        for (let i = start; i <= end; i+=step){
            rc.push(i);
        }
    }
    return rc;
}


console.log(rangeV2(0, 12, 0));
console.log(rangeV2(-3, 12, 2));
console.log(rangeV2(15, 1, -1));

/* 
    Exercises 2:

    Reversing an array

    Arrays have a reverse method that changes the array by inverting the order in
    which its elements appear. 
    
    For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
    The first, reverseArray, should take an array as its argument and produce 
    a new array that has the same elements in the inverse order. 
    
    The second, reverseArrayInPlace, should do what the reverse method
    does: modify the array given as its argument by reversing its elements. Neither
    may use the standard reverse method.
    
    Note: 
    Thinking back to the notes about side effects and pure functions in the
    previous chapter, which variant do you expect to be useful in more situations?
    Which one runs faster?
*/

/* 
// Your code here.

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/

let myArrayEx2 = ["A", "B", "C"];

function reverseArray(array){
    let rc = [];
    for (let i = array.length - 1; i >= 0 ; i--){
        rc.push(array[i]);
    }
    return rc;
}
console.log(reverseArray(myArrayEx2));
console.log(myArrayEx2);

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/* 
    Exercises 3:

    A list

    As generic blobs of values, objects can be used to build all sorts of data structures. 
    A common data structure is the list (not to be confused with arrays). 
    A list is a nested set of objects, with the first object holding a reference to the second, 
    the second to the third, and so on:

    let list = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };

    The resulting objects form a chain, as shown in the following diagram:
    ----------       -----------        ------------
    |Value: 1|       | Value: 2|       | Value: 3  |
    |rest: --|---->  | rest: --|---->  | rest: null|
    ----------       -----------        ------------

    A nice thing about lists is that they can share parts of their structure. 
    For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} 
    (with list referring to the binding defined earlier), they are both independent lists, 
    but they share the structure that makes up their last three elements. 
    The original list is also still a valid three-element list.

    Write a function arrayToList that builds up a list structure like the one shown 
    when given [1, 2, 3] as argument. 
*/

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function arrayToList(array){
    console.log(`check arg: ${array}`)
    let firstArray = array[0];
    let myList = {};
    if(array.length > 1){
        array.shift();
        console.log(`check arg2: ${array}`)
        myList = {value: firstArray, rest: arrayToList(array)};
    } else {
        myList = {value: array[0], rest: null};
    }
    return myList;
}
let u4e3_1 = arrayToList([10, 20, 30, 40]);
console.log(JSON.stringify(u4e3_1, null, 2));

/* 
    Also write a listToArray function that produces an array from a list.
*/
function listToArray(list){
    let rsArray = [];
    let cnt = 0;
    while (true){
        
        let rs = nth(list, cnt);
        rsArray.push(rs);
        if (rs == undefined) break;
        cnt++;
    }
    return rsArray;
}
console.log(`check rsArray: ${listToArray(list)}`)
console.log(`listToArray(arrayToList([10, 20, 30])): ${console.log(listToArray(arrayToList([10, 20, 30])))}`);

/* 
    Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, 
*/
function prepend(elm, list){
    return {value: elm, rest: list};
}
console.log(`test prepend: ${JSON.stringify(prepend(11, list), null, 2)}`);


/*  
    and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
 */
function nth(list, n){    
    if(n == 0){      
        return list.value;
    }
    else if(n > 0 && list.rest!==null){
        return nth(list.rest, n - 1);
    } else {
        return undefined;
    }
}
//test case
console.log(`test nth: ${nth(list, 0)}`);
console.log(`test nth: ${nth(list, 1)}`);
console.log(`test nth: ${nth(list, 2)}`);
console.log(`test nth: ${nth(list, 3)}`);
let rsArray = [];
rsArray.push(nth(list, 0));
rsArray.push(nth(list, 1));
rsArray.push(nth(list, 2));
rsArray.push(nth(list, 3));
console.log(rsArray)

/* 
   If you haven’t already, also write a recursive version of nth.
   // Your code here.
*/
console.log("1 ->" + arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("2 ->" + listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log("3 ->" + prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("4 ->" + nth(arrayToList([10, 20, 30]), 1));
// → 20


/* 
    Exercises 4
    
    Deep comparison
    The == operator compares objects by identity, but sometimes you’d prefer to compare the values 
    of their actual properties.

    Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

    To find out whether values should be compared directly (using the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

    The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

let obj1 = {
  name: "Peerapat",
  info: {
    age: 30,
    skills: ["JS", "C++"]
  }
};

let obj2 = {
  name: "Peerapat",
  info: {
    age: 30,
    skills: ["JS", "C++"]
  }
};

console.log(deepEqual(obj1, obj2)); // → true

function deepEqual(a, b) {

  if (a === b) return true;
  if (a === null || b === null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
console.log("5555555555"+deepEqual(obj1, obj2));
// Your code here.
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
