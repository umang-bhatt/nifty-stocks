window.onload = function () {
  const div1 = document.getElementsByClassName("actual-content");
  const div2 = document.getElementsByClassName("container");
  const imageSection = document.querySelector('.contact-us');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect.top > window.innerHeight || rect.bottom < 0)
  return !(rect.top > window.innerHeight || rect.bottom < 0);
}

window.addEventListener('scroll', () => {
  if (isInViewport(imageSection)) {
    imageSection.classList.add('visible');
  } else {
    imageSection.classList.remove('visible');
  }
});

// Check initially for immediate effect (optional)
if (isInViewport(imageSection)) {
  imageSection.classList.add('visible');
}

  // Show div1 initially (optional, comment out if hidden by default)
  // div1[0].style.display = "block";

  // Hide div1 and show div2 after 5 seconds
  setTimeout(function () {
    div1[0].style.display = "block";
    div2[0].style.display = "none";
  }, 2000);

  const scrollToDiv1Button = document.getElementById("risk-button");
  const risk = document.getElementById("risk");

  scrollToDiv1Button.addEventListener("click", function () {
    risk.scrollIntoView({ behavior: "smooth" });
  });
};

// const imageContainer = document.querySelector('.image-container');
// const imageHeight = imageContainer.offsetHeight; // Get image height

// window.addEventListener('scroll', () => {
//   const scrolledPosition = window.scrollY; // Get scroll position

//   if (scrolledPosition > imageHeight) {
//     imageContainer.classList.add('hidden');
//   } else {
//     imageContainer.classList.remove('hidden');
//   }
//});
