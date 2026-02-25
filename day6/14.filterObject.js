let products=[{name:"laptop",price:50000},
{name:"mobile",price:20000},
{name:"tablet",price:7000}]

let filterObj=products.filter((pd)=>pd.price>10000);
console.log(filterObj);
