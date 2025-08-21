function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Gourav", age: 21 });
    }, 2000);
  });
}

// ✅ Using async/await
async function displayUserData() {
  console.log("Fetching user...");
  const data = await getUserData();
  console.log("User Data:", data);
}

displayUserData();
