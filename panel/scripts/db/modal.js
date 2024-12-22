const dbCreateButton = document.querySelector("#create-db-button");
const dbCreateModal = document.querySelector("#create-db-modal");

const dbDeleteButton = document.querySelector("#delete-db-button");
const dbDeleteModal = document.querySelector("#delete-db-modal");


dbCreateButton.addEventListener("click", () => {
  toggleModal(dbCreateModal);

  dbCreateModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, dbCreateModal));
});

dbDeleteButton.addEventListener("click", () => {
  toggleModal(dbDeleteModal);

  dbDeleteModal
    .querySelector(".logout-close")
    .addEventListener("click", toggleModal.bind(null, dbDeleteModal));
});
