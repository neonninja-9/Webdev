function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((result) => {
  console.log(result); // Data loaded
});
