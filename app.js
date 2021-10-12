const accs = document.querySelectorAll('.list__item');

for (acc of accs) {
    acc.addEventListener('click', function () {
        if (this.classList.contains('dropdown')) {
            this.classList.remove('dropdown');
        } else {
            for (item of accs) {
                item.classList.remove('dropdown');
            }
            this.classList.add('dropdown');
        }
    })
}