const payButtons = document.querySelectorAll(".pay-host-button");
const payModal = document.querySelector("#pay-host-modal");
console.log(payButtons)
payButtons.forEach((item) => {
  console.log(item)
  item.addEventListener("click", () => {
    toggleModal(payModal);

    payModal
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, payModal));
  });
});
