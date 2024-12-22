const payButton = document.querySelector("#pay-button");
const payModal = document.querySelector("#pay-modal");

payButton.addEventListener("click", () => {
  toggleModal(payModal);

  payModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, payModal));
});
