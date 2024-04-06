console.log("Hel");

// Get
// Post
// Update
// delete

// const fetchP2PCloudsAbout = () => {
//   let dataVar;
//   fetch(
//     "https://p2pcloudsserver-production.up.railway.app/v1/about/p2pclouds",
//     {
//       method: "GET",
//     }
//   )
//     .then((data) => {
//       return data.json();
//     })
//     .then((dataFul) => {
//       dataVar = dataFul;
//       console.log(dataVar);
//     });
// };

// REST API

// Async/Await
const checkWeather = async () => {
  try {
    const cityName = document.querySelector("#cityName").value;
    console.log(cityName);
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=d4f52b2321ce461fb2360535240604&q=${cityName}&aqi=no`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);

    const resultDiv = document.querySelector(".result");

    let child = (document.createElement(
      "h1"
    ).innerText = `Temperature In Celcius: ${data.current.temp_c}`);
    resultDiv.append(child);
    child = document.createElement(
      "h1"
    ).innerText = `Humitdity: ${data.current.humidity}`;
    resultDiv.append(child);
    // const products = data.products;

    // const parentUL = document.querySelector(".products_list");
    // for (let i = 0; i < products.length; i++) {
    //   const newLI = document.createElement("li");
    //   newLI.innerText = products[i];
    //   parentUL.appendChild(newLI);
    // }

    // products.map((product) => {
    //   const newLI = document.createElement("li");
    //   newLI.innerText = product;
    //   parentUL.appendChild(newLI);
    // });
  } catch (err) {
    console.log(err);
    alert("Failed to fetch");
  }
};

// JSON
// {
//     "data":"[]"
// }
