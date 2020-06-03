//insertOne
//insertMany
//insert

var user2 = {
  name: "German",
  las_name: "Gritti",
  age: 24,
  email: "german@gmail.com",
};

var user3 = {
  name: "Uriel",
  las_name: "Ramos",
  age: 27,
  email: "uriel@gmail.com",
};

var user4 = {
  name: "Fernando",
  las_name: "Lopez",
  age: 29,
  email: "fernando@gmail.com",
};

db.users.insertOne(user2);
db.users.insertMany([user3, user4]);

db.users
  .find(
    {
      age: 29,
    },
    { name: true, email: true, _id: false }
  )
  .pretty();
