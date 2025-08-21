const jsonStr = '{ "name": "Gourav", "age": 20 }';
const user = JSON.parse(jsonStr);  // Now it's a real object
console.log(user.name);  // Gourav

const badJson = "{ name: 'Gourav' }"; // ❌ Keys and strings must use double quotes

try {
  const obj = JSON.parse(badJson);
} catch (e) {
  console.log("Parsing failed:", e.message);
}
//opposite

const obj = { name: "Gourav", age: 20 };
const jsonStr2  = JSON.stringify(obj);
console.log(jsonStr2); // '{"name":"Gourav","age":20}'
