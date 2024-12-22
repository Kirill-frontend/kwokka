const progress = document.querySelector('.progress-bar-line');

progress.style.width = progress.getAttribute('data-memory') + '%';
progress.style.opacity = 1;
