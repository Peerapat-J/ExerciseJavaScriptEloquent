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