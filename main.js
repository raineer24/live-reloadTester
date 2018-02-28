window.onload = function () {
  var http = new XMLHttpRequest();
  http.open("GET", "data/grocer.json", true);
  http.send();
  console.log(http);
};




// const companies = [
//   { name: "Toyota", category: "Auto", start: 1993, end: 2003 },
//   { name: "Uniliver", category: "Retail", start: 1992, end: 2014 },
//   { name: "Chowking", category: "Finance", start: 1996, end: 2003},
//   { name: "Bla bla", category: "Retail", start: 1994, end: 1996},
//   { name: "Teslra", category: "Technology", start: 1983, end: 2009},
//   { name: "Mcdonalds", category: "Finance", start: 1996, end: 2013},
//   { name: "Samsung", category: "Technology", start: 1974, end: 2004},
//   { name: "Mang Inisal", category: "Finance", start: 1999, end: 2007},
// ];


// for(let i =0; i < companies.length; i++){
//     console.log(companies[i]);
// }

const ages = [33, 22, 16, 23, 24, 35,75, 24, 23, 12, 23, 46, 15, 52, 64];
    
// companies.forEach(function (company) {
//    console.log(company); 
// });


//forEach ^^


//FIlter

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function (age) {
//      if(age >= 21){
//          return true;
//      }   
// });

const canDrink = ages.filter(age => age >= 21); //arrow function
console.log(canDrink);


// const retailCompanies = companies.filter(function (company) {
//     if(company.category === 'Retail'){
//         return true;
//     } 
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');

const eightiesCompanies = companies.filter(company => (company.start >= 1986 && company.start < 1990));



const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// const companyNames = companies.map(function (company) {
//     return company.name; 
// });

// const testMap = companies.map(function (company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company =>
//  `${company.name} [${company.start} - ${company.end}]`
// );

//const agesTimesTwo = ages.map(age => Math.sqrt(age)).map(age => age * 2);

//console.log(agesTimesTwo);

//map


// sort
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// reduce





// const sortAges = ages.sort((a, b) => b - a );

// console.log(sortAges);

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

//const ageSum = ages.reduce((total, age) => total + age, 0);

// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);


//const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

const combined = ages 
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);
