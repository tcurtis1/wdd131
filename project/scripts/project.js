document.addEventListener('DOMContentLoaded', () => {
    updateLastModified();
    updateVisitorCount();
    setupFormSubmission();
    setupHamburgerMenu();
    setupSearchFunction();
});

function updateLastModified() {
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;
}

function updateVisitorCount() {
    const visitorCountElement = document.getElementById('visitor-count');
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    visitorCountElement.textContent = `Visitor Count: ${visitorCount}`;
}

function setupFormSubmission() {
    const form = document.getElementById('message-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const location = document.getElementById('location').value;
            const message = document.getElementById('message').value;

            alert(`Thank you, ${name} from ${location}! Your message has been sent: ${message}`);

            const welcomeMessage = document.createElement('p');
            welcomeMessage.textContent = `Welcome, ${name}!`;

            const aboutMeSection = document.getElementById('about-me');
            if (aboutMeSection) {
                aboutMeSection.parentElement.insertBefore(welcomeMessage, aboutMeSection);
            } else {
                form.parentElement.insertBefore(welcomeMessage, form);
            }

            form.reset();
        });
    }
}

function setupHamburgerMenu() {
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');

    if (hambutton) {
        hambutton.addEventListener('click', () => {
            mainnav.classList.toggle('show');
            hambutton.classList.toggle('show');
        });
    }
}

function setupSearchFunction() {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            const filter = searchInput.value.toLowerCase();
            const rows = document.querySelectorAll('#project-table tbody tr');
            rows.forEach(row => {
                const cells = row.getElementsByTagName('td');
                let match = false;
                for (let i = 0; i < cells.length; i++) {
                    if (cells[i].textContent.toLowerCase().indexOf(filter) > -1) {
                        match = true;
                        break;
                    }
                }
                row.style.display = match ? '' : 'none';
            });
        });
    }
}

function sortTable(n) {
    const table = document.getElementById('project-table');
    let switching = true, shouldSwitch, dir = 'asc', switchCount = 0;

    while (switching) {
        switching = false;
        const rows = table.rows;
        for (let i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            const x = rows[i].getElementsByTagName('TD')[n];
            const y = rows[i + 1].getElementsByTagName('TD')[n];
            if (dir === 'asc') {
                if (x.textContent.toLowerCase() > y.textContent.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === 'desc') {
                if (x.textContent.toLowerCase() < y.textContent.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }
}
