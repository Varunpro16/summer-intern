// document.querySelector('.week1').style.backgroundColor="#0d6efd"
const info = {
  week1: [
    "15.4.2024",
    "16.4.2024",
    "17.4.2024",
    "18.4.2024",
    "19.4.2024",
    "week1 syllabus",
  ],
  week2: [
    "22.4.2024",
    "23.4.2024",
    "24.4.2024",
    "25.4.2024",
    "26.4.2024",
    "week2 syllabus",
  ],
  week3: [
    "29.4.2024",
    "30.4.2024",
    "30.4.2024",
    "2.5.2024",
    "3.5.2024",
    "week3 syllabus",
  ],
  week4: [
    "6.5.2024",
    "7.5.2024",
    "8.5.2024",
    "9.5.2024",
    "10.5.2024",
    "week4 syllabus",
  ],
  week5: [
    "13.5.2024",
    "14.5.2024",
    "15.5.2024",
    "16.5.2024",
    "17.5.2024",
    "week5 syllabus",
  ],
  week6: [
    "20.5.2024",
    "21.5.2024",
    "22.5.2024",
    "23.5.2024",
    "24.5.2024",
    "week5 syllabus",
  ],
};
function changeCellColor(cell) {
  // Remove 'clicked' class from all cells
  // console.log(cell);
  var allCells = document.querySelectorAll(".week");
  allCells.forEach(function (element) {
    // console.log("hello");
    element.classList.remove("clicked");
  });

  const week = cell.id;
  const weekInfo = info[week];
  // console.log(weekInfo);
  if (weekInfo) {
    var i = 0;
    var days = document.querySelectorAll(".date");
    days.forEach(function (ele) {
      ele.textContent = weekInfo[i];
      i++;
    });
  }
  // Add 'clicked' class to the clicked cell
  cell.classList.add("clicked");
}

// animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements1 = document.querySelectorAll(".hidden-copy");
hiddenElements1.forEach((el) => observer.observe(el));

// document.addEventListener("DOMContentLoaded", function () {
//   const images = document.querySelectorAll(".moving-image");

//   setInterval(() => {
//     const visibleImage = document.querySelector(".visible");
//     const nextImage = visibleImage.nextElementSibling || images[0];

//     visibleImage.classList.remove("visible");
//     nextImage.classList.add("visible");
//   }, 3000); // Change 2000 to the desired interval in milliseconds
// });
