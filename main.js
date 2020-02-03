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
companies.forEach(function(comy){
    console.log(comy.category);


});

//filter
//map
//sort
//reduce
