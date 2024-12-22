const createMailButton = document.querySelector("#create-email-button");
const createMailModal = document.querySelector("#create-mail-modal");

createMailButton.addEventListener("click", () => {
  toggleModal(createMailModal);

  createMailModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, createMailModal));
});
