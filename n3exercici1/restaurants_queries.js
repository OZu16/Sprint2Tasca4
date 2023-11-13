// 1-
db.restaurants.find({});
// 2-
db.restaurants.find({}, { "_id": 1, "name": 1, "borough": 1, "cuisine": 1});
// 3-
db.restaurants.find({}, { "_id": 0, "name": 1, "borough": 1, "cuisine": 1});
// 4- 
db.restaurants.find({}, { "_id": 0, "name": 1, "borough": 1, "address.zipcode": 1});
// 5-
db.restaurants.find({"borough": "Bronx"});
// 6-
db.restaurants.find({"borough": "Bronx"}).limit(5);
// 7-
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);
// 8-
db.restaurants.find({ "grades.score": { $gte: 90 } });
// 9-
db.restaurants.find({"grades": { $elemMatch: { "score": { $gt: 80, $lt: 100 } } } });
// 10-
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } });
// 11-
db.restaurants.find({ $and: [ { "cuisine": { $ne: "American" } }, { "grades.score": { $gt: 70 } }, { "address.coord.1": { $gt: -65.754168 } }] });
// 12-
db.restaurants.find({ "cuisine": { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.1": { $gt: -65.754168 }});
// 13-
db.restaurants.find({ $and: [ { "cuisine": { $ne: "American" } }, { "grades.grade": "A" }, { "borough": { $ne: "Brooklyn" } } ] }).sort({ "cuisine": -1 });
// 14-
db.restaurants.find({ "name": { $regex: /^Wil/i } }, { "_id": 1, "name": 1, "borough": 1, "cuisine": 1});
// 15- 
db.restaurants.find({ "name": { $regex: /ces$/i } }, { "_id": 1, "name": 1, "borough": 1, "cuisine": 1 });
// 16- 
db.restaurants.find({ "name": { $regex: /reg/i } }, { "_id": 1, "name": 1, "borough": 1, "cuisine": 1 });
// 17-
db.restaurants.find({ "borough": "Bronx", $or: [{ "cuisine": "American" }, { "cuisine": "Chinese" }]}, { "_id": 1, "name": 1, "borough": 1, "cuisine": 1 });
// 18-
db.restaurants.find( { "borough": { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { "_id": 0, "name": 1, "borough": 1, "cuisine": 1 } );
// 19-
db.restaurants.find( { "borough": { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { "_id": 0, "name": 1, "borough": 1, "cuisine": 1 } );
// 20-
db.restaurants.find({ "grades": { $elemMatch:{ "score": { $lte: 10 }}} }, { "_id": 0, "name": 1, "borough": 1, "cuisine": 1 });
// 21-
db.restaurants.find({ $or: [ {$and: [ {cuisine: "Seafood"}, {cuisine: { $nin: ["American ", "Chinese"] }} ]} , { "name": { $regex: /^Wil/i }} ]}, { "_id": 0, "name": 1, "borough": 1, "cuisine": 1});	
// 22- 
db.restaurants.find({ $and: [{"grades.grade": "A"}, {"grades.score": 11}, {"grades.date": ISODate("2014-08-11T00:00:00Z")}]}, { "_id": 0, "name": 1, grades: 1});
// 23-
db.restaurants.find({ $and: [{"grades.1.grade": "A"}, {"grades.1.score": 9}, {"grades.date": ISODate("2014-08-11T00:00:00Z")}]}, { "_id": 0, "name": 1, grades: 1})	;
// 24- 
db.restaurants.find({"address.coord.1": { $gt: 42, $lt: 52 }});
// 25-
db.restaurants.find().sort({ "name": 1 });
// 26-
db.restaurants.find().sort({ "name": -1 });
// 27-
db.restaurants.find().sort({ "cuisine": 1, "borough": -1 });
// 28-
db.restaurants.find({ "address.street": { $not: /StreetName/i }}, { "_id": 0, name: 1, "address": 1 });
// 29-
db.restaurants.find({"address.coord": { $type: "double" }});
// 30-
db.restaurants.find({ "grades.score": {$mod:[7, 0]} }, {restaurant_id:1, name:1,"grades.grade":1, _id:0});
// 31-
db.restaurants.find({ "name": { $regex: /mon/i } }, {"_id": 0, "name": 1, "borough": 1, "address.coord": 1, "cuisine": 1 });
// 32-
db.restaurants.find({ "name": { $regex: /^mad/i } }, {"_id": 0, "name": 1, "borough": 1, "address.coord": 1, "cuisine": 1 });