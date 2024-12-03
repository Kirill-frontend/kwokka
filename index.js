const burgerBtn = document.querySelector(".burger-menu-bars");
const burgerContent = document.querySelector(".burger-menu-content");

const modalContainer = document.querySelector(".modal-container");


const btns = document.querySelectorAll(".tariff-button button");
btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainer.classList.toggle("hidden");
    document.body.addEventListener("click", modalHandler);
  });
});

function modalHandler(e) {
  if (e.target.classList.contains("modal-container")) {
    modalContainer.classList.toggle("hidden");
    document.body.removeEventListener('click', modalHandler)
  }
}


burgerBtn.addEventListener("click", () => {
  burgerContent.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  if (burgerContent.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
