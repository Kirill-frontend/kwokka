const select = document.querySelector(".selected-os");
const selectContent = document.querySelector(".selected-os-texts");
const osInput = document.querySelector("#os-input");
const optionsContainer = document.querySelector(".os-options");
const options = optionsContainer.querySelectorAll(".os-option");
const chevron = document.querySelector(".chevron");

const orderBtn = document.querySelector("#order-button");

select.addEventListener("click", (e) => {
  optionsContainer.classList.toggle("active");
  chevron.classList.toggle("active");
});

options.forEach((item) => {
  item.addEventListener("click", (e) => {
    selectContent.innerHTML = "";
    selectContent.appendChild(e.target.cloneNode(true));
    osInput.value = e.target.textContent.trim();
    optionsContainer.classList.remove("active");
    chevron.classList.remove("active");
  });
});

orderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.classList.toggle("hidden");
  document.body.addEventListener("click", modalHandler);
});

function modalHandler(e) {
  if (e.target.classList.contains("modal-container")) {
    modalContainer.classList.toggle("hidden");
    document.body.removeEventListener('click', modalHandler)
  }
}
