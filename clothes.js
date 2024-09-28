document.addEventListener('DOMContentLoaded', function() {
    const container = document.body;
    const numHangers = 50;

    for (let i = 0; i < numHangers; i++) {
        const hanger = document.createElement('div');
        hanger.classList.add('hanger');
        hanger.style.left = `${Math.random() * 100}%`;
        hanger.style.top = `${Math.random() * 100}%`;
        container.appendChild(hanger);
    }

    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim().toLowerCase();
            alert(`${action} action clicked!`);
        });
    });
});