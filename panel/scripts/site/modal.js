const modalCreatePath = document.querySelector("#path-modal");
const btnCreate = document.querySelector("#create-site-btn");

const modalDomain = document.querySelector("#domain-modal");
const btnDomain = document.querySelector("#site-domain");

const modalApps = document.querySelector("#apps-modal");
const btnApps = document.querySelector("#apps-button");

const modalConfigure = document.querySelector("#configure-modal");
const btnConfigure = document.querySelector("#configure-button");

const finalBtn = document.querySelector("#final-create-button");

if (modalCreatePath && btnCreate) {
  btnCreate.addEventListener("click", () => {
    toggleModal(modalCreatePath);
    modalCreatePath
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, modalCreatePath));
  });

  btnDomain.addEventListener("click", () => {
    toggleModal(modalCreatePath);
    toggleModal(modalDomain);
    modalDomain
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, modalDomain));
  });

  btnApps.addEventListener("click", () => {
    toggleModal(modalDomain);
    toggleModal(modalApps);
    modalApps
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, modalApps));
  });

  btnConfigure.addEventListener("click", () => {
    toggleModal(modalApps);
    toggleModal(modalConfigure);
    modalConfigure
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, modalConfigure));
  });

  finalBtn.addEventListener("click", () => {
    toggleModal(modalConfigure);
  });
}

const editFolderButton = document.querySelector("#edit-folder-button");
const editFolderModal = document.querySelector("#edit-folder-modal");

const configureButton = document.querySelector("#configure-button");
const configureModal = document.querySelector("#configure-modal");

const appsButton = document.querySelector("#apps-button");
const appsModal = document.querySelector("#apps-modal");

if (editFolderModal && editFolderButton) {
  editFolderButton.addEventListener("click", () => {
    toggleModal(editFolderModal);

    editFolderModal
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, editFolderModal));
  });

  configureButton.addEventListener("click", () => {
    toggleModal(configureModal);

    configureModal
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, configureModal));
  });

  appsButton.addEventListener("click", () => {
    toggleModal(appsModal);

    appsModal
      .querySelector(".logout-close")
      .addEventListener("click", toggleModal.bind(null, appsModal));
  });
}
