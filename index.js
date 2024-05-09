const btn = document.querySelector('.shared-btn');

btn.addEventListener('click', (e) => {
    btn.nextElementSibling.classList.toggle('is-show');
})
