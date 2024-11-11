let slideIndex = 1;
let slides = getSlides();

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
const popup = document.getElementById("popup");
const close = document.getElementById("close");
const videoPopup1 = document.getElementById("videoPopup1");

popup.addEventListener("click", () => {
  videoPopup1.style.display = "block";
});
close.addEventListener("click", () => {
  videoPopup1.style.display = "none";
});
window.addEventListener("resize", () => {
  slides = getSlides();
  showSlides(slideIndex);
});

function getSlides() {
  if (window.matchMedia("(max-width: 767px) and (min-width: 360px)").matches) {
    return document.getElementsByClassName("testimonial-card");
  } else {
    return document.getElementsByClassName("testimonial-section");
  }
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  slides = getSlides();
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}
function validateForm() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const businessEmail = document.getElementById("businessEmail");
  const company = document.getElementById("company");
  const country = document.getElementById("country");

  function setError(element, message) {
    element.classList.add("error");
    element.placeholder = message;
    element.value = "";
  }

  function clearError(element) {
    element.classList.remove("error");
    element.placeholder = element.getAttribute("data-placeholder");
  }

  clearError(firstName);
  clearError(lastName);
  clearError(businessEmail);
  clearError(company);
  clearError(country);

  let isValid = true;

  if (firstName.value.trim() === "") {
    setError(firstName, "First Name is required");
    isValid = false;
  }

  if (lastName.value.trim() === "") {
    setError(lastName, "Last Name is required");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(businessEmail.value.trim())) {
    setError(businessEmail, "Enter a valid email");
    isValid = false;
  }

  if (company.value.trim() === "") {
    setError(company, "Company is required");
    isValid = false;
  }

  if (country.value === "" || country.value === "Country") {
    setError(country, "Select a country");
    isValid = false;
  }

  if (isValid) {
    window.location.href = "thankyou.html";
  } else {
    alert("Please correct the errors and try again.");
  }
}
