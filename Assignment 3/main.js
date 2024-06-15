// JavaScript code
document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    document.querySelector('.show-info').classList.remove('hide');
    document.querySelector('.hide-info').classList.add('hide');
});

document.addEventListener('DOMContentLoaded', function () {
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');

    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const cardContentBody = this.closest('.card-content').querySelector('.card-content-body');

            cardContentBody.classList.toggle('show');

            if (cardContentBody.classList.contains('show')) {
                this.textContent = 'View Less';
            } else {
                this.textContent = 'View More';
            }

        });
    });
});
