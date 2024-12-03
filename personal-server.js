const rentServer = document.querySelectorAll('.catalog-server-button button')
rentServer.forEach((button) => {
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