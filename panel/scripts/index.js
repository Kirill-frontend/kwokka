const burgerBtn = document.querySelector(".nav-top-burger-bars");
const nav = document.querySelector("nav");
const navTexts = document.querySelectorAll(".nav-bottom-link-text");
const linksA = document.querySelectorAll(".nav-bottom-links li a");
const dropdownLinks = document.querySelectorAll(".dropdown-list-texts");

const logoutModal = document.querySelector("#logout-modal");
const logoutButton = document.querySelector(".nav-bottom-logout button");

const depositBalanceModal = document.querySelector("#deposit-balance-modal");
const depositBalanceButton = document.querySelector("#deposit-balance-button");

const toggleModal = (modal) => {
  modal.classList.toggle("hidden");
};

logoutButton.addEventListener("click", () => {
  toggleModal(logoutModal);
  logoutModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, logoutModal));
});

depositBalanceButton.addEventListener("click", () => {
  toggleModal(depositBalanceModal);
  depositBalanceModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, depositBalanceModal));
});


const dropdownBtn = document.querySelectorAll(".dropdown-list-title");

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dropdownList = btn.nextElementSibling;
    if (dropdownList.style.maxHeight === "0px") {
      nav.style.width = "273px";
      navTexts.forEach((text) => (text.style.display = "inline"));
      linksA.forEach((link) => (link.style.padding = "16px"));
      dropdownLinks.forEach((link) => (link.style.padding = "16px"));
      dropdownList.style.maxHeight = "500px";
      btn.querySelector(".dropdown-chevron svg").style.transform =
        "rotate(180deg)";
    } else {
      dropdownList.style.maxHeight = "0";
      btn.querySelector(".dropdown-chevron svg").style.transform =
        "rotate(0deg)";
    }
  });
});

burgerBtn.addEventListener("click", () => {
  console.log(nav.style.width);
  if (nav.style.width == "273px") {
    nav.style.width = "57px";
    navTexts.forEach((text) => (text.style.display = "none"));
    linksA.forEach((link) => (link.style.padding = "8px"));
    dropdownLinks.forEach((link) => (link.style.padding = "8px"));
  } else {
    nav.style.width = "273px";
    navTexts.forEach((text) => (text.style.display = "inline"));
    linksA.forEach((link) => (link.style.padding = "16px"));
    dropdownLinks.forEach((link) => (link.style.padding = "16px"));
  }
});
