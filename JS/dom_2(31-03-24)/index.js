// let htmlDiv = document.getElementsByClassName("red");

// window.location.reload();
// window.location.replace("lll");

let htmlDiv = document.querySelector(".red");
console.log(htmlDiv);

htmlDiv.innerHTML = "<p>Hello</p>";
// htmlDiv.innerText = "<p>Hello</p>";

htmlDiv.style.backgroundColor = "red";

htmlDiv.style.margin = "5px";
htmlDiv.style.fontSize = "50px";

function initTheme() {
  let prevTheme = localStorage.getItem("theme");
  if (prevTheme === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else if (prevTheme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
}

initTheme();

function calculateSum() {
  // let htmlDiv = document.querySelector(".red");
  // htmlDiv.style.backgroundColor = "green";
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = Number(num1) + Number(num2);
  let resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = `<div><h1>My Sum is ${result}</h1></div>`;
  // resultDiv.innerText = "The Total Sum is : " + result;
  resultDiv.style.fontSize = "200px";
}

function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

let btn = document.querySelector(".toggle_btn");
btn.addEventListener("mouseover", (node) => {
  toggleTheme();
});

let iterDiv = document.querySelector(".iter");
for (let i = 0; i < 5; i++) {
  let h1El = document.createElement("h1");
  h1El.innerText = i;
  iterDiv.appendChild(h1El);
}

let arr = [1, 2, 3, 5, 6, 7, 8];
console.log(
  arr.filter((value, index) => {
    if (index == 2) {
      return value;
    }
  })
);

console.log(
  arr.reduce((prev, currentValue) => {
    return prev;
  })
);

// Web 2 API
// setTimeout -> 5sec
// setInterval -> Continous 2sec gap

// setTimeout(() => {
//   console.log("Yeah , I am invoked after 5 sec");
//   toggleTheme();
// }, 5000);

// setInterval(() => {
//   console.log(" I am interval and invoked after ");
//   toggleTheme();
// }, 5000);

// 1sec -> 1000ms
// Promising

const fetchPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(6);
    }, 5000);

    // reject(5);
  });
};

const getDetail = async () => {
  try {
    // console.log(await fetchPromise());
    console.log("I am dumb");
    // toggleTheme();
  } catch (err) {
    console.log("Yeah Error occured", err);
    alert("error ocurred");
  }
};

getDetail();

// Try and Catch
let nameVal = "";
const nameChange = () => {
  nameVal = event.target.value;
};
const formSubmission = () => {
  console.log(nameVal);

  if (nameVal.length == 0) {
    alert("Name is required");
    return;
  }
  try {
    alert("Form Submitted");
  } catch (err) {}
};
