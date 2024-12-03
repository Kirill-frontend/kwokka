const select = document.querySelector(".selected-country");
const selectContent = document.querySelector(".selected-country-texts");
const input = document.querySelector("#country-input");
const optionsContainer = document.querySelector(".country-options");
const options = optionsContainer.querySelectorAll(".country-option");
const chevron = document.querySelector(".chevron");

select.addEventListener("click", (e) => {
  optionsContainer.classList.toggle("active");
  chevron.classList.toggle("active");
});

options.forEach((item) => {
  item.addEventListener("click", (e) => {
    selectContent.innerHTML = "";
    selectContent.appendChild(e.target.cloneNode(true));
    const optionValue = e.target.textContent.trim().toString;
    optionsContainer.classList.toggle("active");
    chevron.classList.remove("active");
    input.value = optionValue;
   
  });
});
