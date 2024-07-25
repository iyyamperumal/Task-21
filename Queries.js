//1. Find all the information about each products
db.task21.find();

//2. Find the product price which are between 400 to 800
db.task21.find({ product_price: { $lt: 800, $gt: 400 } });

//3. Find the product price which are not between 400 to 600
db.task21.find({ product_price: { $lt: 400, $gt: 800 } });


//4. List the four product which are greater than 500 in price
db.task21.find({ product_price: { $gt: 500 } }).limit(4);

//5. Find the product name and product material of each products
db.task21.find({}, { product_name: 1, product_material: 1 });

//6. Find the product with a row id of 10
db.task21.find({ id: "10" });

//7. Find only the product name and product material
db.task21.find({}, { product_name: 1, product_material: 1, _id: 0 });

//8. Find all products which contain the value of soft in product material
db.task21.find({ product_material: "Soft" });

//9. Find products which contain product color indigo  and product price 492.00
db.task21.find({ product_color: "indigo", product_price: 492.00 });

//10. Delete the products which product price value are 28
db.task21.deleteMany({ product_price: 28 });