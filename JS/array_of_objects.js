const user = [
    {name : "gourav" , age : 21},
    {name : "sourav", age : 15},
    {name : "priyanka" , age : 21},
]
console.log("usign forEach loop\n")
//printing using for of loop
user.forEach(u => {
    console.log(u.name, u.age);
});
//printing using for..of loop
console.log("\nusign for..of loop\n")
for (let u of user) {
    console.log(u.name, u.age);
}