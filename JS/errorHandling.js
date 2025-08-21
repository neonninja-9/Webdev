// const jsonStr = '{ "name": "Gourav", "age": 22 }';

// try {
//   const user = JSON.parse(jsonStr);
//   console.log(user.name);
// } catch (e) {
//   console.log("Failed to parse JSON:", e.message , e.name);
// }

// function register(username) {
//   if (!username) {
//     throw new Error("Username is required");
//   }
//   console.log("User registered:", username);
// }

// try {
//   register(""); // test with no username
// } catch (e) {
//   console.log("Error:" ,e.message);
// }




// Write a function getAge(obj) that:

// Takes an object with an age property

// Throws an error if age is missing or not a number

// Logs “Age is: X” if valid


const person = {
  name: "Gourav",
  // age: 21 
};

function getAge(obj) {
  if (!("age" in obj)) {
    throw new Error("Age is missing");
  }

  if (typeof obj.age !== "number") {
    throw new Error("Age must be a number");
  }

  console.log("Age is: " + obj.age);
}


try {
  getAge(person);
} catch (e) {
  console.log("Error:", e.message);
}
