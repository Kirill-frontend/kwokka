const passportDataButtons = document.querySelectorAll("#passport-data-button");
const passportDataModal = document.querySelector("#passport-data-modal");

const contactDataButton = document.querySelector("#contact-data-button");
const contactDataModal = document.querySelector("#contact-data-modal");

const personalDataButton = document.querySelector("#personal-data-button");
const personalDataModal = document.querySelector("#personal-data-modal");

const endSessionButton = document.querySelector("#end-session-button");
const endSessionModal = document.querySelector("#end-session-modal");

const changePasswordButton = document.querySelector("#change-password-button");
const changePasswordModal = document.querySelector("#change-password-modal");

const changeEmailButton = document.querySelector("#change-email-button");
const changeEmailModal = document.querySelector("#change-email-modal");

passportDataButtons.forEach((item) => {
  item.addEventListener("click", () => {
    toggleModal(passportDataModal);

    passportDataModal
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, passportDataModal));
  });
});

contactDataButton.addEventListener("click", () => {
  toggleModal(contactDataModal);

  contactDataModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, contactDataModal));
});

personalDataButton.addEventListener("click", () => {
  toggleModal(personalDataModal);

  personalDataModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, personalDataModal));
});

endSessionButton.addEventListener("click", () => {
  toggleModal(endSessionModal);

  endSessionModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, endSessionModal));
});
changePasswordButton.addEventListener("click", () => {
  toggleModal(changePasswordModal);

  changePasswordModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, changePasswordModal));
});

changeEmailButton.addEventListener("click", () => {
  toggleModal(changeEmailModal);

  changeEmailModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, changeEmailModal));
});
