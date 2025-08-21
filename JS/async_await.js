//dummmy api function

function api(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data of id ${id} is fetched`);
      resolve();
    }, 2000);
  });
}

(async () => {
  await api(1);
  await api(2);
  await api(3);
  await api(4);
})();
