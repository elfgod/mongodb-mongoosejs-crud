// CRUD = basic mongoDB mongoose
const mongoose = require("mongoose");

const dbName = "pokemonDB";
const MONGODB_URI = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
  //useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

const pokemonSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

/*
const pokemon1 = new Pokemon({
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"

});

pokemon1.save(); */

Pokemon.find((err, data) => {
  if (err) console.log("Some error occured");
  else console.log(data);
});

Pokemon.updateOne(
  { _id: "5fa7095ca1f97507a7870444" },
  { name: "ivysaur" },
  (err) => {
    if (err) console.log("Error Updating");
    else console.log("Successfully Updated");
  }
);

Pokemon.deleteOne({ _id: "5fa7095ca1f97507a7870444" });

Pokemon.deleteOne({ name: "Spiderman" }, (err) => {
  if (err) console.log("Error Updating");
  else console.log("Successfully Deleted");
});

// mongoose validators
/*
name: {
  type: string,
  required: [true, "NO black Name is encourage"]
},
age : {
  type:Number,
  min: 18,
  max: 60
} 
*/

/*
db.connection.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
  }); */
