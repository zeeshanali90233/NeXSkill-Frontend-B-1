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
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
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
