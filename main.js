const  companies = [
    {name:'company One', category:'Finance', start:1981, end:2003},
    {name:'company two', category:'Retail', start:1931, end:1968},
    {name:'company three', category:'Auto', start:1999, end:2007},
    {name:'company four', category:'Retail', start:1989, end:2010},
    {name:'company five', category:'technology', start:2011, end:2016},
    {name:'company six', category:'Retail', start:1981, end:1989},


];


const ages = [33,20,12,16,5,54,21,44,61,13,15,45,25,64,32];

// for(let i =0;  i<companies.length;  i++){
//     console.log(companies[i]);
    
// }

//forEach
console.log("TESTING forEach\n\n");

companies.forEach(function(comy){
    console.log(comy.category);


});


// let canDrink = [];
// for(let i = 0; i<ages.length; i++){
//     if (ages[i]>=21) {
//         canDrink.push(ages[i])
        
//     }
// }

// console.log(canDrink);


//filter

console.log("\n\nTESTING FILTER ");

// const Drink = ages.filter(function (age) {
//     if(age>=21){
//         return true;
//     }
// });


const  canDrink = ages.filter(ages=> ages>=21);

console.log(canDrink);


//map

//create  array of  name  of  company

const companyNames = companies.map(function (company) {
    return company.name;
});
console.log(companyNames);


//sort


const sortAges = ages.sort((a,b) => b-a);

console.log(sortAges);

//reduce

const ageSum  =  ages.reduce(function (total,  age) {
    return total+age;
});
console.log(ageSum);

