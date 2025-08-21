let fact = document.querySelector("#fact");
let getFact = document.querySelector(".getFact");

let URL = "https://uselessfacts.jsph.pl/random.json?language=en";
// let getFactData = async () => {
//     try {
//         let response = await fetch(URL);
//         let result = await response.json();
//         fact.innerText = result.text;
//     } catch (error) {
//         fact.innerText = "Error fetching fact.";
//         console.error(error);
//     }
// };




//using promise chaining

let get_fact = () => {
  try {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        fact.innerText = result.text;
      });
  } catch {
    fact.innerText = "Error fetching fact.";
    console.error(error);
  }
};
getFact.addEventListener("click", get_fact);
