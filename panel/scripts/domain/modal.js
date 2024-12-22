const modalAdd = document.querySelector("#add-domain");
const btnAdd = document.querySelector("#add-domain-btn");

const modalDelete = document.querySelector("#delete-domain");
const modalDeleteBtn = document.querySelector("#delete-domain-btn");


if (modalAdd && btnAdd) {
  btnAdd.addEventListener("click", () => {
    toggleModal(modalAdd);
    modalAdd
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, modalAdd));
  });

  modalDeleteBtn.addEventListener("click", () => {
    toggleModal(modalDelete);
    modalDelete
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, modalDelete));
  });
}

const modalRegister = document.querySelector("#register-domain");
const btnRegister = document.querySelector(".choose-domain-search-but button");

if (modalRegister && btnRegister) {
  btnRegister.addEventListener("click", () => {
    toggleModal(modalRegister);
    modalRegister
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, modalRegister));
  });

  const btnPay = document.querySelector("#button-pay");
  const modalPay = document.querySelector("#pay-domain");

  btnPay.addEventListener("click", () => {
    toggleModal(modalPay);
    toggleModal(modalRegister);
    modalPay
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, modalPay));
  });
}
