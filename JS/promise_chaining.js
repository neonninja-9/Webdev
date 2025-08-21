//dummmy api function

function api(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data of id ${id} is fetched`);
      resolve();
    }, 2000);
  });
}

api(1)
  .then((res) => {
    console.log(res);
    return api(2);
  })
  .then((res) => {
    console.log(res);
    return api(3);
  })
  .then((res) => {
    console.log(res);
  });
