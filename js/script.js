const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

// Arama butonu tıklama olayı
searchBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Bu tıklamanın dışarıya etkileşimini engelle
  searchForm.classList.toggle("active");
});

// Dışarıdaki tıklamaları dinle
document.addEventListener("click", function (e) {
  // Arama formu kontrolü
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // Sepet kontrolü
  if (!cartBtn.contains(e.target) && !cartItem.contains(e.target)) {
    cartItem.classList.remove("active");
  }

  // Menü kontrolü
  if (!menuBtn.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// Sepet butonu tıklama olayı
cartBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Bu tıklamanın dışarıya etkileşimini engelle
  cartItem.classList.toggle("active");
});

// Menü butonu tıklama olayı
menuBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // Bu tıklamanın dışarıya etkileşimini engelle
  navbar.classList.toggle("active");
});