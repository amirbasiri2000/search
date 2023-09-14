const searchOptionsIcon = document.querySelector("#search__options-icon ");
const searchOptionsBox = document.querySelector(".search__options");

let showOptions = false;

searchOptionsIcon.addEventListener("click", () => {
  showOptions = !showOptions;
  if (showOptions) {
    searchOptionsBox.style.height = "auto";
    searchOptionsBox.style.opacity = "100";
    document.body.style.alignItems = "flex-start";
  } else {
    // searchOptionsBox.style.height = "0";
    // searchOptionsBox.style.opacity = "0";
    document.body.style.alignItems = "center";
  }
  console.log(showOptions);
});

const getAllData = () => {
  
}

$(document).ready(() => {
  // stars raging
  $(":radio").change(function () {
    console.log("New star rating: " + this.value);
  });
});

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.right = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.left = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.right = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
