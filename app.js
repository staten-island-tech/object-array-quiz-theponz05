const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerald Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const Democrats = presidents.filter(president => president.party === "D");
console.table(Democrats);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const oneTermRepublicans = presidents.filter(function(president) {
  if(president.party === "R" && president.terms === 1) {
    return true;
  }
});
console.table(oneTermRepublicans);

//3) return only the last three presidents

const lastThree = presidents.slice(0,3);
console.table(lastThree);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const twoTermDemocrats = presidents.filter(function(president) {
  if(president.party === "D" && president.terms === 2) {
    return true;
  }
});
console.table(twoTermDemocrats);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

function testTwoTerms(president) {
  if (presidents.terms === 2) {
    return `${president.name} served two terms.`
  } else {
    return `${president.name} was one and done.`
  }    
}

//I couldn't figure out how to make it work